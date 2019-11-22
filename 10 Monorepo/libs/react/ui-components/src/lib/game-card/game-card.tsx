import React from 'react';

import styled from 'styled-components';
import { Game } from '@maltajs/react/data-access-react';
import { potFormatter } from '@maltajs/react/utils-formatter';

/* eslint-disable-next-line */
export interface GameCardProps {
  game: Game
}

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const StyledDiv = styled.div`
  padding: 0 1.2em;
`;
const StyledH2 = styled.h2`
  color: #222;
  line-height: 1.4;
  font-size: 1.3em;
  font-weight: 500;
  transition: all ease-in 100ms;
  white-space: nowrap;
`;
const StyledP = styled.p`
  color: #777;
  float: right;
  text-decoration: none;
`;
const StyledH5 = styled.h5`
  color: #bbb;
  font-weight: 700;
  font-size: 0.7em;
  letter-spacing: 0.04em;
  margin: 1.4em 0 0 0;
  text-transform: uppercase;
`;

export const GameCard = (props: GameCardProps) => {
  const { image, name, pot, provider} = props.game
  return (
    <>
      <StyledImg src={image} />
      <StyledDiv>
        <StyledH2>{name}</StyledH2>
        <StyledP>{potFormatter(pot)}</StyledP>
        <StyledH5>{provider}</StyledH5>
      </StyledDiv>
    </>
  );
};

export default GameCard;
