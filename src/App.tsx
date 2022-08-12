import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./pages/AddUser";
import MainPage from "./pages/MainPage";
import { User, Users } from "./types/types";

function App() {
  

  return (
    <div className="App">
      <img
        className="background-image"
        src="https://wallpapercave.com/wp/wp7423858.jpg"
        alt=""
      />
      <h1 className="title">A dating app for lawyers</h1>

      <Routes>
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
      <h2 className="click-here">
        want to add a user <Link to={"adduser"}>click here</Link>
      </h2>
      <h2>
        to see the users <Link to={"mainpage"}>click here</Link>
      </h2>
     
    </div>
  );
}

export default App;
