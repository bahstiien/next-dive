import React from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import Layout from "../../components/Layout/Layout";
import AdminNavBar from "../../components/Layout/AdminNavBar";

const dashboardAdmin = () => {
  return (
    <div>
      <Layout name="Dashboard">
        <AdminLayout>
          <div className="flex flex-col items-center justify-center">
            <p className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt sed eros eu vehicula. Pellentesque bibendum odio ac ex
              consequat, vitae feugiat velit viverra. Suspendisse potenti. Proin
              id interdum purus. Ut dui sapien, molestie vel leo et, mollis
              mollis nunc. Curabitur sed placerat tellus, quis luctus enim.
              Nullam et mi odio. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Aliquam sollicitudin nisl id congue efficitur.
              Quisque at augue est. Etiam et metus mi. Duis vel tincidunt enim,
              sed ultrices massa. Nunc id nulla mattis, congue lorem et,
              convallis odio. Nam quis tinc
            </p>
          </div>
        </AdminLayout>
      </Layout>
    </div>
  );
};

export default dashboardAdmin;
