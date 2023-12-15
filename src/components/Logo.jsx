import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href='/'>
        <Image src='/next.svg' width={54} height={54} priority alt='' />
    </Link>
  )
}
