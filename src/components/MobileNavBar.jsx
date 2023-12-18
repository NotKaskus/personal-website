import React from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetFooter } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'

import Logo from './Logo'
import NavBar from './NavBar'
import Socials from './Socials'

export default function MobileNavBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <NavBar containerStyle='flex flex-col items-center gap-y-6' linkStyles='text-2xl' />
            <Socials containerStyle='flex gap-x-4' iconsStyle='text-3xl' />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
