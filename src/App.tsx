import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HiraganaLearning from './pages/HiraganaLearning';
import ConversationPractice from './pages/ConversationPractice';
import VideoLessons from './pages/VideoLessons';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hiragana" element={<HiraganaLearning />} />
      <Route path="/conversation" element={<ConversationPractice />} />
      <Route path="/video" element={<VideoLessons />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}

export default App;