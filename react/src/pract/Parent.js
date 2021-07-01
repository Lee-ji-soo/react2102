import React, { useState } from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

function Parent() {
  const [parentName, setParentName] = useState('Mr John Obi');

  const updateName = (name) => {
    setParentName(name);
  }

  return (
    <div>
      <FirstChild name={parentName} updateName={updateName}/>
      <SecondChild name={parentName} updateName={updateName}/>
    </div>
  );
}

export default Parent;
