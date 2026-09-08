'use client';

import React, { useRef, useEffect } from 'react';
import { Search, X, Sparkles, Zap, ShieldCheck, Gift } from 'lucide-react';

interface HeroSectionProps {
  query: string;
  onQueryChange: (val: string) => void;
  onSelectQuickFilter: (filter: { auth?: 'none'; pricing?: 'free'; difficulty?: 'easy' }) => void;
}

export function HeroSection({
  query,
  onQueryChange,
  onSelectQuickFilter,
}: HeroSectionProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener for `/`
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement !== searchInputRef.current &&
        !['input', 'textarea'].includes((document.activeElement?.tagName || '').toLowerCase())
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-zinc-200/60 dark:border-zinc-800/60">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-64 w-[36rem] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/60 mb-4 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-blue-500" />
          <span>Curated Public APIs • Explained Simply</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
          Discover APIs with{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Plain-English
          </span>{' '}
          Translations
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          No more guessing what an endpoint returns or how auth works. Every public API
          comes with human-readable breakdowns, hackathon project ideas, and copyable code snippets.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search by API name, keyword, use case, or tag (e.g. weather, pokemon, ai)..."
              className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 pl-11 pr-20 py-3.5 text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 shadow-lg shadow-zinc-200/50 dark:shadow-black/40 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
            {query ? (
              <button
                onClick={() => onQueryChange('')}
                className="absolute right-4 p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            ) : (
              <div className="absolute right-4 hidden sm:flex items-center gap-1 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 pointer-events-none">
                <span>Press</span>
                <kbd className="font-mono font-bold">/</kbd>
              </div>
            )}
          </div>

          {/* Quick Suggestion Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-zinc-400 dark:text-zinc-500 text-[11px] font-medium mr-1">Quick Picks:</span>
            <button
              onClick={() => onSelectQuickFilter({ auth: 'none' })}
              className="inline-flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-zinc-600 dark:text-zinc-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 dark:hover:text-blue-400 transition-colors border border-zinc-200 dark:border-zinc-700"
            >
              <ShieldCheck className="h-3 w-3 text-emerald-500" />
              <span>No Key Needed</span>
            </button>
            <button
              onClick={() => onSelectQuickFilter({ pricing: 'free' })}
              className="inline-flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-zinc-600 dark:text-zinc-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 dark:hover:text-blue-400 transition-colors border border-zinc-200 dark:border-zinc-700"
            >
              <Gift className="h-3 w-3 text-blue-500" />
              <span>100% Free</span>
            </button>
            <button
              onClick={() => onSelectQuickFilter({ difficulty: 'easy' })}
              className="inline-flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-zinc-600 dark:text-zinc-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 dark:hover:text-blue-400 transition-colors border border-zinc-200 dark:border-zinc-700"
            >
              <Zap className="h-3 w-3 text-amber-500" />
              <span>Beginner Friendly</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
