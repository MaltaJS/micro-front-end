import React from 'react';
import { useGame } from '@maltajs/react/data-access-react';
import { GamePlaceholder } from '@maltajs/react/ui-components';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactFeatureDetailsProps {
  game: string
}

const StyledReactFeatureDetails = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
`;

export const ReactFeatureDetails = (props: ReactFeatureDetailsProps) => {
  const game = useGame(props.game);

  if (!game) {
    return null
  }

  return (
    <StyledReactFeatureDetails style={{ backgroundImage: `url(${game.bg})`}}>
      <GamePlaceholder game={game} />
    </StyledReactFeatureDetails>
  );
};

export default ReactFeatureDetails;
