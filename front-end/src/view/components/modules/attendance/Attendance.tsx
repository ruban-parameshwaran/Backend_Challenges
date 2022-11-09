import { Layout, Space, Tag } from "antd";
import { Col, Row } from "antd";
import type { ColumnsType } from 'antd/es/table';
import Table from "antd/es/table";
import { TableDataType } from "../../../../interface/HeaderInterface";

interface DataType {
  key: string;
  name: string;
  checkin: number;
  checkout: number;
  totalWH : number,
  tags: string[];
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
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      checkin: 32,
      checkout: 32,
      totalWH: 32,
      tags: ['nice', 'developer'],
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
