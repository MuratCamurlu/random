import React from "react";
import "./Header.css";
const Header = ({ user }) => {
  console.log(user);
  return (
    <div className="header2">
      <img src={user?.picture?.medium} alt="img" />
      <p>{user?.name?.first}</p>
    </div>
  );
};

export default Header;
