'use client'

import React from 'react'
import Link from 'next/link'
import { 
  RiDiscordFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,
} from 'react-icons/ri'

const icons = [
  { path: '/', name: <RiDiscordFill /> },
  { path: '/', name: <RiGithubFill/> },
  { path: '/', name: <RiTwitterFill/> },
  { path: '/', name: <RiInstagramFill/> }
]

export default function Socials({ containerStyle, iconsStyle }) {
  return (
    <div className={`${containerStyle}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyle}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
