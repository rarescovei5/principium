"use client";

import {Button, Divider} from '@principium/react';
import Link from 'next/link';
import {GithubLogoIcon} from '@phosphor-icons/react/dist/ssr';

import {ThemeToggle} from './ThemeToggle';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isDocs = pathname.startsWith('/docs');
  const isComponents = pathname.startsWith('/components');
  const isBlog = pathname.startsWith('/blog');
  const isPlayground = pathname.startsWith('/playground');
  return (
    <nav className="sticky top-0 z-40 flex h-16 items-center backdrop-blur-xl backdrop-saturate-150">
      <header className="relative flex flex-1 items-center justify-between gap-4 px-6 max-w-8xl mx-auto">
        {/* Link to Home Page  */}
        <div className="flex items-center gap-2 text-xl">
          <Link href="/">Principium UI</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Links to Docs, Components, Blog, */}
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/docs/guide/introduction" className={isDocs ? 'text-primary-400 dark:text-primary-600' : ''}>Docs</Link>
            </li>
            <li>
              <Link href="/components" className={isComponents ? 'text-primary-400 dark:text-primary-600' : ''}>Components</Link>
            </li>
            <li>
              <Link href="/blog" className={isBlog ? 'text-primary-400 dark:text-primary-600' : ''}>Blog</Link>
            </li>
            <li>
              <Link href="/playground" className={isPlayground ? 'text-primary-400 dark:text-primary-600' : ''}>Playground</Link>
            </li>
          </ul>
          <Divider className="h-7" orientation="vertical" />
          <div className="flex items-center gap-2">
            <Button className="border-1 rounded-full" size="icon" variant="bordered">
              <Link href="https://github.com/principium-studios/principium" target="_blank">
                <GithubLogoIcon size={16} />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
