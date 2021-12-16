import React from "react";
import Calendar from "react-calendar";
import AdminLayout from "../../components/Layout/AdminLayout";
import Layout from "../../components/Layout/Layout";

const dashboardAdmin = () => {
  return (
    <div>
      <Layout name="Dashboard Admin">
        <AdminLayout>
          <Calendar />
        </AdminLayout>
      </Layout>
    </div>
  );
};

export default dashboardAdmin;
