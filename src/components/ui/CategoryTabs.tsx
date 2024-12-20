import React from 'react';

interface CategoryTabsProps {
  activeCategory: 'Basic' | 'Dakuten' | 'Combination';
  onCategoryChange: (category: 'Basic' | 'Dakuten' | 'Combination') => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 mb-6">
      {['Basic', 'Dakuten', 'Combination'].map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category as any)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeCategory === category
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}