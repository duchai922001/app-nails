import { Button } from "antd";
import React from "react";

const HomeChild = ({ count, setCount }) => {
  return (
    <>
      <div>Home child {count}</div>
      <Button onClick={() => setCount(count + 1)}>Tăng lên</Button>
    </>
  );
};

export default HomeChild;
