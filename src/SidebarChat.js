import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';
function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState('')
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomName = prompt("enter a name for the chat");

    if (roomName) {
      //do something (database)
    }
  };


  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
      <div onClick={createChat}
      className="sidebarChat">
          <h2>Add new Chat</h2>
      </div>
  );
}

export default SidebarChat
