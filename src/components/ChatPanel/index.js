import React from 'react';
import MessageList from './../MessageList';
import SendMessageForm from './../SendMessageForm';
import { ChatPanelStyled } from './styled';

const ChatPanel = ({ messages, email, sendMessage, roomId, uid }) => {
  return (
    <ChatPanelStyled>
      <MessageList messages={messages} />
      <SendMessageForm
        email={email}
        roomId={roomId}
        uid={uid}
        sendMessage={sendMessage}
      />
    </ChatPanelStyled>
  );
};

export default ChatPanel;