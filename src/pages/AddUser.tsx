import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users } from "../types/types";

export default function AddUser() {
  const [users, setUsers] = useState<Users>([]);

  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");
  const [image, setImage] = useState("");
  //
  function postData(userData) {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userData,
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

        let userData = {
          fullname: event.target.fullname.value,
          age: event.target.age.valueAsNumber,
          image: event.target.image.value,
          gender: event.target.gender.value,
          hobby: event.target.hobby.value,
        };
        postData(userData);
      }}
    >
      <label htmlFor="">
        <input
          placeholder="paste an image link "
          type="text"
          name="image"
          // onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <input
          placeholder="write your full name "
          type="text"
          name="fullname"
          // onChange={(e) => setFullname(e.target.value)}
        />
      </label>

      <label htmlFor="">
        <input
          placeholder="how young are you?"
          type="text"
          name="age"
          // onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <input
          placeholder="write your gender please..."
          type="text"
          name="gender"
          // onChange={(e) => setGender(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <input
          placeholder="what's your hobby"
          type="text"
          name="hobby"
          // onChange={(e) => setHobby(e.target.value)}
        />
      </label>
      <button>create account</button>
    </form>
  );
}
