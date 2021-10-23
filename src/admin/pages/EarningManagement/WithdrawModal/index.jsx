import { Dialog, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CustomBtn, InputField } from "../../../../components/InputField";

const useStyles = makeStyles({
  withdrawModal: {
    "& .MuiDialog-paperWidthSm": {
      width: "40rem",
    },
  },
  withdrawInfo: {
    padding: "4rem 5rem",
    maxWidth: "50rem",
  },
  withdrawTitle: {
    textAlign: "center",
    fontSize: "1.6rem",
    fontWeight: "500",
    marginBottom: "2rem",
  },
});

const WithdrawModal = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const { openWithdrawModal, setWithdrawModal } = props;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [authData, setAuthData] = useState({amount: "",});

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const closeWithdrawModal = () => {
    setWithdrawModal(false);
  };

  const handleAuthData = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  useEffect(() => {
    setLoading(true);

    if (user?.token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/contributor/profile`, {
          headers: { Authorization: user.token },
        })
        .then(({ data }) => {
          if (data?.status) {
            setUsername(data.user.username);
            setEmail(data.user.email);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [user?.token])

  const handleSubmit = () => {};

  return (
    <>
      <Dialog
        open={openWithdrawModal}
        onClose={closeWithdrawModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.withdrawModal}
      >
        <div className={classes.withdrawInfo}>
          <Typography variant="h5" className={classes.withdrawTitle}>
            {"Apply for withdrawal"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <InputField
              label="User Name"
              name="userName"
              value={username}
            />
            <InputField
              label="Paypal"
              name="paypal"
              // value={authData.userName}
            />
            <InputField
              label="Email"
              name="email"
              value={email}
            />
            <div className={classes.passwordField}>
              <InputField
                label="Amount"
                type="number"
                name="amount"
                value={authData.amount}
                onChange={handleAuthData}
              />
              {/* <img
                    src={lockIcon}
                    alt="Show or hide password"
                    onClick={handleShowHidePassword}
                  /> */}
            </div>

            <CustomBtn type="submit" text="Apply" color="green" />
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default WithdrawModal;
