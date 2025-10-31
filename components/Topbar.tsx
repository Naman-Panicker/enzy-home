'use client'                                  



import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { usePathname } from "next/navigation";



export function Topbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const path = usePathname();

    const isActiveLink = (href: string) => {
    return path === href;
  };


    const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    // { name: 'Sustainability', href: '/sustainability' },
    { name: 'Contact', href: '/contact' },
  ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img 
          src="enzy_logo.png" 
          alt="Logo" 
          className="h-30 w-auto"   
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-medium transition-colors duration-200 ${
              isActiveLink(item.href)
                ? 'text-enzy-600 border-b-2 border-enzy-600 pb-1'
                : 'text-gray-700 hover:text-enzy-600'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="/products"
          className="bg-gradient-to-r from-enzy-600 to-enzy-300 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transform transition-all duration-200"
        >
          Shop Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden py-4 border-t border-gray-100">
        <div className="flex flex-col space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActiveLink(item.href)
                  ? 'text-enzy-600 bg-enzy-300'
                  : 'text-gray-700 hover:text-enzy-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/products"
            onClick={() => setIsMenuOpen(false)}
            className="mx-4 mt-4 bg-gradient-to-r from-enzy-300 to-enzy-600 text-white px-6 py-2 rounded-full text-sm font-medium text-center"
          >
            Shop Now
          </Link>
        </div>
      </div>
    )}
  </div>
</header>

    )
}