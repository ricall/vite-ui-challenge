import { Checkbox } from '@mui/material';
import clsx from 'clsx';

import { AbilityName, Character, CharacterAbility } from '../../types';
import './CharacterRow.css';
import { TagBadge } from '../TagBadge';

type Props = Character & {
  selected: boolean;
  onToggleTeamMember: () => void;
};

function CharThumbnail({ image, name }: Pick<Props, 'image' | 'name'>) {
  return (
    <div className="CharThumbnailContainer">
      <img className="CharThumbnail" src={image} alt={name} />
    </div>
  );
}

type AbilityProps = {
  abilities: CharacterAbility[];
  ability: AbilityName;
};

function Ability({ abilities, ability }: AbilityProps) {
  const value = abilities.find(({ abilityName }) => abilityName === ability)?.abilityScore;

  return <span className={(value ?? 0) >= 10 ? 'Ability-Max' : ''}>{value ?? '-'}</span>;
}

export function CharacterRow({ selected, onToggleTeamMember, name, image, tags, abilities }: Props) {
  const handleOnChange = () => onToggleTeamMember();

  return (
    <tr className={clsx('CharacterRow', { Checked: selected })}>
      <td>
        <Checkbox checked={selected} onChange={handleOnChange} />
      </td>
      <td>
        <CharThumbnail image={image} name={name} />
      </td>
      <td className="Name">{name}</td>
      <td className="Tags">{tags?.map(({ tag_name }) => <TagBadge key={tag_name} label={tag_name} />)}</td>
      <td>
        <Ability ability="Power" abilities={abilities} />
      </td>
      <td>
        <Ability ability="Mobility" abilities={abilities} />
      </td>
      <td>
        <Ability ability="Technique" abilities={abilities} />
      </td>
      <td>
        <Ability ability="Survivability" abilities={abilities} />
      </td>
      <td>
        <Ability ability="Energy" abilities={abilities} />
      </td>
    </tr>
  );
}
