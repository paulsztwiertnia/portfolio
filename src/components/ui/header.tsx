import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './hamburger';
import { useEffect, useState } from 'react';

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      
      if (isScrollingDown && currentScrollY > 75) {
        // console.log('scrolling down');
        setIsScrolled(true);
      } else if (!isScrollingDown) {
        // console.log('scrolling up');
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
    <div className={`flex justify-between items-center sticky top-0 z-50 bg-inherit h-[85px] transition-transform duration-300 ${
      isScrolled ? '-translate-y-[100%]' : 'translate-y-100'
    }`}>
      <div className="flex items-center px-2 py-2">
        <Link href="/">
          <Image 
            src="/icons/PS-logo-transparent.png" 
            alt="Logo" 
            className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 mt-2 me-3 absolute top-2 left-2" 
            width={100} 
            height={100} 
          />
        </Link>
      </div>
      
      <div>
        <Hamburger />
      </div>
      
    </div>
    </>
  );
}
