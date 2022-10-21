import { useState } from "react";
import "./Card.css";

const Card = () => {
  const [user, setUser] = useState("");
  const handleSubmit = () => {
    const url = "https://randomuser.me/api/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  console.log(user);

  return (
    <div className="card">
      <div className="card-ana">
        <div className="header">
          <img src={user?.picture?.large} alt="" />
          <h1>
            {user?.name?.first}
            {user?.name?.last}
          </h1>
        </div>
        <div className="main">
          <div className="gövde">
            <i className="fa-solid fa-envelope-open-text"></i>{" "}
            <h3>{user?.email}</h3>
          </div>
          <div className="gövde">
            <i className="fa-solid fa-phone"></i>
            <h3>{user?.phone}</h3>
          </div>
          <div className="gövde">
            <i className="fa-solid fa-map-location-dot"></i>
            <h3>
              {user?.location?.city}/{user?.location?.country}
            </h3>
          </div>
        </div>
        <div className="footer">
          <p>Age:{user?.registered?.age}</p>
          <p>
            Register Date:
            {new Date(user?.registered?.date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="btn">
        <button type="submit" onClick={handleSubmit}>
          Random User
        </button>
      </div>
    </div>
  );
};

export default Card;
