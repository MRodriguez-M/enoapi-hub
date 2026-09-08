import { clsx, type ClassValue } from 'clsx';
import type { ApiEntry, Category, Difficulty, Pricing, AuthType } from '@/data/types';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getDifficultyColor(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
    case 'moderate':
      return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
    case 'advanced':
      return 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400';
  }
}

export function getPricingColor(pricing: Pricing): string {
  switch (pricing) {
    case 'free':
      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
    case 'freemium':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    case 'paid':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
  }
}

export function getAuthLabel(auth: AuthType): string {
  switch (auth) {
    case 'none':
      return 'No Auth';
    case 'api-key':
      return 'API Key';
    case 'oauth2':
      return 'OAuth 2.0';
    case 'bearer':
      return 'Bearer Token';
    case 'basic':
      return 'Basic Auth';
  }
}

export function getPricingLabel(pricing: Pricing): string {
  switch (pricing) {
    case 'free':
      return 'Free';
    case 'freemium':
      return 'Freemium';
    case 'paid':
      return 'Paid';
  }
}

export function getCategoryApiCount(categoryId: string, apis: ApiEntry[]): number {
  return apis.filter((api) => api.category === categoryId).length;
}

export function getCategoriesWithCounts(categories: Category[], apis: ApiEntry[]): Category[] {
  return categories.map((cat) => ({
    ...cat,
    count: getCategoryApiCount(cat.id, apis),
  }));
}

export function searchApis(
  apis: ApiEntry[],
  query: string,
  categoryId?: string,
  pricing?: Pricing,
  auth?: AuthType,
  difficulty?: Difficulty,
  sortBy?: 'name' | 'difficulty' | 'pricing'
): ApiEntry[] {
  let filtered = [...apis];

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (api) =>
        api.name.toLowerCase().includes(q) ||
        api.description.toLowerCase().includes(q) ||
        api.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        api.category.toLowerCase().includes(q)
    );
  }

  if (categoryId) {
    filtered = filtered.filter((api) => api.category === categoryId);
  }

  if (pricing) {
    filtered = filtered.filter((api) => api.pricing === pricing);
  }

  if (auth) {
    filtered = filtered.filter((api) => api.auth === auth);
  }

  if (difficulty) {
    filtered = filtered.filter((api) => api.difficulty === difficulty);
  }

  if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'difficulty') {
    const order = { easy: 0, moderate: 1, advanced: 2 };
    filtered.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
  } else if (sortBy === 'pricing') {
    const order = { free: 0, freemium: 1, paid: 2 };
    filtered.sort((a, b) => order[a.pricing] - order[b.pricing]);
  }

  return filtered;
}

export function getAllTags(apis: ApiEntry[]): string[] {
  const tags = new Set<string>();
  apis.forEach((api) => api.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  return Promise.resolve();
}
