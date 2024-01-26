import { ChangeEvent } from 'react';

import SearchIcon from '../../img/search.svg?react';
import './Search.css';

type Props = {
  text: string;
  onChange: (text: string) => void;
};

export function Search({ text, onChange }: Props) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <label className="Search">
      <div className="SearchLine" />
      <SearchIcon />
      <input className="SearchInput" placeholder="Search Characters..." value={text} onChange={handleOnChange} />
    </label>
  );
}
