import { useState, useEffect } from "react";
import { Users } from "../types/types";

export default function MainPage() {
  const [users, setUsers] = useState<Users>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);
  return (
    <div className="acc-container">
      <ul className="acc-list">
        {users.map((user) => (
          <li className="acc-item">
            <h3> full name:{user.fullname}</h3>
            <span> Age: {user.age}</span>
            <span> Gender: {user.gender}</span>
            <img src="" alt="" />
            <p>Hobby:{user.hobby}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
