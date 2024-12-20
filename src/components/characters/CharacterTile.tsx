import { SoundButton } from '../audio/SoundButton';
import { Character } from '../../types/character';

interface CharacterTileProps {
  character: Character;
  isLearned: boolean;
  onLearn: () => void;
}

export function CharacterTile({ character, isLearned, onLearn }: CharacterTileProps) {
  return (
    <div className={`p-4 rounded-xl ${isLearned ? 'bg-green-50' : 'bg-white'} shadow-sm`}>
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