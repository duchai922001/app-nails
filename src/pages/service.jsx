import { Col, Input, Modal, Row, Select } from "antd";
import React from "react";

const Service = ({
  isOpenModal,
  handleCancel,
  handleChangeInput,
  inputValue,
  handleSubmit,
}) => {
  return (
    <Modal
      onOk={handleSubmit}
      title="Đặt dịch vụ ngay"
      open={isOpenModal}
      onCancel={handleCancel}
    >
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Input
            name="fullName"
            value={inputValue.fullName}
            placeholder="Họ và tên"
            onChange={(e) => handleChangeInput(e.target.value, "fullName")}
          />
        </Col>
        <Col span={24}>
          <Input
            onChange={(e) => handleChangeInput(e.target.value, "phoneNumber")}
            name="phoneNumber"
            value={inputValue.phoneNumber}
            placeholder="Số điện thoại"
          />
        </Col>
        <Col span={24}>
          <Select
            name="serviceName"
            showSearch
            placeholder="Chọn dịch vụ"
            optionFilterProp="label"
            onChange={(value) => handleChangeInput(value, "serviceName")}
            value={inputValue.serviceName}
            options={[
              {
                value: "",
                label: "Chọn dịch vụ",
              },
              {
                value: "cut hair",
                label: "Cắt tóc",
              },
              {
                value: "nail",
                label: "làm nail",
              },
              {
                value: "sonmongtay",
                label: "Sơn móng tay",
              },
            ]}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default Service;
