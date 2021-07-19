import React, { useState, useRef } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import CreateUser from './CreateUser';
import UserList from './UserList';

export const usersSample = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com',
    active: true,
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com',
    active: false,
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com',
    active: false,
  },
];

function Home() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const [users, setUsers] = useState(usersSample);

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  };

  return (
    <Wrapper>
      <CreateUser
        email={email}
        username={username}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </Wrapper>
  );
}

export default Home;
