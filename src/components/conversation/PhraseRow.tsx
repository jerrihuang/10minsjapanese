import type { FC } from 'react';

interface PhraseRowProps {
  japanese: string;
  romanization: string;
  english: string;
  onPlay?: () => void;
  onBookmark?: () => void;
  isBookmarked?: boolean;
}

export const PhraseRow: FC<PhraseRowProps> = ({ 
  japanese, 
  romanization, 
  english, 
  onPlay, 
  onBookmark,
  isBookmarked 
}) => {
  return (
    <div className="border-b border-gray-100 py-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <p className="text-lg mb-1">{japanese}</p>
          <p className="text-sm text-gray-500 mb-1">{romanization}</p>
          <p className="text-sm text-gray-700">{english}</p>
        </div>
        <div className="flex gap-2 ml-4">
          {onPlay && (
            <button
              onClick={onPlay}
              className="p-2 text-orange-500 hover:bg-orange-50 rounded-full"
              aria-label="Play audio"
            >
              <span className="text-xl">🔊</span>
            </button>
          )}
          {onBookmark && (
            <button
              onClick={onBookmark}
              className="p-2 text-orange-500 hover:bg-orange-50 rounded-full"
              aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              <span className="text-xl">{isBookmarked ? '★' : '☆'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};