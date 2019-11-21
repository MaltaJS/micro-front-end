import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GamePlaceholderProps {}

const StyledGamePlaceholder = styled.div`
  color: pink;
`;

export const GamePlaceholder = (props: GamePlaceholderProps) => {
  return (
    <StyledGamePlaceholder>
      <h1>Welcome to game-placeholder component!</h1>
    </StyledGamePlaceholder>
  );
};

export default GamePlaceholder;
