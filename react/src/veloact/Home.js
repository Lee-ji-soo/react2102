import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function Home() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  return (
    <Wrapper>
      <CreateUser />
      <UserList users={users}/>
    </Wrapper>
  );
}

export default Home;
