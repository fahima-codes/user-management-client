import React, { use } from 'react';

const Users = ({ UsersPromise }) => {
  const users = use(UsersPromise());
  return (
    <div>
      <h2>users in the component:{users.length}</h2>
      {users.map(user => (
        <li key={user.id}>
          Name: {user.name}:Roll {user.roll} Class:{user.class}
        </li>
      ))}
    </div>
  );
};

export default Users;
