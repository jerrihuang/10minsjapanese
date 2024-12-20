import type { FC } from 'react';
import type { Phrase } from '../../types/conversation';

interface PhraseCardProps {
  phrase: Phrase & { isBookmarked?: boolean };
  onPlayAudio: () => void;
  onToggleBookmark: () => void;
}

export const PhraseCard: FC<PhraseCardProps> = ({ 
  phrase, 
  onPlayAudio, 
  onToggleBookmark 
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-lg font-medium mb-1">{phrase.japanese}</p>
          <p className="text-sm text-gray-500 mb-1">{phrase.romanization}</p>
          <p className="text-sm text-gray-700">{phrase.english}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onPlayAudio}
            className="p-2 text-orange-500 hover:bg-orange-50 rounded-full"
            aria-label="Play audio"
          >
            <span className="text-xl">🔊</span>
          </button>
          <button
            onClick={onToggleBookmark}
            className="p-2 text-orange-500 hover:bg-orange-50 rounded-full"
            aria-label={phrase.isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            <span className="text-xl">{phrase.isBookmarked ? '★' : '☆'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};