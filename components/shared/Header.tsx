import Link from "next/link";
import Image from "next/image";
import {SignedOut} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href='/' className='w-36'>
                    <Image src='/assets/images/logo.svg' width={128} height={38} alt='Evently Logo' />
                </Link>

                <div className="flex w-32 justify-end gap-3">
                  <SignedOut>
                      <Button asChild className='rounded-full size-lg'>
                          <Link href='/sign-in'>Login</Link>
                      </Button>
                  </SignedOut>
                </div>
            </div>
        </header>
    )
}
