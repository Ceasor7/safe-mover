'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden mr-5">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink href="/" className="flex items-center">
          <img
            src="safe-movers-logo-1.png"
            className="h-12 w-32 sm:h-auto sm:w-auto"
            alt="Safe Movers Logo"
          />
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/about-us">
            About Us
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/services">
            Services
          </MobileLink>
          <Link onOpenChange={setOpen} href="/contact">
            Contact Us
          </Link>
          <Link onOpenChange={setOpen} href="/blog">
            Blog
          </Link>
          <Link onOpenChange={setOpen} href="/safe-movers-shop">
            Safe Movers Shop
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({ href, onOpenChange, children, className, ...props }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
