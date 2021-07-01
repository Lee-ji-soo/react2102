import React, { useEffect, useState } from 'react';

function FirstChild({ name , updateName}) {
  const [firstChildName, setFirstChildName] = useState('');

  useEffect(() => {
    setFirstChildName(name);
  }, [name]);

  return (
    <div>
      <h1>{firstChildName}</h1>
      <button onClick={()=>updateName("FirstChild CHanged")}> first child </button>
    </div>
  );
}

export default FirstChild;
