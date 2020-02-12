import styled from 'styled-components';

export const MessageStyled = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${props => (props.messageEmail === props.myEmail) ? "#d2d2d2" : '#66bcf4'};
  color: black;
`;

export const MessageSender = styled.span`
  font-size: 12px;
  color: black;
`;

export const MessageTimeStamp = styled.span`
  font-size: 12px;
  color: black;
`;