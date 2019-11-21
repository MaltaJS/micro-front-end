import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactFeatureListProps {}

const StyledReactFeatureList = styled.div`
  color: pink;
`;

export const ReactFeatureList = (props: ReactFeatureListProps) => {
  return (
    <StyledReactFeatureList>
      <h1>Welcome to react-feature-list component!</h1>
    </StyledReactFeatureList>
  );
};

export default ReactFeatureList;
