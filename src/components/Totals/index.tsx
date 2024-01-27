import { AbilityName, Character } from '../../types';
import { TotalScore } from './TotalScore';
import './Totals.css';
import { useCharacterStore } from '../../store/characters.ts';

const calculateAverages = (team: Character[]): Partial<Record<AbilityName, number>> => {
  const values: Partial<Record<AbilityName, number>> = {};
  team.forEach(({ abilities }) =>
    abilities.forEach(({ abilityName, abilityScore }) => {
      values[abilityName] = (values[abilityName] ?? 0) + abilityScore / team.length;
    }),
  );

  return values;
};

export function Totals() {
  const { getTeam } = useCharacterStore();

  const team = getTeam();
  const averages = calculateAverages(team);

  return (
    <div className="TotalsContainer">
      <div className="Totals">
        <TotalScore label="Power" value={averages.Power} />
        <TotalScore label="Mobility" value={averages.Mobility} />
        <div className="Separator" />
        <TotalScore label="Technique" value={averages.Technique} />
        <div className="Separator" />
        <TotalScore label="Survivability" value={averages.Survivability} />
        <TotalScore label="Energy" value={averages.Energy} />
      </div>
      <div className="Note">* Totals as average for squad</div>
    </div>
  );
}
