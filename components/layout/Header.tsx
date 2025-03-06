'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

const NavLink = ({ 
  item, 
  isMobile = false, 
  isScrolled = false,
  onClick 
}: { 
  item: NavItem; 
  isMobile?: boolean;
  isScrolled?: boolean;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  if (isMobile) {
    return (
      <Link
        href={item.href}
        className={`block py-3 px-2 text-base font-medium tracking-wide transition-colors duration-200
          ${isActive 
            ? 'text-orange-600 bg-orange-50' 
            : 'text-gray-700 hover:text-orange-600'
          }`}
        onClick={onClick}
        aria-label={`Navigate to ${item.name}`}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <NavigationMenuItem className="px-1">
      <Link href={item.href} legacyBehavior passHref>
        <NavigationMenuLink
          className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200
            ${isActive 
              ? (isScrolled ? 'text-orange-600' : 'text-orange-500') 
              : (isScrolled ? 'text-[#1f1f1f] hover:text-orange-600' : 'text-gray-100 hover:text-orange-500')
            }`}
          aria-label={`Navigate to ${item.name}`}
        >
          {item.name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const menuAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      {...menuAnimation}
      className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-lg border-t border-gray-100"
    >
      <nav className="py-2 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            item={item}
            isMobile={true}
            onClick={onClose}
          />
        ))}
        <div className="px-4 py-3">
          <Button 
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium tracking-wide"
            aria-label="Get Started"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </motion.div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" aria-label="Home">
            <div className="w-10 h-10 items-center justify-center">
              <Image
                src="/ainrion.svg"
                width={40}
                height={40}
                alt="Ainrion logo"
              />
            </div>
            <span className={`font-bold text-xl hidden sm:block tracking-wide transition-colors duration-200
              ${isScrolled ? 'text-[#1f1f1f]' : 'text-gray-100'}`}
            >
              Ainrion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.name} 
                    item={item}
                    isScrolled={isScrolled}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-200
                ${isScrolled 
                  ? 'text-[#1f1f1f] hover:text-orange-600' 
                  : 'text-gray-100 hover:text-orange-500'}`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </motion.header>
  );
};

export default Header;