import React from 'react';
import moment from 'moment';

import { MessageStyled, MessageSender, MessageTimeStamp } from './styled';

const Message = ({ message }) => (
  <MessageStyled>
    <MessageSender>{message.email}</MessageSender>
    {message.text}
    <MessageTimeStamp>
      {moment(message.created).format('h:mm a')}
    </MessageTimeStamp>
  </MessageStyled>
);

export default Message;