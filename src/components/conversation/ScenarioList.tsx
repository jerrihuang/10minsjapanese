import type { FC } from 'react';
import type { Scenario } from '../../types/conversation';
import { ScenarioCard } from './ScenarioCard';

interface ScenarioListProps {
  scenarios: Scenario[];
}

export const ScenarioList: FC<ScenarioListProps> = ({ scenarios }) => {
  return (
    <div className="space-y-3">
      {scenarios.map(scenario => (
        <ScenarioCard
          key={scenario.id}
          scenario={scenario}
          onClick={() => {}} // Implement navigation logic
        />
      ))}
    </div>
  );
};