import { OrganizationSwitcher, SignIn, SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function TopBar() {
  return (
    <nav className="topbar">
      <Link className="flex items-center gap-4" href="/">
        <Image src={'/assets/logo.svg'} alt="logo" width={38} height={38} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image src={'/assets/logout.svg'} alt="signout" width={24} height={24} />
              </div>
            </SignOutButton>
          </SignIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            }
          }}
        />
      </div>
    </nav>
  );
}
