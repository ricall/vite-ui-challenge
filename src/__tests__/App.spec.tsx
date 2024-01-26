import { render } from '@testing-library/react';

import App from '../App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('should render the app', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();

    // TODO: Verify some behaviour
  });
});
