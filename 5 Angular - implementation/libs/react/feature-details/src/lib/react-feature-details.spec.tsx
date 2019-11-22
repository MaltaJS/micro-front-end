import React from 'react';
import { render } from '@testing-library/react';

import ReactFeatureDetails from './react-feature-details';

describe(' ReactFeatureDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactFeatureDetails />);
    expect(baseElement).toBeTruthy();
  });
});
