import { basicHiragana } from './basic';
import { dakutenHiragana } from './dakuten';
import { combinationHiragana } from './combination';

export const allHiragana = [...basicHiragana, ...dakutenHiragana, ...combinationHiragana];

export const getHiraganaByType = (type: 'basic' | 'dakuten' | 'combination') => {
  switch (type) {
    case 'basic':
      return basicHiragana;
    case 'dakuten':
      return dakutenHiragana;
    case 'combination':
      return combinationHiragana;
    default:
      return allHiragana;
  }
};