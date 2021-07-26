import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useStyles from "../../Auth.styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ModalAuth = ({ modalIsOpen, closeModal }) => {
  const classes = useStyles();
  const [authToken, setAuthToken] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/login" } };

  const handleSubmit = (e) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/verify/account`, {
        token: authToken,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Token verify successfully");
          history.replace(from);
        }
      })
      .catch((error) => {
        toast.error("Token is not verified", error.message);
      });

    if (e.target.value < 8 || e.target.value > 8) {
      toast.error("Please enter a valid code");
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Confirm Your Email
        </h2>
        <form onSubmit={handleSubmit} className="modalForm">
          <TextField
            fullWidth
            variant="outlined"
            label="Add Token"
            className={classes.formControl}
            value={authToken}
            onChange={(e) => setAuthToken(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            className={classes.formButton}
            type="submit"
          >
            Confirm
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default ModalAuth;
