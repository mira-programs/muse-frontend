// INCOMPLETE

import './ChatList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ChatList() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage after login
        const response = await axios.get('http://localhost:8080/chats', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setChats(response.data.chatList); // Adjust according to the actual response structure
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="chat-list">
      {chats.map(chat => (
        <Link key={chat.userId} to={`/chat/${chat.userId}`}>
          <div className="chat-preview">
            <p>{chat.username}</p>
            <small>{chat.email}</small>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ChatList;