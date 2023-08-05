import Image from 'next/image';
import Link from 'next/link';

export default function TopBar() {
  return (
    <nav className="topbar">
      <Link className="flex items-center gap-4" href="/">
        <Image src={'/assets/logo.svg'} alt="logo" width={38} height={38} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
    </nav>
  );
}
