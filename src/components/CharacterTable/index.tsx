import { Character } from '../../types';
import { CharacterRow } from './CharacterRow';
import './CharacterTable.css';

type Props = {
  characters: Character[];
  isSelected: (id: number) => boolean;
  toggleTeamMember: (id: number) => void;
};

export function CharacterTable({ characters, isSelected, toggleTeamMember }: Props) {
  const handleSelect = (id: number) => () => toggleTeamMember(id);

  return (
    <table className="CharacterTable">
      <thead>
        <tr>
          <th colSpan={3} className="HeaderLeft">
            Character
          </th>
          <th className="HeaderLeft">Tags</th>
          <th>Power</th>
          <th>Mobility</th>
          <th>Technique</th>
          <th>Survivability</th>
          <th>Energy</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(({ id, ...character }) => (
          <CharacterRow
            id={id}
            key={id}
            selected={isSelected(id)}
            onToggleTeamMember={handleSelect(id)}
            {...character}
          />
        ))}
      </tbody>
    </table>
  );
}
