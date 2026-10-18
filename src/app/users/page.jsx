import React, { Suspense } from 'react';
import Users from '../components/Users';
const UsersPromise = async () => {
  const data = await fetch('http://localhost:5000/pass');
  return data.json();
};
const UsersPage = async () => {
  return (
    <div>
      <h2>Class STudent info :</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users UsersPromise={UsersPromise}></Users>
      </Suspense>
    </div>
  );
};

export default UsersPage;
