import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
const MCard = ({ title, description, number }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title={title} description={description} />
      {number}
    </Card>
  );
};

export default MCard;
