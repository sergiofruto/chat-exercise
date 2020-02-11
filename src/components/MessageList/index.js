import React from 'react';
import Message from './../Message';

const MessageList = ({ messages, email }) => {
  return (
    <div>
      <h1>Message list</h1>
      <ul>
        {
          Object.keys(messages)
            .map(messageKey => ({...messages[messageKey], id: messageKey}))
            .map(message => <Message key={message.id} message={message} email={email} />)
        }
      </ul>
    </div>
  );
};

export default MessageList;