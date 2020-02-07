import React from 'react';

const Message = ({ message }) => (
  <li>
    {message.text}
  </li>
);

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