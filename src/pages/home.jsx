import React, { useEffect, useState } from "react";
import MCard from "../components/basicUI/m-card";
import { Button, Col, message, Row, Spin } from "antd";
import axios from "axios";
//interface, type
const Home = () => {
  const [dataService, setDataService] = useState([]);
  const [loading, setLoading] = useState(false);
  const asyncLoadData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://swd-hair-be.onrender.com/view-service"
      );
      message.success("Tải thành công");
      setDataService(response.data.services);
    } catch (error) {
      message.error("Lỗi hệ thống");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    asyncLoadData();
  }, []);
  return (
    <Spin spinning={loading}>
      <Row>
        {dataService.map((item) => (
          <Col span={6}>
            <MCard title={item.name} number={item.price} image={item.image} />
          </Col>
        ))}
      </Row>
    </Spin>
  );
};

export default Home;
