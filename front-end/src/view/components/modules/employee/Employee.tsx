import React, { Suspense } from "react";
import { Col, Row} from "antd";

const Employee = () => {
  const LazyForm = React.lazy(() => import("./EmployeeForm"));

  return (
    <div className="container">
      <Row>
        <Col xs={24} md={8}></Col>
        <Col xs={24} md={8}>
          <Suspense fallback={<></>}>
            <LazyForm />
          </Suspense>
        </Col>
        <Col xs={24} md={8}></Col>
      </Row>
    </div>
  );
};

export default Employee;
