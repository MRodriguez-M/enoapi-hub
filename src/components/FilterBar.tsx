'use client';

import React from 'react';
import { Pricing, AuthType, Difficulty } from '@/data/types';
import { RotateCcw, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface FilterBarProps {
  pricing: Pricing | undefined;
  onPricingChange: (val: Pricing | undefined) => void;
  auth: AuthType | undefined;
  onAuthChange: (val: AuthType | undefined) => void;
  difficulty: Difficulty | undefined;
  onDifficultyChange: (val: Difficulty | undefined) => void;
  sortBy: 'name' | 'difficulty' | 'pricing';
  onSortByChange: (val: 'name' | 'difficulty' | 'pricing') => void;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
  resultsCount: number;
}

export function FilterBar({
  pricing,
  onPricingChange,
  auth,
  onAuthChange,
  difficulty,
  onDifficultyChange,
  sortBy,
  onSortByChange,
  hasActiveFilters,
  onClearFilters,
  resultsCount,
}: FilterBarProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 mr-1">
            <SlidersHorizontal className="h-3.5 w-3.5 text-zinc-400" />
            <span>Filter:</span>
          </div>

          {/* Pricing Select */}
          <select
            value={pricing || ''}
            onChange={(e) => onPricingChange(e.target.value ? (e.target.value as Pricing) : undefined)}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Pricing: All</option>
            <option value="free">Free (100% Free)</option>
            <option value="freemium">Freemium</option>
            <option value="paid">Paid</option>
          </select>

          {/* Auth Select */}
          <select
            value={auth || ''}
            onChange={(e) => onAuthChange(e.target.value ? (e.target.value as AuthType) : undefined)}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Auth: All</option>
            <option value="none">No Auth (Keyless)</option>
            <option value="api-key">API Key</option>
            <option value="bearer">Bearer Token</option>
            <option value="oauth2">OAuth 2.0</option>
            <option value="basic">Basic Auth</option>
          </select>

          {/* Difficulty Select */}
          <select
            value={difficulty || ''}
            onChange={(e) => onDifficultyChange(e.target.value ? (e.target.value as Difficulty) : undefined)}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Difficulty: All</option>
            <option value="easy">Easy (Beginner)</option>
            <option value="moderate">Moderate</option>
            <option value="advanced">Advanced</option>
          </select>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="inline-flex items-center gap-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 px-2.5 py-1.5 text-xs font-medium hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900/40 transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Right: Sort & Results Counter */}
        <div className="flex items-center justify-between md:justify-end gap-3">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <ArrowUpDown className="h-3.5 w-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value as 'name' | 'difficulty' | 'pricing')}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="name">Name (A-Z)</option>
              <option value="difficulty">Difficulty (Easy first)</option>
              <option value="pricing">Pricing (Free first)</option>
            </select>
          </div>

          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            Showing <strong className="text-zinc-800 dark:text-zinc-200">{resultsCount}</strong> APIs
          </div>
        </div>
      </div>
    </div>
  );
}
