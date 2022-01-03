import HomeDisplay from "../components/HomeDisplay";
import Layout from "../components/Layout/Layout";
import Price from "../components/Price";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import StayConnect from "../components/StayConnect";

export default function Home() {
  return (
    <div>
      <Layout>
        <HomeDisplay />
        <div className="m-48">
          <Card />
        </div>

        <div className="mt-24">
          <StayConnect />
        </div>

        <div className="mt-48">
          <Price />
        </div>
      </Layout>
    </div>
  );
}
