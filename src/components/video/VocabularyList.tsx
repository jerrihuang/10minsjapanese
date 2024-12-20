import React from 'react';

interface VocabularyItem {
  word: string;
  reading: string;
  meaning: string;
}

interface VocabularyListProps {
  vocabulary: VocabularyItem[];
}

export function VocabularyList({ vocabulary }: VocabularyListProps) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-3">Vocabulary</h3>
      <div className="space-y-2">
        {vocabulary.map((item, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-medium">{item.word}</p>
                <p className="text-sm text-gray-500">{item.reading}</p>
              </div>
              <p className="text-sm text-gray-700">{item.meaning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}