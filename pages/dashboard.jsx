import React from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import Layout from "../components/Layout/Layout";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <AdminLayout>
          <h1> Back Office</h1>
        </AdminLayout>
      </Layout>
    </div>
  );
};

export default Dashboard;
