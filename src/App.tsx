import { useState } from 'react';

import './App.css';
import { CharacterTable } from './components/CharacterTable';
import { Filters } from './components/Filters';
import { Masthead } from './components/Masthead';
import { Search } from './components/Search';
import { Team } from './components/Team';
import { Totals } from './components/Totals';
import { searchCustomers } from './utilities/search.ts';

function App() {
  const [teamIds, setTeamIds] = useState<number[]>([]);
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const isCharacterOnTeam = (id: number) => teamIds.includes(id);
  const toggleTeamMember = (id: number) => {
    if (isCharacterOnTeam(id)) {
      setTeamIds(teamIds.filter((userId) => userId !== id));
    } else {
      setTeamIds([...teamIds, id]);
    }
  };

  const displayCharacters = searchCustomers({ teamIds, search, tags });

  return (
    <div className="App">
      <Masthead />
      <div className="AppContainer">
        <header>Your champions!</header>
        <Team teamIds={teamIds} toggleTeamMember={toggleTeamMember} />
        <Totals teamIds={teamIds} />
        <Search text={search} onChange={setSearch} />
        <Filters tags={tags} setTags={setTags} />
        <CharacterTable
          characters={displayCharacters}
          isSelected={isCharacterOnTeam}
          toggleTeamMember={toggleTeamMember}
        />
      </div>
    </div>
  );
}

export default App;
