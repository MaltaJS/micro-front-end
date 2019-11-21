import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactUtilsFormatterProps {}

const StyledReactUtilsFormatter = styled.div`
  color: pink;
`;

export const ReactUtilsFormatter = (props: ReactUtilsFormatterProps) => {
  return (
    <StyledReactUtilsFormatter>
      <h1>Welcome to react-utils-formatter component!</h1>
    </StyledReactUtilsFormatter>
  );
};

export default ReactUtilsFormatter;
