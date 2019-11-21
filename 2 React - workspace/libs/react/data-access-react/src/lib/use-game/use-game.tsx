import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UseGameProps {}

const StyledUseGame = styled.div`
  color: pink;
`;

export const UseGame = (props: UseGameProps) => {
  return (
    <StyledUseGame>
      <h1>Welcome to use-game component!</h1>
    </StyledUseGame>
  );
};

export default UseGame;
