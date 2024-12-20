import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">10 Minute Japanese</h1>
        <p className="text-xl text-gray-600">Master Japanese in just 10 minutes a day!</p>
      </div>

      <div className="flex flex-col items-center w-full max-w-md">
        <button
          onClick={() => navigate('/hiragana')}
          className="w-full bg-blue-500 text-white p-4 rounded-lg mb-4 hover:bg-blue-600 transition-colors"
        >
          Hiragana Learning
        </button>
        
        <button
          onClick={() => navigate('/conversation')}
          className="w-full bg-green-500 text-white p-4 rounded-lg mb-4 hover:bg-green-600 transition-colors"
        >
          Conversation Practice
        </button>
        
        <button
          onClick={() => navigate('/video')}
          className="w-full bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Video Lessons
        </button>
      </div>
    </div>
  );
}