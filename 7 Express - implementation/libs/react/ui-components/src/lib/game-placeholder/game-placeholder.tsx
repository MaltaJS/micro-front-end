import React from 'react';
import { Game } from '@maltajs/react/data-access-react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GamePlaceholderProps {
  game: Game;
}

const StyledGamePlaceholder = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  margin: 50px auto;
`;
const StyledGameImg = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid #ccc
`;

export const GamePlaceholder = (props: GamePlaceholderProps) => {
  const { image } = props.game;

  return (
    <StyledGamePlaceholder>
      <StyledGameImg src={image} />
    </StyledGamePlaceholder>
  );
};

export default GamePlaceholder;
