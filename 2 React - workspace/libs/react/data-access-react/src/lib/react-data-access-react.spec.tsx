import React from 'react';
import { render } from '@testing-library/react';

import ReactDataAccessReact from './react-data-access-react';

describe(' ReactDataAccessReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactDataAccessReact />);
    expect(baseElement).toBeTruthy();
  });
});
