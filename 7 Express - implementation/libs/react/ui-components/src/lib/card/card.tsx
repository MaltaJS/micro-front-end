import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CardProps {
  children: any
}

const StyledCard = styled.div`
  max-width: 300px;
  width: 30vw;
  margin: 1em;
  background: #fff;
  border-radius: 0.3em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0, -6px, 16px, -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0, -6px, 32px, -6px hsla(0, 0%, 0%, 0.03);
  }
`;

export const Card = (props: CardProps) => {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
};

export default Card;
