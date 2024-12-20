import React from 'react';

interface Message {
  text: string;
  isUser: boolean;
  avatar: string;
}

interface QuizQuestionProps {
  question: string;
  messages: Message[];
  options: string[];
  selectedOption?: string;
  onSelectOption: (option: string) => void;
  onNext: () => void;
}

export function QuizQuestion({ 
  question, 
  messages, 
  options, 
  selectedOption,
  onSelectOption,
  onNext 
}: QuizQuestionProps) {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-bold mb-4 px-4">{question}</h1>
      
      <div className="flex-1 bg-gray-50 rounded-lg mx-4 mb-4 p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-start gap-2 mb-3 ${message.isUser ? 'flex-row-reverse' : ''}`}>
            <img 
              src={message.avatar} 
              alt="Avatar" 
              className="w-8 h-8 rounded-full"
            />
            <div className={`p-3 rounded-lg max-w-[80%] ${
              message.isUser 
                ? 'bg-white text-gray-900' 
                : 'bg-orange-500 text-white'
            }`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 px-4 mb-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelectOption(option)}
            className={`p-3 rounded-lg text-center ${
              selectedOption === option
                ? 'border-2 border-orange-500 text-orange-500'
                : 'bg-gray-50 text-gray-900'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        className="mx-4 mb-4 py-3 px-6 bg-orange-500 text-white rounded-lg font-medium"
      >
        Next
      </button>
    </div>
  );
}