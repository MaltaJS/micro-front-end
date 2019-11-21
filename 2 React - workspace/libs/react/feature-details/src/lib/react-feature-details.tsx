import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactFeatureDetailsProps {}

const StyledReactFeatureDetails = styled.div`
  color: pink;
`;

export const ReactFeatureDetails = (props: ReactFeatureDetailsProps) => {
  return (
    <StyledReactFeatureDetails>
      <h1>Welcome to react-feature-details component!</h1>
    </StyledReactFeatureDetails>
  );
};

export default ReactFeatureDetails;
