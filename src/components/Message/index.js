import React from 'react';
import moment from 'moment';

import { MessageStyled, MessageSender, MessageTimeStamp, MessageText } from './styled';

const Message = ({ message, email }) => (
  <MessageStyled myEmail={email} messageEmail={message.author}>
    <MessageSender>{message.author}</MessageSender>
    <MessageText>{message.text}</MessageText>
    <MessageTimeStamp>
      {moment(message.created).format('h:mm a')}
    </MessageTimeStamp>
  </MessageStyled>
);

export default Message;