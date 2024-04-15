import Link from 'next/link';
import { BackArrowIcon } from '../Icons';

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcon />
      </Link>

      <div>
        <img
          src="/safe-movers-logo-1.png"
          className="h-12 w-32 sm:h-auto sm:w-auto"
          alt="Safe Movers Logo"
        />
      </div>
    </div>
  );
};

export default CmsNavbar;
