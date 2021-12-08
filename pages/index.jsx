import Image from "next/image";
import HomeDisplay from "../components/HomeDisplay";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import CookieConsent from "react-cookie-consent";


export default function Home() {
  return (
    <div>
      <Layout name="Home">
      <CookieConsent
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
        <h1 className="font-lato title text-center text-gray-600 text-2xl p-10">
          Scubapp
        </h1>
        <HomeDisplay />
      </Layout>
    </div>
  );
}
