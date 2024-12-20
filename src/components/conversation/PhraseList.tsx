import type { FC } from 'react';
import type { Phrase } from '../../types/conversation';
import { PhraseRow } from './PhraseRow';

interface PhraseListProps {
  phrases: Phrase[];
  bookmarkedPhrases: Set<string>;
  onPlayAudio: (url: string) => void;
  onToggleBookmark: (id: string) => void;
}

export const PhraseList: FC<PhraseListProps> = ({
  phrases,
  bookmarkedPhrases,
  onPlayAudio,
  onToggleBookmark,
}) => {
  return (
    <div className="divide-y divide-gray-100">
      {phrases.map(phrase => (
        <PhraseRow
          key={phrase.id}
          japanese={phrase.japanese}
          romanization={phrase.romanization}
          english={phrase.english}
          onPlay={() => onPlayAudio(phrase.audioUrl || '')}
          onBookmark={() => onToggleBookmark(phrase.id)}
          isBookmarked={bookmarkedPhrases.has(phrase.id)}
        />
      ))}
    </div>
  );
};