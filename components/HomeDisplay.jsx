import Card from "./Card";
import React from "react";
import CTAbtn from "./CTAbtn";
import Link from "next/link";

const HomeDisplay = () => {
  return (
    <div>
      <Card />
      <Link href="/registration">
        <div>
          <CTAbtn />{" "}
        </div>
      </Link>
    </div>
  );
};

export default HomeDisplay;
