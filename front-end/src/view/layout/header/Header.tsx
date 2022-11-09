import { Layout, Menu } from "antd";
import React, { Fragment, Suspense } from "react";

const LazyNavigation = React.lazy(() => import('./navigation/Navigation'));

const Header:React.FC = () => {

    const { Header } = Layout;
    return (
      <Fragment>
        <Suspense fallback = {<h2>Loading..</h2>} >
          <LazyNavigation />
        </Suspense>
      </Fragment>
    )
}

export default Header;