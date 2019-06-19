import React from 'react';
import styled from 'styled-components'

const Message = styled.div`
  text-align: center;
  color: #c4c4c4;
  font-weight: bold;
  font-size: .6em;
  margin: 2px 0;
`;

export function System({ text, ...rest}) {
    return (
      <Message {...rest}>
        {text}
      </Message>
    );
}