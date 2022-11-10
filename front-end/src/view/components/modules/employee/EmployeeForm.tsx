import React, { useEffect, useState } from "react";
import { Card, message, Select } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { EmployeeService } from "../../../../api/Employee.service";
import { AppConst } from "../../../../constant/AppConst";
import { shift } from "../../../../interface/Interface";

const EmployeeForm: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<any>([]);
  /**********   Life cycle Method   ***********/

  // get all shifts

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getShiftLists = async () => {
      const controller = new AbortController();
      const response: any = await EmployeeService.getShiftLists();
      setData(await response.data.data);
    };

    getShiftLists();
    return () => {
      controller.abort();
    };
  }, []);

  /**********   end  ***********/

  // form request
  const formRequest = async (values: any) => {
    const response: any = await EmployeeService.post(values);

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
    <div className="site-card-border-less-wrapper">
      <Card title="Add New Employee" bordered={false}>
        <Form
          form={form}
          name="form"
          initialValues={{ remember: true }}
          onFinish={formRequest}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Employee Name"
            name="name"
            rules={[
              { required: true, message: "Please input your employee name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="position" label="Employee Position">
            <Select>
              <Select.Option value="Manager">Manager</Select.Option>
              <Select.Option value="Tech Lead">Tech Lead</Select.Option>
              <Select.Option value="BA">BA</Select.Option>
              <Select.Option value="Product Manager">
                Product Manager
              </Select.Option>
              <Select.Option value="HR">HR</Select.Option>
              <Select.Option value="Finance Executive">
                Finance Executive
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your employee address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Telephone"
            name="telephone"
            rules={[
              { required: true, message: "Please input your telephone!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default EmployeeForm;
