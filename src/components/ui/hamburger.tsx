'use client';

import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  // disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <button 
        className="menu pointer-events-auto md:hidden absolute top-4 right-4" 
        onClick={(e) => {
          const button = e.currentTarget;
          button.classList.toggle('opened');
          button.setAttribute('aria-expanded', String(button.classList.contains('opened')));
          setIsOpen(!isOpen);
      }} 
        aria-label="Main Menu"
      >
        {isOpen ? 
          <CloseIcon 
            fontSize="large" 
            className="opacity-80"
          /> : 
          <MenuIcon 
            fontSize="large" 
            className="opacity-80"
          />
        }
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 me-4">
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 md:hidden">
          <nav className="flex items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-8 text-2xl">
              <Link href="/">
                <Image 
                  src="/icons/PS-logo-transparent.png" 
                  alt="Logo" 
                  className="w-10 h-10 sm:w-16 sm:h-16 md:w-16 md:h-16 mt-2 me-3 absolute top-2 left-2" 
                  width={100} 
                  height={100} 
                />
              </Link>
              <button
                className="absolute top-4 right-4 text-foreground"
                onClick={() => {
                  setIsOpen(false);
                  const menuButton = document.querySelector('.menu');
                  menuButton?.classList.remove('opened');
                  menuButton?.setAttribute('aria-expanded', 'false');
                }}
              >
                <CloseIcon fontSize="large"/>
              </button>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
