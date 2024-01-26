import { teamFrom } from '../../model';
import { AbilityName } from '../../types';
import { TotalScore } from './TotalScore';
import './Totals.css';

type Props = {
  teamIds: number[];
};

export function Totals({ teamIds }: Props) {
  const team = teamFrom(teamIds);

  const values: Partial<Record<AbilityName, number>> = {};
  team.forEach(({ abilities }) =>
    abilities.forEach(({ abilityName, abilityScore }) => {
      values[abilityName] = (values[abilityName] ?? 0) + abilityScore / team.length;
    }),
  );

  return (
    <div className="TotalsContainer">
      <div className="Totals">
        <TotalScore label="Power" value={values.Power} />
        <TotalScore label="Mobility" value={values.Mobility} />
        <div className="Separator" />
        <TotalScore label="Technique" value={values.Technique} />
        <div className="Separator" />
        <TotalScore label="Survivability" value={values.Survivability} />
        <TotalScore label="Energy" value={values.Energy} />
      </div>
      <div className="Note">* Totals as average for squad</div>
    </div>
  );
}
