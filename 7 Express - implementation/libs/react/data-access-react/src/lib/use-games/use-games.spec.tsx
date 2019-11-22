import React from 'react';
import { render } from '@testing-library/react';

import UseGames from './use-games';

describe(' UseGames', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseGames />);
    expect(baseElement).toBeTruthy();
  });
});
