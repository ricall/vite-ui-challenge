import { CharImage } from './CharImage';
import './Team.css';
import { useCharacterStore } from '../../store/characters.ts';

export function Team() {
  const { getTeam, removeTeamMember } = useCharacterStore();

  const team = getTeam();
  const handleOnClick = (id: number) => () => removeTeamMember(id);

  return (
    <div className="Team">
      {team.map(({ id, image, name }) => (
        <CharImage key={name} image={image} name={name} onClick={handleOnClick(id)} />
      ))}
    </div>
  );
}
