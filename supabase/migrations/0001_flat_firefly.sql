/*
  # Create scenarios table and add restaurant phrases

  1. New Tables
    - `scenarios` table
      - `id` (text, primary key)
      - `title` (text)
      - `description` (text)
      - `category` (text)
      - `icon` (text)
      - `phrases` (jsonb array)

  2. Initial Data
    - Add restaurant reservation conversation scenario
    - Include complete dialogue with Japanese, English, and romanization
*/

-- Create scenarios table
CREATE TABLE IF NOT EXISTS scenarios (
  id text PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  icon text NOT NULL,
  phrases jsonb NOT NULL DEFAULT '[]'::jsonb
);

-- Enable RLS
ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;

-- Create RLS policy
CREATE POLICY "Allow public read access"
  ON scenarios
  FOR SELECT
  TO public
  USING (true);

-- Insert restaurant scenario
INSERT INTO scenarios (id, title, description, category, icon, phrases)
VALUES (
  'dining-basics',
  'Restaurant Basics',
  'Essential phrases for dining out',
  'dining',
  '🍽️',
  jsonb_build_array(
    jsonb_build_object(
      'id', 'dining-1',
      'japanese', 'こんにちは・予約をお願いしたいのですが・',
      'english', 'Hello, I''d like to make a reservation.',
      'romanization', 'Konnichiwa. Yoyaku wo onegai shitai no desu ga.'
    ),
    jsonb_build_object(
      'id', 'dining-2',
      'japanese', 'ありがとうございます・ご希望の日にちはいつですか？',
      'english', 'Thank you. What date would you like to reserve?',
      'romanization', 'Arigatou gozaimasu. Go-kibou no hi wa itsu desu ka?'
    ),
    jsonb_build_object(
      'id', 'dining-3',
      'japanese', '明日の夜7時でお願いします・',
      'english', 'Tomorrow at 7 PM, please.',
      'romanization', 'Ashita no yoru shichi-ji de onegai shimasu.'
    ),
    jsonb_build_object(
      'id', 'dining-4',
      'japanese', 'かしこまりました・何名様ですか？',
      'english', 'Understood. How many people?',
      'romanization', 'Kashikomarimashita. Nan-mei-sama desu ka?'
    ),
    jsonb_build_object(
      'id', 'dining-5',
      'japanese', '4名です・',
      'english', 'Four people.',
      'romanization', 'Yo-mei desu.'
    ),
    jsonb_build_object(
      'id', 'dining-6',
      'japanese', '承知いたしました・お席は禁煙席でよろしいですか？',
      'english', 'Got it. Would you like a non-smoking seat?',
      'romanization', 'Shouchi itashimashita. O-seki wa kin-en-seki de yoroshii desu ka?'
    ),
    jsonb_build_object(
      'id', 'dining-7',
      'japanese', 'はい、禁煙席でお願いします・',
      'english', 'Yes, a non-smoking seat, please.',
      'romanization', 'Hai, kin-en-seki de onegai shimasu.'
    ),
    jsonb_build_object(
      'id', 'dining-8',
      'japanese', '窓際の席と店内の席、どちらがよろしいでしょうか？',
      'english', 'Would you prefer a window seat or an indoor seat?',
      'romanization', 'Madogiwa no seki to tennai no seki, dochira ga yoroshii deshou ka?'
    ),
    jsonb_build_object(
      'id', 'dining-9',
      'japanese', '窓際の席をお願いします・',
      'english', 'A window seat, please.',
      'romanization', 'Madogiwa no seki wo onegai shimasu.'
    ),
    jsonb_build_object(
      'id', 'dining-10',
      'japanese', 'かしこまりました・では明日の7時に4名様、窓際の禁煙席でご予約承りました・',
      'english', 'Understood. Your reservation is for tomorrow at 7 PM, 4 people, window seat in the non-smoking area.',
      'romanization', 'Kashikomarimashita. Dewa ashita no shichi-ji ni yo-mei-sama, madogiwa no kin-en-seki de go-yoyaku uketamawari mashita.'
    ),
    jsonb_build_object(
      'id', 'dining-11',
      'japanese', 'ありがとうございます・',
      'english', 'Thank you.',
      'romanization', 'Arigatou gozaimasu.'
    ),
    jsonb_build_object(
      'id', 'dining-12',
      'japanese', 'こちらこそ・ありがとうございます・それではお待ちしております・',
      'english', 'You''re welcome. Thank you. We look forward to serving you.',
      'romanization', 'Kochira koso. Arigatou gozaimasu. Sore dewa omachi shite orimasu.'
    )
  )
) ON CONFLICT (id) DO UPDATE 
SET phrases = EXCLUDED.phrases;