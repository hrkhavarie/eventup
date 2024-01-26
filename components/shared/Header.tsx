import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <header className='flex w-full border-b'>
      <div className="wrapper flex items-center justify-between">
        <Link href='/' className='w-36'>
          <Image src='/assets/images/logo.svg'
            alt='Event Up logo'
            width={128}
            height={38}
          />
        </Link>
        

        <div className='flex w-32 justify-end gap-3'>

          <SignedIn>
          <UserButton afterSignOutUrl='/'/>

          </SignedIn>

          <SignedOut>
            <Button asChild className='rounded-full' size='lg'>
              <Link href='/sign-in'>
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
