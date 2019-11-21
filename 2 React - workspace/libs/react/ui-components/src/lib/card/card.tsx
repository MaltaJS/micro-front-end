import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CardProps {}

const StyledCard = styled.div`
  color: pink;
`;

export const Card = (props: CardProps) => {
  return (
    <StyledCard>
      <h1>Welcome to card component!</h1>
    </StyledCard>
  );
};

export default Card;
