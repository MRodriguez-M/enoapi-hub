'use client';

import { useSyncExternalStore, useCallback, useMemo } from 'react';

const STORAGE_KEY = 'enoapi-hub-favorites';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('enoapi-favorites-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('enoapi-favorites-change', callback);
  };
}

function getSnapshot(): string {
  if (typeof window === 'undefined') return '[]';
  try {
    return localStorage.getItem(STORAGE_KEY) || '[]';
  } catch {
    return '[]';
  }
}

function getServerSnapshot(): string {
  return '[]';
}

export function useFavorites() {
  const rawFavorites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const favorites: string[] = useMemo(() => {
    try {
      return JSON.parse(rawFavorites);
    } catch {
      return [];
    }
  }, [rawFavorites]);

  const toggleFavorite = useCallback((apiId: string) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const current: string[] = stored ? JSON.parse(stored) : [];
      const updated = current.includes(apiId)
        ? current.filter((id) => id !== apiId)
        : [...current, apiId];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event('enoapi-favorites-change'));
    } catch (e) {
      console.error('Failed to update favorites in localStorage', e);
    }
  }, []);

  const isFavorite = useCallback(
    (apiId: string) => favorites.includes(apiId),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite, isLoaded: true };
}

