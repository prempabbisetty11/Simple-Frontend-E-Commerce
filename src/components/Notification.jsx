import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext.jsx";
import "../styles/Notification.css";

function Notification() {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type}`}
        >
          <div className="notification-content">
            {notification.type === "success" && <span className="notification-icon">✓</span>}
            {notification.type === "error" && <span className="notification-icon">✕</span>}
            {notification.type === "info" && <span className="notification-icon">ℹ</span>}
            <span className="notification-message">{notification.message}</span>
          </div>
          <button
            className="notification-close"
            onClick={() => removeNotification(notification.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default Notification;
