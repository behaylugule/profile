'use client';

import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import MobileDrawer from './MobileDrawer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-200">
                Behaylu Gule
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Skills
              </Link>
              <Link href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Experience
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Projects
              </Link>
              <Link href="#education" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Education
              </Link>
            </div>
            {/* Mobile Navigation */}
            <div className="flex items-center lg:hidden">
              <MobileDrawer />
            </div>
          </div>
        </div>
      </nav>

      <ThemeToggle />

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-8 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2024 Behaylu Gule Gebrekidan. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/behaylu-gule-72b17b211/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:behaylugule@gmail.com"
                target="_blank"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 