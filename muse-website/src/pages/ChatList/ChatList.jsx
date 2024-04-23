import './ChatList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatList = () => {
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
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      // Check if response.data is an array, if not, initialize messages as an empty array
      setMessages(Array.isArray(response.data) ? response.data : []);
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
            <p><strong>From:</strong> {message.sender.username}</p>
            <p>{message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
