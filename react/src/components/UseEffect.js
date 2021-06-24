import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";

const Child = ({ items }) => {
  // const history = useHistory();
  // const [isReactive, setIsReactive] = useState(false);
  // const { match: { params: { fab } } } = props;

  useEffect(() => {
    console.log('CHild - components', items, "render");
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
    console.log('checkTrue', data[0].age)
    return data[0].age === 1
  }
  // Data does't start loading
  // until *after* Parent is mounted
  useEffect(() => {
    if (items.length) { // 2. 시점 제어 - 아이템이 존재해야 실행
      console.log("item useEffect - start", items)
      setItems(checkIsTrue());
    }
  }, [data]); // 1. 시점 제어 - 데이터 참조 

  // Solution:
  // don't render Child until `items` is ready!
  return (
    <div>
      {items && <Child items={items} />}
    </div>
  );
}

export default UseEffect;
