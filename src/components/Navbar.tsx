import React, { useState } from 'react';
import { Mail, UserCircle, Menu, X, Shield, Code2, HelpCircle, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/65 dark:bg-gray-900/65 border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary-50 dark:bg-primary-900/50 p-2.5 rounded-xl backdrop-blur-sm">
              <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  TempMail
                </span>
                <span className="px-2 py-0.5 text-[10px] font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full ml-2 backdrop-blur-sm">
                  BETA
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Secure Temporary Email</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <a href="#features" className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Features</span>
              </a>
              <a href="#api" className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                <Code2 className="h-4 w-4" />
                <span className="text-sm font-medium">API</span>
              </a>
              <a href="#support" className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Support</span>
              </a>
            </div>
            <div className="flex items-center pl-6 border-l border-gray-200 dark:border-gray-700 space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 transition-all duration-200"
                aria-label="Sign In"
              >
                <UserCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <a
              href="#features"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Features</span>
            </a>
            <a
              href="#api"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Code2 className="h-5 w-5" />
              <span className="text-sm font-medium">API</span>
            </a>
            <a
              href="#support"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Support</span>
            </a>
            <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
              <button
                className="w-full flex items-center justify-center p-2.5 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-lg transition-all duration-200"
                aria-label="Sign In"
              >
                <UserCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}