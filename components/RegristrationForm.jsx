import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";

const RegristrationForm = () => {
  return (
    <div>
      <div>
        <FormControl className="m-4">
          <InputLabel htmlFor="my-input">Prénom </InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            name="prenom"
          />
          <FormHelperText id="my-helper-text"> </FormHelperText>
        </FormControl>

        <FormControl className="m-4">
          <InputLabel htmlFor="my-input">Nom </InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" name="nom" />
          <FormHelperText id="my-helper-text"> </FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default RegristrationForm;
