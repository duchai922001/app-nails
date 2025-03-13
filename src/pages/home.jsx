import React, { useEffect, useState } from "react";
import MCard from "../components/basicUI/m-card";
import { Button, Col, message, Row, Spin } from "antd";
import axios from "axios";
import Service from "./service";
//khai báo
const Home = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [dataService, setDataService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    fullName: "",
    phoneNumber: "",
    serviceName: "",
  });
  const handleChangeInput = (value, name) => {
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    setIsOpen(false);
    setInputValue({
      fullName: "",
      phoneNumber: "",
      serviceName: "",
    });
    console.log({ formData: inputValue });
  };
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
  const handleCancelModal = () => {
    setIsOpen(false);
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
      <Button onClick={() => setIsOpen(true)}>Booking now</Button>
      <Service
        isOpenModal={isOpen}
        handleCancel={handleCancelModal}
        handleChangeInput={handleChangeInput}
        inputValue={inputValue}
        handleSubmit={handleSubmit}
      />
    </Spin>
  );
};

export default Home;
