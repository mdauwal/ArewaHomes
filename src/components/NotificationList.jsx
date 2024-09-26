import React, { useState } from "react";

const NotificationsList = () => {
  const initialNotifications = [
    {
      id: 1,
      initials: "RHA",
      text: "New houses available for rent",
      timeAgo: "5 min ago",
    },
    {
      id: 2,
      initials: "RHA",
      text: "Website maintenance",
      timeAgo: "5 min ago",
    },
    {
      id: 3,
      initials: "RHA",
      text: "New houses available for rent",
      timeAgo: "5 min ago",
    },
    {
      id: 4,
      initials: "AT",
      text: "Afolabi Tobi sent you a message",
      timeAgo: "5 days ago",
    },
    {
      id: 5,
      initials: "RHA",
      text: "New houses available for rent",
      timeAgo: "5 hours ago",
    },
    {
      id: 6,
      initials: "RHA",
      text: "New houses available for rent",
      timeAgo: "5 hours ago",
    },
    {
      id: 7,
      initials: "RHA",
      text: "New houses available for rent",
      timeAgo: "5 min ago",
    },
    {
      id: 8,
      initials: "RHA",
      text: "Website maintenance",
      timeAgo: "5 min ago",
    },
    {
      id: 9,
      initials: "RHA",
      text: "New houses available for rent",
      timeAgo: "5 min ago",
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const handleClearNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="p-4 w-full max-w-2xl mx-auto">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <div className="bg-black text-white text-xs px-2 py-1 ml-2">3 new</div>
        <button className="ml-auto text-black-500" onClick={handleClearAll}>
          Clear all
        </button>
      </div>

      <div className="bg-white roun-lg shadow-md m-0 px-6 pt-2">
        {" "}
        {notifications.map((notification, index) => (
          <React.Fragment key={notification.id}>
            <Notification
              notification={notification}
              onClear={handleClearNotification}
            />
            {index < notifications.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
        {notifications.length === 0 && (
          <div className="p-4 text-center text-gray-500">No notifications</div>
        )}
      </div>
    </div>
  );
};

const Notification = ({ notification, onClear }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-black">{notification.initials}</span>
        </div>
        <div>
          <p className="font-semibol">{notification.text}</p>
          <p className="text-sm text-gray-500 text-left">
            {notification.timeAgo}
          </p>
        </div>
      </div>
      <button
        className="text-black-500 hover:text-red-500"
        onClick={() => onClear(notification.id)}
      >
        Clear
      </button>
    </div>
  );
};

export default NotificationsList;
