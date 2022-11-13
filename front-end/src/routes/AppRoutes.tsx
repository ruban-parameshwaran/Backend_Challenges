import { Layout, PageHeader } from "antd";
import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { TextHelper } from "../helper/TextHelper";
import Loader from "../loader/Loader";

const LazyNotFound = React.lazy(() => import("../view/components/NotFound"));
const LazyHeader = React.lazy(() => import("../view/layout/header/Header"));

// modules

const LazyAttendance = React.lazy(
  () => import("../view/components/modules/attendance/Attendance")
);
const LazyShedule = React.lazy(
  () => import("../view/components/modules/shedule/Shedule")
);
const LazyEmployee = React.lazy(
  () => import("../view/components/modules/employee/Employee")
);

const LazyDashboard = React.lazy(
  () => import("../view/components/modules/dashboard/Dashboard")
);

const AppRoutes: React.FC = () => {
  const { Header, Footer, Content } = Layout;

  const path:string = useLocation().pathname;
  let title:string = path.substring(1);
  title = (TextHelper.removeSpeicalCharector(title));

  if(title === ''){
    title = 'Dashboard';
  }

  return (
    <Layout>
      <Suspense fallback={<Loader />  }>
        <LazyHeader />
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title={TextHelper.transfromUpper(title)}
        />
        <Content>
          <Routes>
            <Route path="" element={<LazyDashboard />} />
            <Route path="attendance" element={<LazyAttendance />} />
            <Route path="shedule" element={<LazyShedule />} />
            <Route path="employee" element={<LazyEmployee />} />
            <Route path="*" element={<LazyNotFound />} />
          </Routes>
        </Content>
      </Suspense>
    </Layout>
  );
};

export default AppRoutes;
