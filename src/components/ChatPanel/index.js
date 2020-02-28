import React from 'react';
import MessageList from './../MessageList';
import SendMessageForm from './../SendMessageForm';
import placeholder from './../../assets/img/avatar-placeholder.png';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ChatPanel = ({
  slideInChat,
  messages,
  email,
  sendMessage,
  roomId,
  uid,
  handleIsTyping,
  otherUserTyping,
  backToRooms,
}) => {
  return (
    <div className={`chat-panel ${slideInChat ? 'is-active' : ''}`}>
      <div className="header-wrapper">
        <nav className="navbar rooms-header" role="navigation" aria-label="main navigation">
          <div className="chat-header">
            <FontAwesomeIcon className="back-to-rooms-cta" onClick={backToRooms} icon={faArrowLeft} color="white" />
            <img src={placeholder} alt="" />
            <div className="chat-header-info">
              <span className="chat-header-title">Demo Chat</span>
              <span>{otherUserTyping ? `${uid} is typing` : 'Online'}</span>
            </div>
          </div>
        </nav>
      </div>
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