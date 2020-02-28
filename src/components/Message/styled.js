import styled from 'styled-components';

export const MessageStyled = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${props => (props.messageEmail === props.myEmail) ? "lightskyblue" : 'rgba(135, 206, 250, .5)'};
  ${props => (props.messageEmail === props.myEmail) ? "margin-left: auto" : 'margin-right: auto'};
  color: black;
`;

export const MessageText = styled.p`
  font-size: 16px;
  padding: 10px 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

export const MessageSender = styled.span`
  font-size: 14px;
  color: black;
  font-weight: 500;
`;

export const MessageTimeStamp = styled.span`
  font-size: 12px;
  color: black;
`;