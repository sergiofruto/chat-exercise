import React from 'react';
import Message from './../Message';

const MessageList = ({ messages }) => {
  return (
    <div>
      <h1>Message list</h1>
      <ul>
        {
          Object.keys(messages)
            .map(messageKey => ({...messages[messageKey], id: messageKey}))
            .map(message => <Message key={message.id} message={message} />)
        }
      </ul>
    </div>
  );
};

export default MessageList;