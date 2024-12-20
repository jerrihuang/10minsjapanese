export interface AudioSource {
  characterId: string;
  driveUrl: string;
}

export interface AudioConfig {
  enabled: boolean;
  sources: AudioSource[];
}