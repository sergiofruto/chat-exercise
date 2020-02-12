import React from 'react';
import Message from './../Message';

const MessageList = ({ messages, email, otherUserTyping }) => {
  return (
    <div className="list-container">
      {otherUserTyping ? <span>is typing</span> : ''}
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