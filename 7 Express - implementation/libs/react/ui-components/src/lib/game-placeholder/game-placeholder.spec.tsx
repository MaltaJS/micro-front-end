import React from 'react';
import { render } from '@testing-library/react';

import GamePlaceholder from './game-placeholder';

describe(' GamePlaceholder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GamePlaceholder />);
    expect(baseElement).toBeTruthy();
  });
});
