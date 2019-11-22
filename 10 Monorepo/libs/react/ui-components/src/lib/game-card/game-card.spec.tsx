import React from 'react';
import { render } from '@testing-library/react';

import GameCard from './game-card';

describe(' GameCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameCard />);
    expect(baseElement).toBeTruthy();
  });
});
