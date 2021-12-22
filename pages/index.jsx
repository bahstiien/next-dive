import { useEffect, useState } from "react";
import Image from "next/image";
import HomeDisplay from "../components/HomeDisplay";
import Layout from "../components/Layout/Layout";
import Price from "../components/Price";
import styles from "../styles/Home.module.css";
import CookieConsent from "react-cookie-consent";
import StayConnect from "../components/StayConnect";

export default function Home() {
  return (
    <div>
      <Layout>
        <CookieConsent
          location="bottom"
          buttonText="Sure man!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>
        <HomeDisplay />
        <StayConnect />
        <Price />
      </Layout>
    </div>
  );
}
