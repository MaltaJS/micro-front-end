import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UseGamesProps {}

const StyledUseGames = styled.div`
  color: pink;
`;

export const UseGames = (props: UseGamesProps) => {
  return (
    <StyledUseGames>
      <h1>Welcome to use-games component!</h1>
    </StyledUseGames>
  );
};

export default UseGames;
