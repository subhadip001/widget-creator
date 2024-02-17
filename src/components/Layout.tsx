import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <main>
        <Header />
        <Dashboard />
      </main>
    </React.Fragment>
  );
};

export default Layout;
