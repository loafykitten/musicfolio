import { ButtonTree, ContentSection, LinkButtonProps } from '@/components'
import {
    faInstagram,
    faThreads,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

export default function Socials() {
    const items: LinkButtonProps[] = [
        {
            href: '/ko-fi',
            icon: faMugHot,
            title: 'ko-fi',
            label: 'throw coins in my tip jar',
        },
        {
            href: '/tiktok',
            icon: faTiktok,
            title: 'tiktok',
            label: 'look behind the scenes with tiktok',
        },
        {
            href: '/threads',
            icon: faThreads,
            title: 'threads',
            label: 'read my monologues and talk to me',
        },
        {
            href: '/instagram',
            icon: faInstagram,
            title: 'instagram',
            label: 'look at loafykitten pics',
        },
    ]

    return (
        <ContentSection section="socials">
            <ButtonTree items={items} />
        </ContentSection>
    )
}
