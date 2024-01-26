import { render, screen } from '@testing-library/react';

import App from '../App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('should render the app', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeDefined();
  });
});
