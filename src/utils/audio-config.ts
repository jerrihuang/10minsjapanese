import { AudioConfig } from '../types/audio';

export function updateAudioConfig(config: AudioConfig): void {
  localStorage.setItem('audioConfig', JSON.stringify(config));
}

export function getAudioConfig(): AudioConfig {
  const stored = localStorage.getItem('audioConfig');
  return stored ? JSON.parse(stored) : { enabled: true, sources: [] };
}

export function addAudioSource(characterId: string, driveUrl: string): void {
  const config = getAudioConfig();
  config.sources.push({ characterId, driveUrl });
  updateAudioConfig(config);
}