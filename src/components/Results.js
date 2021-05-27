import React from "react";
import Card from "./Card";
import "./Results.css";
function Results({ users }) {
  return (
    <div className="results">
      {users &&
        users.data.map((user, index) => {
          return <Card user={user} />;
        })}
    </div>
  );
}

export default Results;
