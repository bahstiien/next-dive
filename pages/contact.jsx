import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer";
import styles from "../styles/contact.module.css";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendmail(e) {
    e.preventDefault();
    Swal.fire({
      title: "Well done 😀",
      text: "Merci pour ton mail",
      imageUrl: "https://media.giphy.com/media/xUOxeQWMpDf5NpZztC/giphy.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "gif succes",
    });

    emailjs
      .sendForm(
        "service_scb7kbd",
        "template_b64sh08",
        form.current,
        "user_HJJ9D5D81a0748P6oWLwv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Layout name="Contact">
      <form
        className="p-4 m-2 flex justify-center flex-col"
        ref={form}
        onSubmit={sendmail}
      >
        <div className="m-2 flex flex-col w-2/5">
          <FormControl className="m-4">
            <InputLabel htmlFor="my-input">Email :</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <FormHelperText id="my-helper-text">
              Nous ne partagerons pas ton adresse mail
            </FormHelperText>
          </FormControl>

          <FormControl className="m-4">
            <InputLabel htmlFor="my-input">Nom + Prénom :</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </FormControl>

          <FormControl className="m-4">
            {" "}
            <InputLabel htmlFor="my-input">Message :</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              multiline
              rows={5}
              rowsMax={10}
            />
            <FormHelperText id="my-helper-text"> </FormHelperText>
          </FormControl>
        </div>

        <input
          className="btnForm border-4 p-2 w-48 flex justify-center items-center"
          value="SEND"
          type="submit"
        />
      </form>
    </Layout>
  );
};

export default Contact;
