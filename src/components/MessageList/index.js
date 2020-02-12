import React, { useRef, useEffect } from "react";
import Message from './../Message';

const MessageList = ({ messages, email, otherUserTyping }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef) {
      listRef.current.scrollBy({
        top: 99999,
        behavior: "smooth"
      });
    }
  }, [messages]);
  return (
    <div className="list-container" ref={listRef}>
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