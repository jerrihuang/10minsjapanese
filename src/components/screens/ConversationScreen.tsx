import { FC } from 'react';
import { ScenarioList } from '../conversation/ScenarioList';
import { scenarios } from '../../data/scenarios';
import { BackButton } from '../ui/BackButton';

export const ConversationScreen: FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#FF4B4B]">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <BackButton className="text-white" />
          <h1 className="text-xl font-semibold text-white ml-4">
            Conversation Practice
          </h1>
        </div>
        <ScenarioList scenarios={scenarios} />
      </div>
    </div>
  );
};