import { Row, Col, Card, Spin } from "antd";
import { useState } from "react";

interface type {
  data:string[] | any
}

const EmployeeWidget:React.FC<type> = ({data}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  setTimeout(() => {
    setIsLoading(true)
  },800);
  
  return (
    <Card title="Total Employees" bordered={false}>
      {!isLoading &&  <Spin />}
      {isLoading &&  <h2>{data}</h2>}
    </Card>
  );
};

export default EmployeeWidget;
