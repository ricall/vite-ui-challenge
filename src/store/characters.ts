import { create } from 'zustand';

import { persist } from 'zustand/middleware';
import { Character } from '../types.ts';
import { characters } from '../model';
import { searchCustomers } from '../utilities/search.ts';

type CharacterStore = {
  teamIds: number[];
  search: string;
  tags: string[];

  getTeam: () => Character[];
  isOnTeam: (id: number) => boolean;
  removeTeamMember: (id: number) => void;
  toggleTeamMember: (id: number) => void;

  setSearch: (search: string) => void;
  isTagSelected: (tag: string) => boolean;
  toggleTag: (tag: string) => void;
  setTags: (tags: string[]) => void;

  getFilteredCharacters: () => Character[];
};

export const useCharacterStore = create<CharacterStore>()(
  persist(
    (set, get) => ({
      teamIds: [],
      search: '',
      tags: [],

      getTeam: (): Character[] => {
        const { teamIds } = get();
        return teamIds
          .map((id) => characters.find(({ id: characterId }) => id === characterId))
          .filter(Boolean) as Character[];
      },
      isOnTeam: (id: number) => get().teamIds.includes(id),
      removeTeamMember: (removedId: number) =>
        set(({ teamIds }) => ({ teamIds: teamIds.filter((id) => id !== removedId) })),
      toggleTeamMember: (toggleId: number) =>
        set(({ teamIds }) => {
          if (teamIds.includes(toggleId)) {
            return { teamIds: teamIds.filter((id) => id !== toggleId) };
          }
          return { teamIds: [...teamIds, toggleId] };
        }),

      setSearch: (search: string) => set({ search }),

      isTagSelected: (tag: string) => get().tags.includes(tag),
      toggleTag: (tag: string) =>
        set(({ tags }) => {
          if (tags.includes(tag)) {
            return { tags: tags.filter((tagName) => tagName !== tag) };
          }
          return { tags: [...tags, tag] };
        }),
      setTags: (tags: string[]) => set({ tags }),

      getFilteredCharacters: () => searchCustomers(get()),
    }),
    { name: 'character-store' },
  ),
);
