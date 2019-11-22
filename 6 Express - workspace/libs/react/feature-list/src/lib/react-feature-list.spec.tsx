import React from 'react';
import { render } from '@testing-library/react';

import ReactFeatureList from './react-feature-list';

describe(' ReactFeatureList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactFeatureList />);
    expect(baseElement).toBeTruthy();
  });
});
