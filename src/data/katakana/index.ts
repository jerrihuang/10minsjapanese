import { basicKatakana } from './basic';
import { dakutenKatakana } from './dakuten';
import { combinationKatakana } from './combination';

export const allKatakana = [...basicKatakana, ...dakutenKatakana, ...combinationKatakana];

export const getKatakanaByType = (type: 'basic' | 'dakuten' | 'combination') => {
  switch (type) {
    case 'basic':
      return basicKatakana;
    case 'dakuten':
      return dakutenKatakana;
    case 'combination':
      return combinationKatakana;
    default:
      return allKatakana;
  }
};