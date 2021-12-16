import { useEffect, useState } from "react";
import Image from "next/image";
import HomeDisplay from "../components/HomeDisplay";
import Layout from "../components/Layout/Layout";
import Price from "../components/Price";
import styles from "../styles/Home.module.css";
import CookieConsent from "react-cookie-consent";
import StayConnect from "../components/StayConnect";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };
  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);
  return (
    <div>
      <Layout>
        <label className="switch">
          <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
          <span className="slider"></span>
        </label>{" "}
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
