import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'


const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'projects' },
    { path: '/blogs', name: 'blogs' },
    { path: '/contact', name: 'contact' },
]

export default function NavBar({ containerStyle, linkStyles, underlineStyles }) {
    const path = usePathname();
    return (
        <nav className={`${containerStyle}`}>
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
                    {link.path === path && (<motion.span initial={{ y: '-100'}} animate={{y: 0}} transition={{type: 'tween'}} layoutId='underline' className={`${underlineStyles}`} />)}
                    {link.name}
                </Link>
            })}
        </nav>
    )
}
