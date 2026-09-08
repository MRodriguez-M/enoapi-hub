import React from 'react';
import { Heart, Coffee } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/50 py-12 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-white">
                Eno API Hub
              </span>
              <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Open Source
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 max-w-md">
              Demystifying public APIs for developers, students, and hackathon creators.
              Built with Next.js 16, React 19, and Tailwind CSS v4.
            </p>
          </div>

          {/* Links & Community */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/AlphaIsYour/enoapi-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://github.com/AlphaIsYour/enoapi-hub/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contributing Guide
            </a>

            <a
              href="https://github.com/AlphaIsYour/enoapi-hub/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Issue Tracker
            </a>

            <a
              href="https://buymeacoffee.com/enoalph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:underline transition-colors"
            >
              <Coffee className="h-3.5 w-3.5" />
              <span>Buy Me a Coffee</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Eno API Hub Contributors. Released under MIT License.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
            <span>for the developer community.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
