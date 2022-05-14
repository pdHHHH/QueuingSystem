import React, { useState } from "react";
import "./usersection.scss";
import Bell from "../../Assets/Bell";

const imgUrl =
  "https://dothobattrang.vn/wp-content/uploads/2018/05/con-meo-hoang-vao-nha-la-diem-bao-gi-hen.jpg";
const notifications = [
  { user: "Le Kim Tan", content: "12h30 ngay 31/2/2020" },
  { user: "Trinh", content: "12h30 ngay 31/2/2020" },
  { user: "Le Kim Tan", content: "12h30 ngay 31/2/2020" },
  { user: "Le Kim Tan", content: "12h30 ngay 31/2/2020" },
  { user: "Le Kim Tan", content: "12h30 ngay 31/2/2020" },
  { user: "Le Kim Tan", content: "12h30 ngay 31/2/2020" },
  { user: "Le Kim Tan", content: "12h30 ngay 31/2/2020" },
  { user: "Le Kim Tan", content: "12h30 ngay 31/2/2020" },
  { user: "Le Kim Tan", content: "12h30 ngay 31/2/2020" },
];

const UserSection: React.FC = () => {
  const [notificationExpand, setNotificationExpand] = useState(false);

  return (
    <div className="app__user-section">
      <div
        className={`notification-bell ${notificationExpand && `active`}`}
        onClick={() => setNotificationExpand((prev) => !prev)}
      >
        <Bell />
        {notificationExpand && (
          <div className="notification-container">
            <div className="notification-container__header">Thông báo</div>
            <div className="notification-container__scroll-container">
              {notifications.map((item) => {
                return (
                  <div className="notification-item">
                    <div className="notification-item__title">
                     { `Người dùng: ${item.user}`}
                    </div>
                    <div className="notification-item__content">
                       {`Thời gian nhận số: ${item.content}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="avatar">
        <img src={imgUrl} alt="" />
      </div>
      <div className="hello-user">
        <span className="hello">Xin chào</span>
        <span className="user-name">Lee Kim Teem</span>
      </div>
    </div>
  );
};

export default UserSection;
