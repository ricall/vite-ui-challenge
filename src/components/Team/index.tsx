import { characters } from '../../model';
import { CharImage } from './CharImage';
import './Team.css';

type Props = {
  teamIds: number[];
  toggleTeamMember: (_id: number) => void;
};

export function Team({ teamIds, toggleTeamMember }: Props) {
  const team = characters.filter(({ id }) => teamIds.includes(id));
  const handleOnClick = (id: number) => () => toggleTeamMember(id);

  return (
    <div className="Team">
      {team.map(({ id, image, name }) => (
        <CharImage key={name} image={image} name={name} onClick={handleOnClick(id)} />
      ))}
    </div>
  );
}
