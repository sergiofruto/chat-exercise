import React from 'react';

const Conversation = (conversation) => (
  <div>
    {console.log('adrentro', conversation)}
    {
      conversation.conversation.map(message => console.log(message))
    }
    {/* {Object.keys(conversation.conversation)
      .map(messageKey => ({ ...conversation[messageKey] }))
      .map(message => <li>{message.text}</li>)
    } */}
  </div>
);

const ConversationsList = (conversations) => {
  {/* {gab} */ }
  // const conversationsArr = Object.entries(conversations).map(([id, obj]) => ({ id, messages: Object.entries(obj).map(([id, obj]) => ({ id, ...obj })) }));
  // const conversation = conversationsArr[0].messages;
  {/* {console.log(conversationsArr[0].messages)} */}
  return (
    <div>
      <h1>Conversationos List</h1>
      <ul>
        {/* <Conversation conversation={conversation} /> */}
        {Object.keys(conversations)
          .map(conversationKey => ({ ...conversations[conversationKey]}))
          .map(newConversations => Object.keys(newConversations).map( conversation => <li>{conversation}</li>))
        }
        {/* {mio} */}
        {/* {Object.keys(conversations)
          .map(conversationKey => ({ ...conversations[conversationKey]}))
          .map(conversation => Object.keys(conversation).map(messageKey => ({ ...conversation[messageKey] })).map(message => <Conversation conversation={message} />))
        } */}
        {/* Object.entries(conversations).map(([id, obj]) => ({id, messages: Object.entries(obj).map(([id, obj]) => ({id, ...obj })) })); */}
      </ul>
    </div>
  );
};

export default ConversationsList;