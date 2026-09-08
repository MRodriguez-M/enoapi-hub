'use client';

import { useState, useMemo } from 'react';
import type { ApiEntry, Pricing, AuthType, Difficulty } from '@/data/types';
import { searchApis } from '@/lib/utils';

export function useSearch(apis: ApiEntry[]) {
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [pricing, setPricing] = useState<Pricing | undefined>();
  const [auth, setAuth] = useState<AuthType | undefined>();
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>();
  const [sortBy, setSortBy] = useState<'name' | 'difficulty' | 'pricing'>('name');

  const results = useMemo(
    () => searchApis(apis, query, categoryId, pricing, auth, difficulty, sortBy),
    [apis, query, categoryId, pricing, auth, difficulty, sortBy]
  );

  const clearFilters = () => {
    setQuery('');
    setCategoryId(undefined);
    setPricing(undefined);
    setAuth(undefined);
    setDifficulty(undefined);
    setSortBy('name');
  };

  const hasActiveFilters = !!query || !!categoryId || !!pricing || !!auth || !!difficulty;

  return {
    query,
    setQuery,
    categoryId,
    setCategoryId,
    pricing,
    setPricing,
    auth,
    setAuth,
    difficulty,
    setDifficulty,
    sortBy,
    setSortBy,
    results,
    clearFilters,
    hasActiveFilters,
  };
}
