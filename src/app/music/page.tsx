import { ButtonTree, ContentSection, IconButtonProps } from '@/components'
import {
    faApple,
    faBandcamp,
    faSpotify,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default function Music() {
    const items: IconButtonProps[] = [
        {
            href: '/spotify',
            icon: faSpotify,
            title: 'spotify',
            label: 'listen and see playlists',
        },
        {
            href: '/apple',
            icon: faApple,
            title: 'apple music',
            label: 'vibe to hq versions',
        },
        {
            href: '/youtube',
            icon: faYoutube,
            title: 'youtube',
            label: 'watch or listen',
        },
        {
            href: '/bandcamp',
            icon: faBandcamp,
            title: '($) bandcamp',
            label: 'buy an ep to own',
        },
    ]

    return (
        <ContentSection section="music">
            <ButtonTree items={items} />
        </ContentSection>
    )
}
