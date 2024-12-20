import React from 'react';

interface TabBarProps {
  activeTab: 'Hiragana' | 'Katakana';
  onTabChange: (tab: 'Hiragana' | 'Katakana') => void;
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex bg-gray-50 p-2 rounded-lg mb-4">
      <button
        onClick={() => onTabChange('Hiragana')}
        className={`flex-1 py-2 px-4 rounded-lg text-center transition-colors ${
          activeTab === 'Hiragana' 
            ? 'bg-white shadow-sm' 
            : 'text-gray-600'
        }`}
      >
        Hiragana
      </button>
      <button
        onClick={() => onTabChange('Katakana')}
        className={`flex-1 py-2 px-4 rounded-lg text-center transition-colors ${
          activeTab === 'Katakana' 
            ? 'bg-white shadow-sm' 
            : 'text-gray-600'
        }`}
      >
        Katakana
      </button>
    </div>
  );
}