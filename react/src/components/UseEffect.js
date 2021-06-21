import React, { useEffect } from "react";
import { useHistory } from "react-router";

const UseEffect = (props) => {
  const history = useHistory();
  console.log(history.location.pathname)

  const { match: { params: { fab } } } = props;
  console.log(fab)
  useEffect(() => {
    console.log(fab)
  }, [])

  return (
    <>
      <h1>This is useEffect</h1>
    </>
  )
};

export default UseEffect;
