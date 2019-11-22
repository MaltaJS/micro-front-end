import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactUiComponentsProps {}

const StyledReactUiComponents = styled.div`
  color: pink;
`;

export const ReactUiComponents = (props: ReactUiComponentsProps) => {
  return (
    <StyledReactUiComponents>
      <h1>Welcome to react-ui-components component!</h1>
    </StyledReactUiComponents>
  );
};

export default ReactUiComponents;
