import Head from "next/head";
import Link from "next/link";
import AdminNavBar from "../Layout/AdminNavBar";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function AdminLayout({ children, pageTitle }) {
  return <AdminNavBar />;
  // const { data, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   console.log(status, data);
  //   if (status !== "loading" && data?.user?.role !== "admin") {
  //     router.push("/login");
  //   }
  // }, [status, data, router]);

  // return (
  //   <div>
  //     <Head>
  //       <title>{pageTitle}</title>
  //     </Head>

  //     <main>{children}</main>
  //   </div>
}
