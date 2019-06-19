import React, {useState} from 'react';
import {Chat} from "./chat";
import './index.css';


function App() {
  const [messages, setMessages] = useState([{
    id: 1,
    text: 'My messages',
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    user: {
      id: 2,
      name: 'React Native',
      avatar: 'https://www.indiewire.com/wp-content/uploads/2018/09/avatar-102-16x9.jpg?w=780',
    },
    // Any additional custom parameters are passed through
  }, {
    id: 2,
    text: 'This is a system messages',
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    system: true,
    // Any additional custom parameters are passed through
  },
  ]);
  const name = 'Chat Name';
  const onSend = (newMessages = []) => {
    setMessages([
      ...messages,
      ...newMessages
    ])
  };
  const user = {id: 1};

  return (
    <Chat
      messages={messages}
      name={name}
      onSend={onSend}
      user={user}
    />
  );
}


export default App;
