import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Layout: React.FC = () => {
  return (
    <>
      <main className="flex h-screen">
        <Sidebar />
        <section className="">
          <Header />
          <Dashboard />
        </section>
      </main>
    </>
  );
};

export default Layout;
