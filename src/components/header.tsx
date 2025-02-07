import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from '../components/ui/hamburger';

export default function Header() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center px-2">
        <Link href="/">
          <Image src="/icons/PS-logo-transparent.png" alt="Logo" className="w-16 h-16 mt-2 me-3" width={100} height={100} />
        </Link>
      </div>
      
      <div>
        <Hamburger />
      </div>
      
    </div>
    </>
  );
}
