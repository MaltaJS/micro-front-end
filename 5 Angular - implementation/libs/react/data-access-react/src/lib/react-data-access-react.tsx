import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactDataAccessReactProps {}

const StyledReactDataAccessReact = styled.div`
  color: pink;
`;

export const ReactDataAccessReact = (props: ReactDataAccessReactProps) => {
  return (
    <StyledReactDataAccessReact>
      <h1>Welcome to react-data-access-react component!</h1>
    </StyledReactDataAccessReact>
  );
};

export default ReactDataAccessReact;
