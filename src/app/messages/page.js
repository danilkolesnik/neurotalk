'use client';
import React, { useEffect, useState } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        // todo: threads instagram
        const accountResponse = await fetch(`https://graph.instagram.com/v18.0/me?fields=id,username&access_token=${accessToken}`);
        const accountData = await accountResponse.json();
        console.log('Account data:', accountData);

        if (accountData.error) {
          throw new Error(`Account error: ${accountData.error.message}`);
        }

        const response = await fetch(`https://graph.instagram.com/v18.0/${accountData.id}/conversations?fields=participants,messages{message,from,created_time}&access_token=${accessToken}`);
        const data = await response.json();
        console.log('Messages response:', data);

        if (data.error) {
          throw new Error(data.error.message);
        }

        setMessages(data.data || []);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-black">Loading messages...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-screen bg-gray-200">
      {/* Messages Section */}
      <div className="p-4">
        <h2 className="text-xl text-black font-semibold mb-4">Instagram Сообщения</h2>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-black">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{message.from?.name || 'User'}</span>
                <span className="text-sm">
                  {new Date(message.created_time).toLocaleTimeString()}
                </span>
              </div>
              <p className="mb-2">{message.message}</p>
              <div className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-gray-200 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Написать ответ..."
                />
                <button className="inline-flex bg-black text-white items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send w-4 h-4 mr-2"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                  Ответить
                </button>
              </div>
            </div>
          ))}
          {messages.length === 0 && (
            <div className="bg-white p-4 rounded-lg shadow text-black text-center">
              Нет сообщений
            </div>
          )}
        </div>
      </div>

      {/* Balance Section */}
      <div className="p-4">
        <h2 className="text-xl text-black font-semibold mb-4">Баланс токенов</h2>
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
          <div className="flex items-center text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-coins w-6 h-6 mr-2 text-yellow-500"
            >
              <circle cx="8" cy="8" r="6"></circle>
              <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
              <path d="M7 6h1v4"></path>
              <path d="m16.71 13.88.7.71-2.82 2.82"></path>
            </svg>
            <span className="text-2xl font-bold">1000</span>
          </div>
          <button className="inline-flex text-white bg-red-500 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Пополнить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
