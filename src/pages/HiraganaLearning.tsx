import React, { useState } from 'react';
import { Layout } from '../components/ui/Layout';
import { Header } from '../components/ui/Header';
import { TabBar } from '../components/ui/TabBar';
import { CategoryTabs } from '../components/ui/CategoryTabs';
import { CharacterGrid } from '../components/characters/CharacterGrid';
import { hiraganaCharacters } from '../data/characters';

export default function HiraganaLearning() {
  const [activeTab, setActiveTab] = useState<'Hiragana' | 'Katakana'>('Hiragana');
  const [activeCategory, setActiveCategory] = useState<'Basic' | 'Dakuten' | 'Combination'>('Basic');
  const [learnedCharacters, setLearnedCharacters] = useState<Set<string>>(new Set());

  const handleLearn = (characterId: string) => {
    setLearnedCharacters(prev => {
      const newSet = new Set(prev);
      newSet.add(characterId);
      return newSet;
    });
  };

  return (
    <Layout>
      <div className="bg-white">
        <Header title="Japanese Characters" hearts={5} />
        <div className="p-4">
          <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
          <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          <CharacterGrid
            characters={hiraganaCharacters}
            learnedCharacters={learnedCharacters}
            onLearn={handleLearn}
          />
        </div>
      </div>
    </Layout>
  );
}