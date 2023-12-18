import React from 'react'
import Link from 'next/link'
import { Send, Download } from 'lucide-react'
import { RiCalendar2Fill, RiShoppingBag3Fill, RiBriefcase2Fill } from "react-icons/ri";

import { Button } from './ui/button'
import Socials from './Socials'
import DevImg from './DevImg'
import Badge from './Badge'

export default function Hero() {
  return (
    <section className='py-12 xl:py-12 h-[84vh] xl:pt-28 bg-[#e5d9c2] bg-no-repeat bg-bottom bg-cover dark:bg-background'>
        <div className='container mx-auto'>
            <div className='flex justify-between gap-x-8'>
                {/* text */}
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                    <h1 className='h1'>Hello, my name is Paul Andrew</h1>
                    <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Bried description with insights into myself, my vocational journey, and what i engage in profesionally</p>
                    {/* buttons */}
                    <div className='flex flex:row gap-y-3 gap-x-3 mx-auto xl:mx-0 mb-12'>
                        <Link href='/contact'>
                            <Button className='gap-x-2'>
                                Contact me <Send size={18} />
                            </Button>
                        </Link>
                        <Link href='/Resume'>
                            <Button variant='secondary' className='gap-x-2'>
                                Resume<Download size={18} />
                            </Button>
                        </Link>
                    </div>
                    {/* socials */}
                    <Socials containerStyle='flex gap-x-6 mx-auto xl:mx-0' iconsStyle='text-foreground text-[25px] hover:text-primary transition-all'/>
                </div>
                {/* image */}
                <div className='hidden xl:flex relative'>
                    {/* Badges */}
                    <Badge containerStyle='absolute top-[24%] right-[27rem]' icon={<RiBriefcase2Fill />} endCountNum={3} badgeText='Years of experience' />
                    <Badge containerStyle='absolute top-[60%] right-[1rem]' icon={<RiBriefcase2Fill />} endCountNum={3} badgeText='Finished Projects' />
                    <Badge containerStyle='absolute top-[70%] right-[23rem]' icon={<RiBriefcase2Fill />} endCountNum={1} badgeText='Happy Clients' />
                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                    <DevImg containerStyle='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer.png' />
                </div>
            </div>
            <div>
                {/* socials */}
            </div>
        </div>
    </section>
  )
}
