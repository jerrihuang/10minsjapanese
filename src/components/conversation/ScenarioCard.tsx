import type { FC } from 'react';
import { Scenario } from '../../types/conversation';

interface ScenarioCardProps {
  scenario: Scenario;
  onClick: () => void;
}

export const ScenarioCard: FC<ScenarioCardProps> = ({ scenario, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{scenario.icon}</span>
        <div className="text-left">
          <h3 className="font-semibold text-gray-900">{scenario.title}</h3>
          <p className="text-sm text-gray-500">{scenario.description}</p>
        </div>
      </div>
    </button>
  );
};