import { Character } from '../../types/character';
import { SoundButton } from '../ui/SoundButton';

interface CharacterCardProps {
  character: Character;
  isLearned: boolean;
  onLearn: () => void;
}

export function CharacterCard({ character, isLearned, onLearn }: CharacterCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <span className="text-3xl font-medium">{character.symbol}</span>
        <SoundButton audioUrl={character.audioUrl} />
      </div>
      <div className="text-sm text-gray-600 mb-2 text-center">
        {character.romanization}
      </div>
      <button
        onClick={onLearn}
        className={`
          w-full py-2 px-4 rounded-lg text-sm font-medium
          ${isLearned 
            ? 'bg-green-500 text-white' 
            : 'bg-orange-500 text-white hover:bg-orange-600'}
          transition-colors
        `}
      >
        {isLearned ? 'Learned ✓' : 'Learn'}
      </button>
    </div>
  );
}