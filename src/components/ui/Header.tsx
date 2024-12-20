import React from 'react';
import { BackButton } from './BackButton';

interface HeaderProps {
  hearts?: number;
}

export function Header({ hearts }: HeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <BackButton />
      <div className="flex-1" /> {/* Spacer */}
      {hearts !== undefined && (
        <div className="flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow-sm">
          <span className="text-gray-900 font-medium">{hearts}</span>
          <span className="text-red-500">❤️</span>
        </div>
      )}
    </div>
  );
}