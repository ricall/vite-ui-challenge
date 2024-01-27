import { CharacterRow } from './CharacterRow';
import './CharacterTable.css';
import { useCharacterStore } from '../../store/characters.ts';

export function CharacterTable() {
  const { getFilteredCharacters, isOnTeam, toggleTeamMember } = useCharacterStore();

  const characters = getFilteredCharacters();

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
          <CharacterRow id={id} key={id} selected={isOnTeam(id)} onToggleTeamMember={handleSelect(id)} {...character} />
        ))}
      </tbody>
    </table>
  );
}
