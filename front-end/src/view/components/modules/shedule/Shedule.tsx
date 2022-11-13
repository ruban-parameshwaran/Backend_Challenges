import { Button, Col, Form, Layout, Row, message } from "antd";
import { useState } from "react";
import { SheduleService } from "../../../../api/Shedule.service";
import { AppConst } from "../../../../constant/AppConst";
import { useForm } from "react-hook-form";
import axios from "axios";

const Shedule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onFileUpload functoin
  const onFileUpload = async (data: any, e: any) => {
    const formData = new FormData();
    formData.append("img_path", data.file[0]);
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/attendance",
      formData
    );

    try {
      if (
        response.status === 201 ||
        response.status === 201 ||
        response.data.message === true
      ) {
        message.success(AppConst.messages.success);
        
      } else {
        message.warn(AppConst.messages.tryAgain);
      }
    } catch (e) {
      message.warn(AppConst.messages.tryAgain);
    }
  };

  return (
    <Layout>
      <Row>
        <Col xs={24} md={7}></Col>
        <Col xs={24} md={10}>
          <form onSubmit={handleSubmit(onFileUpload)}>
            <input {...register("file")} type="file" name="file" />
            <button>button</button>
          </form>
        </Col>
        <Col xs={24} md={7}></Col>
      </Row>
    </Layout>
  );
};

export default Shedule;
