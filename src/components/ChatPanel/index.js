import React from 'react';
import MessageList from './../MessageList';
import SendMessageForm from './../SendMessageForm';
import { ChatPanelStyled } from './styled';

const ChatPanel = ({ messages, email, sendMessage, roomId, uid, handleIsTyping }) => {
  return (
    <ChatPanelStyled>
      <MessageList messages={messages} email={email} />
      <SendMessageForm
        email={email}
        roomId={roomId}
        uid={uid}
        sendMessage={sendMessage}
        handleIsTyping={handleIsTyping}
      />
    </ChatPanelStyled>
  );
};

export default ChatPanel;