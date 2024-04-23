// INCOMPLETE

import './ChatList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);
    const fetchMessages = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.log('No user ID found in local storage.');
        return;
      }

      try {
        const response = await axios.get('/chats', {
          headers: {
            'Content-Type': 'application/json'
          },
          data: { userId }
        });
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };



  return (
    <div>
      <h1>Received Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <p><strong>From:</strong> {message.sender.username} <strong>At:</strong> {new Date(message.timestamp).toLocaleString()}</p>
            <p>{message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;