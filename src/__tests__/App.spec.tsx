import { render } from '@testing-library/react';

import App from '../App';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Masthead } from '../components/Masthead';
import { Team } from '../components/Team';
import { Totals } from '../components/Totals';
import { Search } from '../components/Search';
import { Filters } from '../components/Filters';
import { CharacterTable } from '../components/CharacterTable';

vi.mock('../components/Masthead');
vi.mock('../components/Team');
vi.mock('../components/Totals');
vi.mock('../components/Search');
vi.mock('../components/Filters');
vi.mock('../components/CharacterTable');

describe('App', () => {
  const mockComponent = (name: string) => <div data-testid={name} />;
  beforeEach(() => {
    vi.resetAllMocks();

    vi.mocked(Masthead).mockReturnValue(mockComponent('masthead'));
    vi.mocked(Team).mockReturnValue(mockComponent('team'));
    vi.mocked(Totals).mockReturnValue(mockComponent('totals'));
    vi.mocked(Search).mockReturnValue(mockComponent('search'));
    vi.mocked(Filters).mockReturnValue(mockComponent('filters'));
    vi.mocked(CharacterTable).mockReturnValue(mockComponent('table'));
  });

  it('should render the app as expected', () => {
    const { getByText, getByTestId, asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
    expect(getByText('Your champions!')).toBeDefined();
    ['masthead', 'team', 'totals', 'search', 'filters', 'table'].forEach((name) =>
      expect(getByTestId(name)).toBeDefined(),
    );
  });
});
