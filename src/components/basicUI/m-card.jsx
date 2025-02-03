import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
const MCard = ({ title, description, number, image }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={image} />}
    >
      <Meta title={title} description={description} />
      {number}
    </Card>
  );
};

export default MCard;
