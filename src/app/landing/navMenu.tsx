import React from 'react';
import { Button } from '../../components/button';
import Link from 'next/link';
import { ContactForm } from '@/components/contactForm';

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
          <ContactForm />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
