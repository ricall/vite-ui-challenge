import data from './characters.json';
import type { Character } from '../types';

export const characters = data as Character[];

export const MY_TEAM_TAG = 'my team';

const characterTagNames = Array.from(
  characters.reduce((names, character) => {
    character.tags?.forEach(({ tag_name }) => names.add(tag_name));
    return names;
  }, new Set<string>()),
);

export const tagNames: string[] = [...characterTagNames, MY_TEAM_TAG];

export const teamFrom = (teamIds: number[]) => characters.filter(({ id }) => teamIds.includes(id));
