"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
  } from '@/components/ui/resizable-navbar';
import { motion } from 'motion/react';
import { useState } from 'react';
  
  const navItems = [
    { name: 'About', link: '/#about' },
    { name: 'Experience', link: '/#experience' },
    { name: 'Projects', link: '/#projects' },
    { name: 'Tech Stack', link: '/tech-stack' },
    { name: 'Contact', link: '/#contact' },
  ];


export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <motion.div
            className="pointer-events-none fixed inset-x-0 top-0 z-[60]"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <Navbar className="pointer-events-auto">
                <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                </NavBody>
                <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>
                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.link}
                        className="text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                    ))}
                </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </motion.div>
    );
};