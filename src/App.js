import React, { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

import './App.css';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [messagesData, setMessagesData] = useState(chatMessages);

  const [numLiked, setNumLiked] = useState(0);

  const onHeartClicks = (liked) => {
    if (liked) {
      setNumLiked(numLiked - 1);
    } else {
      setNumLiked(numLiked + 1);
    }
  };

  const [colorChoices, setColorChoiches] = useState({
    userOne: 'green',
    userTwo: 'blue',
  });

  const setColorCallback = () => {};

  const onUpdateLikeFx = (id) => {
    const newMessages = messagesData.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });

    setMessagesData(newMessages);
  };

  const userOne = messagesData[0]['sender'];

  const findUserTwo = (messagesData) => {
    for (const message of messagesData) {
      if (message['sender'] !== userOne) {
        return message['sender'];
      }
    }
  };

  const userTwo = findUserTwo(messagesData);

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {userOne} and {userTwo}
        </h1>
        <ColorChoice userOne={userOne} userTwo={userTwo} numLiked={numLiked} />
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onUpdateLike={onUpdateLikeFx}
          onHeartClicks={onHeartClicks}
        />
      </main>
    </div>
  );
};

export default App;
