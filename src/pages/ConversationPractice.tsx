import React, { useState } from 'react';
import { Layout } from '../components/ui/Layout';
import { Header } from '../components/ui/Header';
import { ScenarioCard } from '../components/conversation/ScenarioCard';
import { PhraseRow } from '../components/conversation/PhraseRow';
import { scenarios } from '../data/scenarios';
import { Scenario } from '../types/conversation';
import { playAudio } from '../utils/audio';
import { BackButton } from '../components/ui/BackButton';

export default function ConversationPractice() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [bookmarkedPhrases, setBookmarkedPhrases] = useState<Set<string>>(new Set());

  const handlePlayAudio = async (audioUrl: string) => {
    await playAudio(audioUrl);
  };

  const handleToggleBookmark = (phraseId: string) => {
    setBookmarkedPhrases(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(phraseId)) {
        newBookmarks.delete(phraseId);
      } else {
        newBookmarks.add(phraseId);
      }
      return newBookmarks;
    });
  };

  return (
    <Layout>
      <div className="bg-[#FF4B4B] text-white">
        <div className="px-4 py-3 flex items-center">
          <BackButton className="text-white" />
          <h1 className="text-xl font-semibold flex-1 text-center">
            {selectedScenario ? selectedScenario.title : "Conversation Practice"}
          </h1>
        </div>
      </div>
      
      <div className="p-4">
        {!selectedScenario ? (
          <div className="space-y-3">
            {scenarios.map(scenario => (
              <ScenarioCard
                key={scenario.id}
                scenario={scenario}
                onClick={() => setSelectedScenario(scenario)}
              />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {selectedScenario.phrases.map(phrase => (
              <PhraseRow
                key={phrase.id}
                japanese={phrase.japanese}
                romanization={phrase.romanization}
                english={phrase.english}
                onPlay={() => handlePlayAudio(phrase.audioUrl || '')}
                onBookmark={() => handleToggleBookmark(phrase.id)}
                isBookmarked={bookmarkedPhrases.has(phrase.id)}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}