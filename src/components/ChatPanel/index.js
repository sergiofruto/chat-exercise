import React from 'react';
import MessageList from './../MessageList';
import SendMessageForm from './../SendMessageForm';
import './styles.css';

const ChatPanel = ({ messages, email, sendMessage, roomId, uid, handleIsTyping, otherUserTyping }) => {
  return (
    <div className="chat-panel">
      <MessageList messages={messages} email={email} otherUserTyping={otherUserTyping}/>
      <SendMessageForm
        email={email}
        roomId={roomId}
        uid={uid}
        sendMessage={sendMessage}
        handleIsTyping={handleIsTyping}
      />
    </div>
  );
};

export default ChatPanel;