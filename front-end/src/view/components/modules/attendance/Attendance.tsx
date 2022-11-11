import { Layout, Space, Tag } from "antd";
import { Col, Row } from "antd";
import type { ColumnsType } from 'antd/es/table';
import Table from "antd/es/table";
import { useEffect, useState } from "react";
import { AttendanceService } from "../../../../api/Attendance.service";
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
   
  ];

  const { Content } = Layout;

  /******************================= Life Cycle Hook =================******************** */

  const [workingHours, setWorkingHours] = useState<any>([]);
  /**********   Life cycle Method   ***********/
  workingHours.map((item:any) => {
    data.push({
          key: item.id,
          name: item.employee.name,
          address:"No 3 ",
          checkin: item.checkin,
          checkout: item.checkout,
          position:item.employee.position,
          totalWH: item.total_working_hours,
    })
  })

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getShiftLists = async () => {
      const controller = new AbortController();
      const response: any = await AttendanceService.getTotalWorkingHours();
      setWorkingHours(await response.data.data);
    };

    getShiftLists();

    return () => {
      controller.abort();
    };
  }, []);


  /**********   end  ***********/

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
