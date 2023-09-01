import React from 'react';
import { Button } from '../../components/button';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className="text-secondary">
      <ul className="flex w-[400px] justify-between">
        <li className="pt-4">
          <Link href="/aboutUs">About Us</Link>
        </li>
        <li className="pt-4">
          <Link href="/howItWorks">How it Works</Link>
        </li>
        <li>
          <Button
            variant="outline"
            className=" text-lg h-12 bg-primary hover:bg-transparent hover:text-primary hover:border-primary hover:border-2 text-white"
          >
            Contact us
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
