import React from 'react';
import { Link } from 'react-router-dom';
import { useGames } from '@maltajs/react/data-access-react';
import { GameCard } from '@maltajs/react/ui-components';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactFeatureListProps {}

const StyledReactFeatureList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ReactFeatureList = (props: ReactFeatureListProps) => {
  const games= useGames();

  return (
    <StyledReactFeatureList>
      {games.map((game, index) => 
        <StyledLink key={index} to={`/${game.id}`}>
          <GameCard game={game} />
        </StyledLink>
      )}
    </StyledReactFeatureList>
  );
};

export default ReactFeatureList;
