import { Character } from '../../types/character';
import { CharacterCard } from './CharacterCard';

interface CharacterGridProps {
  characters: Character[];
  onLearn: (id: string) => void;
  learnedCharacters: Set<string>;
}

export function CharacterGrid({ characters, onLearn, learnedCharacters }: CharacterGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isLearned={learnedCharacters.has(character.id)}
          onLearn={() => onLearn(character.id)}
        />
      ))}
    </div>
  );
}