'use client';
import React from 'react';
import SideMenu from './sideMenu';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CanvasWrapper from './CanvasWrapper';

const Demo = () => {
  return (
    <div>
      <div className="fixed flex pointer-events-auto top-0 left-0  z-50 bg-secondary text-center rounded p-1 m-2">
        <Link href="/">
          <ArrowLeft className="h-7 w-7 " />
        </Link>
      </div>
      <SideMenu />
      <CanvasWrapper />
    </div>
  );
};

export default Demo;
