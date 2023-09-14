import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Results from "./Results";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const loadercss = css`
  margin-left: 45%;
`;

function Navbar() {
  const url = "https://reqres.in/api/users?page=1";
  const [users, setUsers] = useState(null);
  const [load, setLoad] = useState({
    loading: false,
  });
  const fetchData = async () => {
    setLoad({
      loading: true,
    });
    await axios.get(url).then((response) => {
      setTimeout(() => {
        setUsers(response.data);
        setLoad({
          loading: false,
        });
      }, 2000);
    });
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar_left">
          <img
            className="navbar_logo"
            src="https://i.pinimg.com/originals/be/ea/7f/beea7f10ad12ca7aa3929c28690cd51f.png"
            alt=""
          />
          <h3>Advertyzement</h3>
        </div>
        <div className="navbar_right">
          <a href="helloapp://">
            <img src="https://control.msg91.com/app/assets/images/microservice-icon/hello.svg" alt="App Icon" />
            <p>Open App</p>
          </a>

        </div>
        <div className="navbar_right">
          <button className="navbar_button">
            <h2 onClick={fetchData}>Get Users</h2>
          </button>
        </div>
      </div>
      {load.loading ? (
        <BeatLoader loading color="#262e44" size={25} css={loadercss} />
      ) : (
        <Results users={users} />
      )}
    </div>
  );
}

export default Navbar;
