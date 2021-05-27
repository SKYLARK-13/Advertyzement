import React from "react";
import "./Card.css";
function Card({ user }) {
  // console.log(user.data[0].email);
  return (
    <div className="card">
      <img src={user.avatar} alt="" />
      <h2>
        First Name: <span>{user.first_name}</span>
      </h2>
      <h2>
        Last Name: <span>{user.last_name}</span>
      </h2>
      <h3>
        Email: <span>{user.email}</span>
      </h3>
    </div>
  );
}

export default Card;
