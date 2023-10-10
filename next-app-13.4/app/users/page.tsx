import React from "react";

interface User {
  id: string;
  name: string;
  email: string;
}
const UsersPage = async () => {
  const result = await fetch(`${process.env.USERS_URL}`, { cache: "no-store" });
  const users: User[] = await result.json();
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <h1>Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
