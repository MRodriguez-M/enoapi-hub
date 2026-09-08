'use client';

import React from 'react';
import { Category } from '@/data/types';
import { CategoryIcon } from './CategoryIcon';
import { Layers } from 'lucide-react';

interface CategoryTabsProps {
  categories: Category[];
  selectedCategoryId: string | undefined;
  onSelectCategory: (categoryId: string | undefined) => void;
  totalApisCount: number;
}

export function CategoryTabs({
  categories,
  selectedCategoryId,
  onSelectCategory,
  totalApisCount,
}: CategoryTabsProps) {
  return (
    <div className="w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          {/* "All" Category Pill */}
          <button
            onClick={() => onSelectCategory(undefined)}
            className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold transition-all shrink-0 ${
              selectedCategoryId === undefined
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>All Categories</span>
            <span
              className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                selectedCategoryId === undefined
                  ? 'bg-white/20 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
              }`}
            >
              {totalApisCount}
            </span>
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(isSelected ? undefined : cat.id)}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold transition-all shrink-0 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                }`}
                title={cat.description}
              >
                <CategoryIcon name={cat.icon} className="h-3.5 w-3.5" />
                <span>{cat.name}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
