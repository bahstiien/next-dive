import React from "react";
import Layout from "../components/Layout/Layout";

import { Divide as Hamburger } from "hamburger-react";
import DarkMode from "../components/Layout/DarkMode";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

const playground = () => {
  return (
    <div>
      <Layout>
        <Hamburger size={48} />
        <div className="flex justify-center text-center">
          <FormGroup>
            <p className="mr-5 text-2xl -mt-4">🌙</p>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label=""
              labelPlacement="end"
              color="primary"
            />
          </FormGroup>
        </div>
        <DarkMode />
      </Layout>
    </div>
  );
};

export default playground;
