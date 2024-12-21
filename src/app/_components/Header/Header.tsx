'use client'

import { Avatar, Banner, Navigation, SocialGlyphCollection } from '..'
import Newsletter from '../Newsletter/Newsletter'
import styles from './Header.module.sass'

export default function Header() {
    return (
        <header className={styles.header}>
            <Banner />
            <Avatar />
            <h1>loafykitten</h1>
            <h2>lofi to cast spells to 🧙🏼‍♀️</h2>
            <SocialGlyphCollection />
            <Newsletter />
            <Navigation />
        </header>
    )
}
