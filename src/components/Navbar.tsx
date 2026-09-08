'use client';

import React from 'react';
import { Heart, Coffee, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface NavbarProps {
  totalApis: number;
  totalFavorites: number;
  showOnlyFavorites: boolean;
  onToggleFavorites: () => void;
}

export function Navbar({
  totalApis,
  totalFavorites,
  showOnlyFavorites,
  onToggleFavorites,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 shadow-md shadow-blue-500/20 text-white font-bold text-lg">
            E
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">
                Eno API Hub
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border border-blue-500/20">
                <Sparkles className="h-3 w-3" />
                Translator
              </span>
            </div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:inline">
              Demystifying public APIs for developers
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Stats */}
          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 mr-2 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <BookOpen className="h-3.5 w-3.5 text-blue-500" />
            <span><strong className="text-zinc-800 dark:text-zinc-200">{totalApis}</strong> APIs Curated</span>
          </div>

          {/* Favorites Filter Toggle */}
          <button
            onClick={onToggleFavorites}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              showOnlyFavorites
                ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/30'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
            }`}
            title="Tampilkan hanya API favorit"
          >
            <Heart
              className={`h-3.5 w-3.5 ${
                showOnlyFavorites ? 'fill-current' : 'text-rose-500'
              }`}
            />
            <span>Favorites</span>
            <span
              className={`ml-0.5 rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                showOnlyFavorites
                  ? 'bg-white/20 text-white'
                  : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {totalFavorites}
            </span>
          </button>

          {/* Buy Me a Coffee Support Link */}
          <a
            href="https://buymeacoffee.com/enoalph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
            title="Support development"
          >
            <Coffee className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Support</span>
          </a>

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/AlphaIsYour/enoapi-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 w-8 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors"
            title="GitHub Repository"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
