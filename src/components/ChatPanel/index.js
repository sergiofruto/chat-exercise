import React from 'react';
import MessageList from './../MessageList';
import SendMessageForm from './../SendMessageForm';

const ChatPanel = ({ messages }) => {
  return (
    <div>
      <h1>Here are the messagges</h1>
      <MessageList messages={messages} />
      <SendMessageForm />
    </div>
  );
};

export default ChatPanel;