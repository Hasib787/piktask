import React, { useState } from 'react';
import Modal from 'react-modal';
import useStyles from "../../Auth.styles";
import { TextField, Button, Typography } from "@material-ui/core";
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')

const RegistrationTokenModal = ({ modalIsOpen, closeModal }) => {
    const classes = useStyles();
    const [token, setToken] = useState("");

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/login" } };

    const handleSubmitToken = () => {
      axios.post("https://piktask.com/api/auth/verify/account", {
        token: token,
      })
      .then((response) => {
        if(response.status === 200){
          toast.success("Token Verify Success");
          history.replace(from);
        }
      })
      .catch((error) => {
        toast.error("Token is not verified", error.message);
      })
    };

    return (
        <div className={classes}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <Typography className={classes.formTitle} variant="h2">Add Confirm Token</Typography>
            <form onSubmit={handleSubmitToken}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Token"
                    className={classes.formControl}
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.formButton}
                  type="submit"
                >
                  TokenVerify
                </Button>
            </form>
          </Modal>
        </div>
    );
};

export default RegistrationTokenModal;