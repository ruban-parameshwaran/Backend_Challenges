import { Layout, Space, Tag } from "antd";
import { Col, Row } from "antd";
import type { ColumnsType } from 'antd/es/table';
import Table from "antd/es/table";
import { TableDataType } from "../../../../interface/HeaderInterface";

interface DataType {
  key: string;
  name: string;
  address:string,
  checkin: number;
  checkout: number;
  position:string,
  totalWH : number,
}

const Attendance = () => {
  // table columns
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Checkin',
      dataIndex: 'checkin',
      key: 'checkin',
    },
    {
      title: 'Checkout',
      dataIndex: 'checkout',
      key: 'checkout',
    },
    {
      title: 'Position',
      key: 'position',
      dataIndex: 'position',
    },
    {
      title: 'Total Working Hours',
      key: 'total_working_hours',
      dataIndex: 'totalWH',
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      address:"No 3 ",
      checkin: 32,
      checkout: 32,
      position:"Manager",
      totalWH: 32,
    },
  ];

  const { Content } = Layout;
  return (
    <Layout>
      <div className="container">
        <Row>
          <Col xs={24} md={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Attendance;
