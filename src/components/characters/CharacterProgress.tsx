import type { FC } from 'react';

interface CharacterProgressProps {
  progress: number;
}

export const CharacterProgress: FC<CharacterProgressProps> = ({ progress }) => {
  return (
    <div className="w-full mb-6">
      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div 
          className="bg-green-500 rounded-full h-4 transition-all duration-300" 
          style={{ width: `${progress}%` }} 
        />
      </div>
      <div className="text-sm text-gray-600 text-center">
        {Math.round(progress)}% Complete
      </div>
    </div>
  );
};