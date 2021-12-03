import Image from "next/image";
import HomeDisplay from "../components/HomeDisplay";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Connect from "../components/connect";

export default function Home() {
  return (
    <div>
      <Layout name="Home">
        <h1 className="font-lato title text-center text-gray-600 text-2xl p-10">
          Scubapp
        </h1>
        <HomeDisplay />
      </Layout>
    </div>
  );
}
