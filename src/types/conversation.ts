export interface Phrase {
  id: string;
  japanese: string;
  english: string;
  romanization: string;
  audioUrl?: string;
  isBookmarked?: boolean;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  category: string; // Changed from strict union type to string
  phrases: Phrase[];
  icon: string;
}