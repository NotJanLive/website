'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, Home, FolderCode, User, Coffee, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Projects', href: '#projects', icon: FolderCode },
  { name: 'About', href: '#about', icon: User },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(26, 26, 26, 0)", "rgba(10, 10, 10, 0.8)"]
  );
  
  const blurValue = useTransform(
    scrollY,
    [0, 100],
    [0, 16]
  );
  
  const backdropFilter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.header 
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/5 px-6 py-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-[0_0_20px_rgba(161,1,161,0.5)] transition-transform group-hover:rotate-12">
            <span className="text-xl font-black text-white">N</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-white">NotJan</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 glass rounded-full px-8 py-2.5 mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex h-12 rounded-xl bg-[#28a745] px-6 font-bold text-white shadow-[0_0_20px_rgba(40,167,69,0.3)] hover:bg-[#218838] transition-all hover:scale-105">
            <a href="https://ko-fi.com/notjan" target="_blank" rel="noopener noreferrer">
              <Coffee className="mr-2 h-5 w-5" />
              Buy me a coffee
            </a>
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden glass h-12 w-12 rounded-xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full border-t border-white/5 glass p-6 md:hidden"
        >
          <div className="grid gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-lg font-bold text-white/70 hover:text-primary transition-colors"
              >
                <item.icon className="h-6 w-6" />
                {item.name}
              </Link>
            ))}
            <Button asChild className="h-14 w-full rounded-2xl bg-[#28a745] font-bold text-white">
              <a href="https://ko-fi.com/notjan" target="_blank" rel="noopener noreferrer">
                <Coffee className="mr-2 h-6 w-6" />
                Buy me a coffee
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
