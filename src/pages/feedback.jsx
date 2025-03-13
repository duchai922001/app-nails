import { Modal } from "antd";
import React from "react";

const Feedback = ({ isOpen }) => {
  return (
    <Modal title="Basic Modal" open={isOpen}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default Feedback;
