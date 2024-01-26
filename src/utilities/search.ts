import type { Character } from '../types.ts';
import { characters, MY_TEAM_TAG } from '../model';

type SearchRequest = {
  search: string;
  tags: string[];
  teamIds: number[];
};

export const searchCustomers = ({ search, tags, teamIds }: SearchRequest): Character[] => {
  const searchText = search.toLowerCase();
  const searchTags = tags.filter((tag) => tag !== MY_TEAM_TAG);
  const isMyTeam = tags.length !== searchTags.length;

  const filterByMyTeam = isMyTeam ? ({ id }: Character) => teamIds.includes(id) : undefined;
  const filterBySearchText = !searchText
    ? undefined
    : ({ name, tags }: Character) =>
        name.toLowerCase().includes(searchText) ||
        (tags?.some(({ tag_name }) => tag_name.includes(searchText)) ?? false);
  const filterByTags = !searchTags.length
    ? undefined
    : ({ tags: characterTags }: Character) =>
        characterTags?.some(({ tag_name }) => searchTags.includes(tag_name)) ?? false;

  return [filterByMyTeam, filterBySearchText, filterByTags].reduce(
    (displayCharacters, predicate) =>
      predicate === undefined ? displayCharacters : displayCharacters.filter(predicate),
    characters,
  );
};
