import { Row, Col, Card } from "antd";
import { Fragment, useEffect, useState } from "react";
import EmployeeWidget from "./components/employee/EmployeeWidget";
import WokringHours from "./components/total_working_hours/WorkingHours";
import { EmployeeService } from  '../../../../api/Employee.service';
import { AttendanceService } from "../../../../api/Attendance.service";
const Dashboard = () => {

  const[data, setData] = useState<any>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getTotalWorkingHours = async () => {
      const controller = new AbortController();
      const response: any = await AttendanceService.getEmployeeStats();
      
      setData(response.data[0]);      
    };
    
    getTotalWorkingHours();
    // cleanup function
    return () => {
      controller.abort();
    };

  }, []);
  
    
  return (
    <Fragment>
      <div className="container">
        <Row>
          <Col span={8}>
          <EmployeeWidget data={data.totalEmployees}/>
          </Col>
          <Col span={8}>
          <WokringHours data={data.totalWorkingHours}/>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Dashboard;
