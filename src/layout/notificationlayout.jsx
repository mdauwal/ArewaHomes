import React, { useState,useEffect } from 'react';
import Navbar from '../components/navbar'; 
import userAvatar from '../svgs/avatar1.svg'; 
import userAvatarr from '../svgs/avatar2.svg'; 
import userAvatar3 from '../svgs/avatar3.svg'; 
import userAvatar4 from '../svgs/avatar4.svg'; 
import userAvatar5 from '../svgs/avatar5.svg'; 
import userAvatar6 from '../svgs/avatar6.svg'; 
import { FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'; 
import { MdSend } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


    // Mock API Call to fetch conversations
const fetchUserConversations = () => {
    return Promise.resolve([
      {
        id: 1,
        name: 'John Doe',
        message: 'Hello, how are you?',
        avatar: userAvatar,
        read: false,
        conversation: [
          { sender: 'You', text: 'Hello, how are you?' },
          { sender: 'You', text: 'I am fine, thanks!' },
          { sender: 'John Doe', text: 'Glad to hear that!' },
        ],
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'Sure, let’s schedule the meeting...',
        avatar: userAvatarr,
        read: true,
        conversation: [
          { sender: 'You', text: 'Let me know when you’re free!' },
          { sender: 'Jane Smith', text: 'How about tomorrow at 10 AM?' },
        ],
      },
      {
        id: 3,
        name: 'Muhammad Tanks',
        message: 'Sure, let’s schedule the meeting...',
        avatar: userAvatar3,
        read: true,
        conversation: [
          { sender: 'Muhammad Tanks', text: 'Sure, i would be at Lex today so no wahala brother' },
          { sender: 'You', text: 'Let me know when you’re free!' },
          { sender: 'Muhammad Tanks', text: 'How about tomorrow at 10 AM?' },
        ],
      },
      {
        id: 4,
        name: 'Umar Jere',
        message: 'Sure, let’s schedule the meeting React Class is great...',
        avatar: userAvatar4,
        read: true,
        conversation: [
          { sender: 'Umar Jere', text: 'Sure, let’s schedule the meeting...' },
          { sender: 'You', text: 'Let me know when you’re free!' },
          { sender: 'Umar Jere', text: 'How about tomorrow at 10 AM?' },
        ],
      },
      {
        id: 5,
        name: 'Uslah Murtala',
        message: 'how plans dey go na. we go link up sooonest man',
        avatar: userAvatar5,
        read: false,
        conversation: [
          // { sender: 'Uslah Murtala', text: 'Sure, let’s schedule the meeting...' },
          // { sender: 'You', text: 'Let me know when you’re free!' },
          // { sender: 'Uslah Murtala', text: 'How about tomorrow at 10 AM?' },
        ],
      },
      {
        id: 6,
        name: 'David Chioma',
        message: 'Sure, let’s get u the Leadway assurance',
        avatar: userAvatar6,
        read: true,
        conversation: [
          { sender: 'David Chioma', text: 'Sure, let’s schedule the meeting...' },
          { sender: 'You', text: 'Let me know when you’re free!' },
          { sender: 'David Chioma', text: 'How about tomorrow at 10 AM?' },
        ],
      },
    ]);
  };
  
  const NotificationLayout = () => {
    const [users, setUsers] = useState([]); // Users data from API
    const [selectedUser, setSelectedUser] = useState(null); // State to track the selected user
    const [newMessage, setNewMessage] = useState(''); // State to store the new message input
    const [filteredUsers, setFilteredUsers] = useState([])
    const [filterValues, setFilterValues] = useState('')
  
    // Fetch users and conversations on mount
    useEffect(() => {
      fetchUserConversations().then((data) => setUsers(data));
    }, []);
  
    // Function to handle sending a message
    const handleSendMessage = (e) => {
      e.preventDefault();
      if (newMessage.trim() && selectedUser) {
        // Add new message to the selected user's conversation
        const updatedUsers = users.map((user) =>
          user.id === selectedUser.id
            ? {
                ...user,
                conversation: [...user.conversation, { sender: 'You', text: newMessage }],
              }
            : user
        );
        setUsers(updatedUsers);
        setSelectedUser({ ...selectedUser, conversation: [...selectedUser.conversation, { sender: 'You', text: newMessage }] });
        setNewMessage(''); // Clear the input
      }
    };

    const filterUser = (e) => {
      const searchValue = e.target.value.trim(); 
      setFilterValues(searchValue); 
      
      if (searchValue) {
       
        const filtered = users.filter((user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase()) 
        );
        
        setFilteredUsers(filtered) 
      } else {
        // Reset to full list if no search value
        setFilteredUsers(users);
      }
    };
    
  
    return (
      <div className="min-h-screen flex flex-col max-w-[1797px] mx-auto my-0">
        <Navbar />
  
        {/* Main layout with the user list and message section */}
        <main className="flex-grow px-[5px] md:px-[62px] flex flex-row h-[calc(100vh-80px)]">
          
          {/* Left side: User List (30% width) */}
          <div className="w-full md:w-[30%] border-r border-gray-300 overflow-y-scroll md:overflow-y-auto bg-white overflow-x-hidden pl-2">
            {/* User List */}
            <div className="w-full h-10 my-10 flex flex-col md:flex-row justify-between items-center px-4">
              <p className="text-2xl">Conversations</p>
              
              <div className="relative w-full md:w-1/2">
                <input
                  type="search"
                  className="w-full h-full focus:outline-none"
                  placeholder="Search..."
                  value={filterValues}
                  onChange={filterUser}
                />
                
                <CiSearch
                  size={"24px"}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 mr-2"
                />
              </div>
            </div>

            <UserList users={filteredUsers.length > 0 ? filteredUsers: users} onUserClick={setSelectedUser} />
          </div>
  
          {/* Right side: Conversation Section (70% width) */}
          <div className="w-full md:w-[70%] flex flex-col overflow-y-auto">
            {selectedUser ? (
              <>
                <Conversation user={selectedUser} />
                {/* Message Input Section */}
                <form className="mt-auto p-4 border-t border-gray-300" onSubmit={handleSendMessage}>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="w-full p-2 pr-10 border focus:outline-none rounded-md"
                      placeholder="Type a message..."
                    />
                    
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 p-1">
                      <MdSend size={"24px"} />
                    </button>
                  </div>
                </form>

              </>
            ) : (
              <div className="p-6 text-gray-500 flex justify-center items-center h-full">
                <h1 className="text-3xl font-semibold w-[700px] ">Connect and share experiences with other
                Hubspot users </h1>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  };
  
  const UserList = ({ users, onUserClick }) => {
    return (
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={() => onUserClick(user)} />
        ))}
      </div>
    );
  };
  
  const UserCard = ({ user, onClick }) => {
    return (
      <div
        className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        {/* Avatar */}
        <div className="w-[15%] sm:w-1/5">
          <img src={user.avatar} alt="user-avatar" className="rounded-lg h-10 w-10 object-cover" />
        </div>
  
        {/* User name and message snippet */}
        <div className="w-[70%] sm:w-3/5 flex flex-col items-start">
          <span className="font-semibold text-sm">{user.name}</span>
          <span className="text-xs text-gray-500 truncate w-[90%]">{user.message}</span>
        </div>
  
        {/* Message status icon (read/unread) */}
        <div className="w-[5%] sm:w-1/5 flex justify-end">
          {user.read ? (
            <FaEnvelopeOpen className="text-gray-400" size={20} />
          ) : (
            <FaEnvelope className="text-gray-400" size={20} />
          )}
        </div>
      </div>
    );
  };
  
  // Conversation component to display the selected user's conversation
  const Conversation = ({ user }) => {
    return (
      <div className="p-6 flex-grow overflow-y-auto">
        <h1 className="text-lg font-bold mb-4">Conversation with {user.name}</h1>
        <div className="space-y-4">
          {user.conversation.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
      </div>
    );
  };
  
  // Message component to display individual messages
  const Message = ({ message }) => {
    const isSender = message.sender === 'You';
    return (
      <div className={`flex mt-0 md:mt-[10%] ${isSender ? 'justify-end md:justify-center md:ml-52' : "justify-start md:justify-center md:mr-52" }`}>
        <div className={`p-3 md:p-10 ${isSender ? 'bg-black text-white' : 'bg-gray-200 text-black'} max-w-xs md:w-[550px]`}>
          <p className="text-sm">{message.text}</p>
        </div>
      </div>
    );
  };
  
export default NotificationLayout;
