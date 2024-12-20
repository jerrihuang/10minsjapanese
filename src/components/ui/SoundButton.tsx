import React from 'react';
import { playAudio } from '../../utils/audio';

interface SoundButtonProps {
  audioUrl?: string;
  className?: string;
}

export function SoundButton({ audioUrl, className = '' }: SoundButtonProps) {
  if (!audioUrl) return null;

  return (
    <button
      onClick={() => playAudio(audioUrl)}
      className={`p-2 text-orange-500 hover:bg-orange-50 rounded-full transition-colors ${className}`}
      aria-label="Play sound"
    >
      <svg 
        className="w-5 h-5" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M10 3.75v12.5L4.75 12H1.5v-4h3.25L10 3.75zm1.5-.25v13.5a.75.75 0 01-1.28.53l-5.5-4.5a.75.75 0 01-.22-.53v-4.5c0-.21.09-.41.22-.53l5.5-4.5a.75.75 0 011.28.53zm3.5 4v5a2.5 2.5 0 01-2 2.45v-1.5a1 1 0 00.5-.87V7.5a1 1 0 00-.5-.87V5.13a2.5 2.5 0 012 2.37zm2.5 0v5a5 5 0 01-4 4.9v-1.5a3.5 3.5 0 002.5-3.35V7.5A3.5 3.5 0 0013.5 4.15V2.65a5 5 0 014 4.85z"/>
      </svg>
    </button>
  );
}