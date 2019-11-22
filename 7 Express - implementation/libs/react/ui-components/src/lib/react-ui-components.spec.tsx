import React from 'react';
import { render } from '@testing-library/react';

import ReactUiComponents from './react-ui-components';

describe(' ReactUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
