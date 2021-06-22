import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";

const Child = ({ items }) => {
  // const history = useHistory();
  // const [isReactive, setIsReactive] = useState(false);
  // const { match: { params: { fab } } } = props;

  useEffect(() => {
    console.log(items, "render");
  }, [])

  return (
    <>
      {items ?
        <h1>This is useEffect</h1>
        : <h1>NoNoNo</h1>
      }
    </>
  )
};

function UseEffect() {
  // Uninitialized state will cause Child to error out
  const [items, setItems] = useState(false);

  const data = [{ age: 1 }]
  const checkIsTrue = () => {
    console.log(data[0].age)
    return data[0].age === 1
  }
  // Data does't start loading
  // until *after* Parent is mounted
  useEffect(() => {
    setItems(checkIsTrue());
  }, []);

  // Solution:
  // don't render Child until `items` is ready!
  return (
    <div>
      {items && <Child items={items} />}
    </div>
  );
}

export default UseEffect;
