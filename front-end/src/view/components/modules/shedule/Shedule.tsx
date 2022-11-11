import { InboxOutlined } from "@ant-design/icons";
import { Button, Col, Form, Layout, message, Row, Upload } from "antd";
import { EmployeeService } from "../../../../api/Employee.service";
import { SheduleService } from "../../../../api/Shedule.service";
import { AppConst } from "../../../../constant/AppConst";

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};



const Shedule = () => {
  const [form] = Form.useForm();

  // form request
  const formRequest = async (values: any) => {
    const formData = new FormData();
    formData.append('File', values.file[0]);
    const response: any = await SheduleService.post(formData);
    
    try {
      if (
        response.status === 201 ||
        response.status === 201 ||
        response.message === true
      ) {
        message.success(AppConst.messages.success);
        form.resetFields();
      } else if (
        response.status === 422 ||
        response.staus !== 201 ||
        response.status !== 200
      ) {
        message.error(response.response.data.message);
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
        <Form
         form={form}
         name="form"
         initialValues={{ remember: true }}
         onFinish={formRequest}
         autoComplete="off"
         layout="vertical">
          <Form.Item>
            <Form.Item
              name="file"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="file" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={24} md={7}></Col>
    </Row>
   </Layout>
  );
};

export default Shedule;
