import React, { useState } from "react";
import "./Contact.css";
import Header from "../Header/Header";
import { TextField, Button } from "@mui/material";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { feedBack } from "../../Reducer/UserReducers";
function Contact() {
  const [FirstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Comment, setcomment] = useState("");
  const Dis = useDispatch();
  const Nav = useNavigate();
  const SendFeed = () => {
    Dis(feedBack({ FirstName, LastName, Comment, Email }, Nav));
  };
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="contact">
        <div className="text">
          <h1>Contact Us</h1>
          <p>
            If you have any questions, feedback, or inquiries, please feel free
            to reach out to us. You can contact us via email.Alternatively, you
            can use the contact form on this page to send us a message, and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="form">
          <Stack direction={"column"} spacing={2}>
            <Stack direction={"row"} spacing={2}>
              <TextField
                label="First Name"
                value={FirstName}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                variant="outlined"
                type="text"
              />
              <TextField
                label="Last Name"
                value={LastName}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                variant="outlined"
                type="text"
              />
            </Stack>
            <TextField
              id="outlined-basic"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              variant="outlined"
            />
            <TextField
              value={Comment}
              onChange={(e) => {
                setcomment(e.target.value);
              }}
              minRows={3}
              label="What can we help you with?"
              variant="outlined"
              multiline
            />
            <Button variant="contained" onClick={SendFeed}>
              Submit
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Contact;
