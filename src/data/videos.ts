export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  vimeoId: string; // Using Vimeo instead of Drive
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  vocabulary: Array<{
    word: string;
    reading: string;
    meaning: string;
  }>;
}

export const videoLessons: VideoLesson[] = [
  {
    id: 'japanese-greetings',
    title: 'Japanese Greetings - ULTIMATE Guide',
    description: 'Learn all Japanese greetings with proper pronunciation and usage',
    vimeoId: '824804225', // Replace with your actual Vimeo video ID
    duration: '11:24',
    level: 'beginner',
    vocabulary: [
      {
        word: 'おはよう',
        reading: 'ohayou',
        meaning: 'good morning (casual)'
      },
      {
        word: 'おはようございます',
        reading: 'ohayou gozaimasu',
        meaning: 'good morning (polite)'
      }
    ]
  }
];