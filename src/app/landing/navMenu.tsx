import React from 'react';
import { Button } from '../../components/button';
import Link from 'next/link';
import { ContactForm } from '@/components/contactForm';

const NavMenu = () => {
  return (
    <nav className="text-secondary">
      <ul className="flex w-[400px] max-w-[40vw] justify-between sm:justify-end">
        <li className="pt-4 sm:hidden">
          <Link href="/aboutUs">About Us</Link>
        </li>
        <li className="pt-4 sm:hidden">
          <Link href="/howItWorks">How it Works</Link>
        </li>
        <li>
          <ContactForm />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
