import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  padding: 0 5px;
  position: relative;
  text-align: right;
  margin: 2px 0;
`;
const Body = styled.div`
  background: #1f92f2;
  border-radius: 13px/10px;
  padding: 10px;
  display: inline-block;
  color: #fff;
  text-align: left;
`;
const Time = styled.div`
  color: #f5f5f5;
  font-size: .5em;
  text-align: right;
`;
export function Own({ text, createdAt, user, ...rest}) {
    return (
      <Message {...rest}>
        <Body>
          {text}
          <Time>{createdAt.toLocaleTimeString()}</Time>
        </Body>
      </Message>
    );
}
