import React, { useEffect, useState } from 'react';

function SecondChild({ name, updateName }) {
  const [secondChildName, setSecondChildName] = useState('');

  useEffect(() => {
    setSecondChildName(name);
  }, [name]);
  return (
    <div>
      <h1>{secondChildName}</h1>
      <button onClick={() => updateName('Second CHanged')}>second child </button>
    </div>
  );
}

export default SecondChild;
