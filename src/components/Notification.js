import React from 'react';

const Notification = ({ notification, onClear }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-black-300 rounded-full flex items-center justify-center">
          <span className="text-white">{notification.initials}</span>
        </div>
        <div>
          <p className="font-semibold">{notification.text}</p>
          <p className="text-sm text-gray-500">{notification.timeAgo}</p>
        </div>
      </div>
      <button
        className="text-blue-500 hover:text-red-500"
        onClick={() => onClear(notification.id)}
      >
        Clear
      </button>
    </div>
  );
};

export default Notification;
