export interface Character {
  id: string;
  symbol: string;
  romanization: string;
  type: 'basic' | 'dakuten' | 'combination';
  audioUrl?: string;
}