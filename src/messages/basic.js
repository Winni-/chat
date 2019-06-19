import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  padding: 0 5px;
  position: relative;
  margin: 2px 0;
`;
const User = styled.div``;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  left: 5px;
`;
const Body = styled.div`
  background: #f2f2f2;
  border-radius: 13px/10px;
  padding: 10px;
  display: inline-block;
  margin-left: 35px;
`;
const Time = styled.div`
  color: #a8a8a8;
  font-size: .5em;
  text-align: right;
`;
export function Basic({ text, createdAt, user, ...rest}) {
    return (
      <Message {...rest}>
        <User>
          <Avatar src={user.avatar} alt={user.name}/>
        </User>
        <Body>
          {text}
          <Time>{createdAt.toLocaleTimeString()}</Time>
        </Body>
      </Message>
    );
}
