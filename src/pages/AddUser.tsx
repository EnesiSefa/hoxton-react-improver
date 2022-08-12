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

  return (
    <form
      action=""
      className="form"
      onSubmit={(event) => {
        event.preventDefault();

        let user = {
          fullName: event.target.fullname.value,
          age: Number(event.target.age.value),
          gender: event.target.gender.value,
          hobby: event.target.hobby.value,
          image:event.target.hobby.value
        };

        setUsers([...users, user]);
      }}
    >
      <label htmlFor="">
        <input
          placeholder="paste an image link "
          type="text"
          name="image"
        />
      </label>
      <label htmlFor="">
        <input
          placeholder="write your full name "
          type="text"
          name="fullname"
        />
      </label>

      <label htmlFor="">
        <input placeholder="how young are you?" type="text" name="age" />
      </label>
      <label htmlFor="">
        <input
          placeholder="write your gender please..."
          type="text"
          name="gender"
        />
      </label>
      <label htmlFor="">
        <input placeholder="what's your hobby" type="text" name="hobby" />
      </label>
      <button>create account</button>
      <h2>
        to see the users <Link to={"mainpage"}>click here</Link>
      </h2>
    </form>
  );
}
