'use client'

import React from 'react'
import CountUp from 'react-countup'

export default function Badge({ containerStyle, icon, endCountNum, endCountText, badgeText }) {
  return (
    <div className={`badge ${containerStyle}`}>
        <div className='text-3xl text-black'>{icon}</div>
        <div className='flex items-center gap-x-2'>
            <div className='text-4xl leading-none font-bold text-primary'>
                <CountUp end={endCountNum} delay={1} duration={4} />
                {endCountText}
            </div>
            <div className='max-w-[70px] leading-none text-[15px] font-medium text-black'>{badgeText}</div>
        </div>
    </div>
  )
}
