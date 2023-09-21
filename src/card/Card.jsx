import "./Card.css";

const Card = ({ picture, name, email, phone, location, registered }) => {
  return (
    <div className="card">
      <div className="card-ana">
        <div className="header">
          <img src={picture?.large} alt="perconel" />
          <h1>
            {name?.first}
            {name?.last}
          </h1>
        </div>
        <div className="main">
          <div className="gövde">
            <i className="fa-solid fa-envelope-open-text"></i> <h3>{email}</h3>
          </div>
          <div className="gövde">
            <i className="fa-solid fa-phone"></i>
            <h3>{phone}</h3>
          </div>
          <div className="gövde">
            <i className="fa-solid fa-map-location-dot"></i>
            <h3>
              {location?.city}/{location?.country}
            </h3>
          </div>
        </div>
        <div className="footer">
          <p>Age:{registered?.age}</p>
          <p>
            Register Date:
            {new Date(registered?.date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="btn">
        {/* <button type="submit" onClick={handleSubmit}>
          Random User
        </button> */}
      </div>
    </div>
  );
};

export default Card;
