import { ChangeEvent } from 'react';

import SearchIcon from '../../img/search.svg?react';
import './Search.css';
import { useCharacterStore } from '../../store/characters.ts';

export const Search = () => {
  const { search, setSearch } = useCharacterStore();
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  return (
    <label className="Search">
      <div className="SearchLine" />
      <SearchIcon />
      <input className="SearchInput" placeholder="Search Characters..." value={search} onChange={handleOnChange} />
    </label>
  );
};
