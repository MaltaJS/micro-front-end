import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GameCardProps {}

const StyledGameCard = styled.div`
  color: pink;
`;

export const GameCard = (props: GameCardProps) => {
  return (
    <StyledGameCard>
      <h1>Welcome to game-card component!</h1>
    </StyledGameCard>
  );
};

export default GameCard;
