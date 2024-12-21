import { Logger } from '@/features/logging'
import { SimplifiedAlbum, SimplifiedTrack } from '@/types/spotify'
import { kv } from '@vercel/kv'
import { AlbumStore, TokenStore, TrackStore } from '../stores'

const CACHE_KEY = 'cache:spotify-latest'
const EXPIRY_INTERVAL = 1000 * 10

/**
 * The response upon successful request of the artist's albums
 * @param href - A link to the Web API endpoint returning the full result of the request (ex: https://api.spotify.com/v1/me/shows?offset=0&limit=20)
 * @param limit - The maximum number of items in the response (as set in the query or by default)
 * @param next - URL to the next page of items (null if none)
 * @param offset - The offset of the items returned (as set in the query or by default)
 * @param previous - URL to the previous page of items (null if none)
 * @param total - The total number of items available to return
 */
interface IResponse {
    href: string
    limit: number
    next: string
    offset: string
    previous: string
    total: number
    items: SimplifiedAlbum[]
}

type Cache = {
    expiresAt: number
    data: SimplifiedTrack
}

const getLatest = async (
    store: TokenStore
): Promise<SimplifiedTrack | undefined> => {
    const logger = new Logger()

    const now = new Date().getTime()
    const cache = await kv.hgetall<Cache>(CACHE_KEY)
    if (cache !== null && now < cache.expiresAt) {
        logger.logDebug(`Cache Validated: ${CACHE_KEY}`)
        return cache.data
    }

    const albums = await new AlbumStore().get(store)
    if (!albums) return

    const latestSingle = albums
        .sort((a, b) => {
            const aDate = a.release_date.split('-').join('')
            const bDate = b.release_date.split('-').join('')
            return aDate.localeCompare(bDate)
        })
        .reverse()[0]
    const tracks = await new TrackStore().get(store, latestSingle.id)
    if (!tracks) return

    kv.hset(CACHE_KEY, {
        expiresAt: now + EXPIRY_INTERVAL,
        data: tracks[0],
    })

    return tracks[0]
}

export { getLatest }
