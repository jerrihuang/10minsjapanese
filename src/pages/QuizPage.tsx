import React, { useState } from 'react';
import { Layout } from '../components/ui/Layout';
import { Header } from '../components/ui/Header';
import { QuizQuestion } from '../components/quiz/QuizQuestion';

const MOCK_MESSAGES = [
  {
    text: '¡Hola! ¡Qué calor hace hoy!, ¿verdad?',
    isUser: false,
    avatar: '/avatars/teacher.png'
  },
  {
    text: '¡Claro! Estamos en verano.',
    isUser: true,
    avatar: '/avatars/user.png'
  },
  {
    text: 'En mi _____ no hace tanto calor en esta estación en año.',
    isUser: false,
    avatar: '/avatars/teacher.png'
  },
  {
    text: 'Aquí, en Madrid, hace mucho calor en verano y mucho frío en invierno.',
    isUser: true,
    avatar: '/avatars/user.png'
  }
];

const OPTIONS = ['barrio', 'país', 'piso', 'coche'];

export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <Header hearts={5} />
        <QuizQuestion
          question="What word is missing in the dialog?"
          messages={MOCK_MESSAGES}
          options={OPTIONS}
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
          onNext={() => console.log('Next question')}
        />
      </div>
    </Layout>
  );
}