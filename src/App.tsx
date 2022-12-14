import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { Layout, Spin } from "antd";

const AllReservation = lazy(() => import("templates/AllReservations"));
const NotFound = lazy(() => import("templates/NotFound"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <Layout
            style={{
              //TODO: To add that in common styling
              justifyContent: "center",
              alignSelf: "center",
              width: "100vw",
              height: "100vh",
            }}
          >
            <Spin size="large" tip="Loading..."></Spin>
          </Layout>
        }
      >
        <Routes>
          <Route index element={<AllReservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
