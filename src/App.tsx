import './App.css';
import { CharacterTable } from './components/CharacterTable';
import { Filters } from './components/Filters';
import { Masthead } from './components/Masthead';
import { Search } from './components/Search';
import { Team } from './components/Team';
import { Totals } from './components/Totals';

function App() {
  return (
    <div className="App">
      <Masthead />
      <div className="AppContainer">
        <header>Your champions!</header>
        <Team />
        <Totals />
        <Search />
        <Filters />
        <CharacterTable />
      </div>
    </div>
  );
}

export default App;
