import React from 'react';
import { render } from '@testing-library/react';

import ReactUtilsFormatter from './react-utils-formatter';

describe(' ReactUtilsFormatter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUtilsFormatter />);
    expect(baseElement).toBeTruthy();
  });
});
