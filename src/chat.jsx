import React, {useState, useCallback, useRef, useEffect} from 'react';
import styled from 'styled-components';
import cuuid from 'cuuid'
import {Message} from "./message";
import {usePrevious} from "./messages/hooks";

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  position: fixed;
  right: 2px;
  bottom: 2px;
  border: 2px solid lightblue;
`;
const Header = styled.div`
  background: #f6f6f6;
  text-align: center;
  padding: 10px 20px;
`;
const ChatIcon = styled.div``;
const Scroll = styled.div`
  overflow-x:  auto;
  height: 427px;
`;
const Controls = styled.form`
border-top: 1px solid #c6c6c6;
  position:absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Input = styled.input`
  border: 0;
  width: calc(100% - 50px);
  height: 2em;
  padding: 0 5px;
  background: transparent;
`;
const Button = styled.button`
  width: 50px;
  height: 2em;
  background: transparent;
  border: none;
  color: #61dafb;
  font-weight: bold;
  padding: 0;
  &:hover{
    color: #4a7894;
  }
`;

export function Chat({ messages = [], name, onSend, user}) {
  const [message, setMessage] = useState('');
  const scrollRef = useRef(null);
  const prevMessages = usePrevious(messages);
  const handleChange = useCallback(event=>{
    setMessage(event.currentTarget.value);
  },[setMessage]);
  const handleSubmit = useCallback(event=>{
    event.preventDefault();
    if( message.trim() !== ''){
      onSend([{
        id: cuuid(),
        user,
        createdAt: new Date(),
        text: message,
      }]);
      setMessage('');
      //scroll to bottom
      setTimeout(()=>{scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" })},1);
    }
  }, [onSend, user, message, scrollRef]);

  useEffect(()=>{
    if( prevMessages && messages.length > prevMessages.length) {
      //scroll to bottom
      setTimeout(()=>{scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" })},1);
    }
  },[messages, prevMessages]);
  return (
    <Wrapper>
      <Header>
        <ChatIcon/> {name}
      </Header>
      <Scroll>
        {messages.map(message =>
          <Message key={message.id} own={message.user && user.id === message.user.id} {...message} />
        )}
        <div ref={scrollRef} />
      </Scroll>
      <Controls onSubmit={handleSubmit}>
        <Input type="text" value={message} onChange={handleChange}/>
        <Button type="submit">Send</Button>
      </Controls>
    </Wrapper>
  );
}
