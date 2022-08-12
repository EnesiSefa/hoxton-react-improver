import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users } from "../types/types";

export default function AddUser() {
  const [users, setUsers] = useState<Users>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");
  const [image, setImage] = useState("");
  //
  function postData(event) {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: "A superhero",
        age: 0,
        image: "",
        gender: "male",
        hobby:"hiking",
          
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }

  return (
    <form
      action=""
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        postData(event)
      }}
    >
      <label htmlFor="">
        <input
          placeholder="paste an image link "
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <input
          placeholder="write your full name "
          type="text"
          name="fullname"
          onChange={(e) => setFullname(e.target.value)}
        />
      </label>

      <label htmlFor="">
        <input
          placeholder="how young are you?"
          type="text"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <input
          placeholder="write your gender please..."
          type="text"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <input
          placeholder="what's your hobby"
          type="text"
          name="hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
      </label>
      <button onClick={postData}>create account</button>
    </form>
  );
}
