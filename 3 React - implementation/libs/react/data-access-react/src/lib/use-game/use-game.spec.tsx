import React from 'react';
import { render } from '@testing-library/react';

import UseGame from './use-game';

describe(' UseGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseGame />);
    expect(baseElement).toBeTruthy();
  });
});
