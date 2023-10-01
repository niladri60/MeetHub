import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
export default function Home() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
      navigate(`/room/${value}`);
    },
    [navigate,value]
  );
  return (
    <div className="main-container">
      <div class="container">
        <div class="join-form">
          <h1>Join Video Call</h1>
          <form id="join-form">
            <input
              type="text"
              placeholder="Your Username"
              id="username"
            />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Room ID"
            />
            <button onClick={handleJoinRoom} type="submit">Join</button>
          </form>
        </div>
      </div>
    </div>
  );
}
