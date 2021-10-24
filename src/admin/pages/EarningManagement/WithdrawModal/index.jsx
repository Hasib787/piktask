import { Dialog, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CustomBtn, InputField } from "../../../../components/InputField";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  withdrawModal: {
    "& .MuiDialog-paperWidthSm": {
      width: "40rem",
    },
  },
  closeModal: {
    marginLeft: "auto",
    padding: "1rem",
    color: "#0088f2",
    cursor: "pointer",
  },
  withdrawInfo: {
    padding: "0rem 5rem 4rem",
    maxWidth: "50rem",
  },
  withdrawTitle: {
    textAlign: "center",
    fontSize: "1.6rem",
    fontWeight: "500",
    marginBottom: "2rem",
  },
  amountField: {
    "& p": {
      color: "red",
      fontSize: "1.2rem",
      fontWeight: "500",
      marginBottom: "1rem",
      marginTop: "-1rem",
    },
  }
});

const WithdrawModal = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const { 
    openWithdrawModal, 
    setWithdrawModal, 
    username, 
    paymentGateway, 
    paypalAccount,
    payoneerAccount,
    accountNumber,
    totalBalance,
    minWithdraw,
  } = props;

  
  const [isLoading, setLoading] = useState(false);
  const [authData, setAuthData] = useState("");
  const [errors, setErrors] = useState("");

  const closeWithdrawModal = () => {
    setWithdrawModal(false);
  };

  const handleAuthData = (e) => {
    const { value } = e.target;
    setAuthData(value);
    if (value < minWithdraw) {
      setErrors("Sorry, Minimum withdraw $25");
      return;
    } else if(value > totalBalance){
      setErrors("Sorry, you don't have enough balance to withdraw");
      return;
    } else {
      setErrors("");
      return;
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 

    if(user?.token && !errors){
      axios
        .post(`${process.env.REACT_APP_API_URL}/contributor/withdrawals/request`,
          {amount: authData}, 
          {headers: { Authorization: user.token },}
        )
        .then(({ data }) => {
          console.log("data", data);
          if (data?.status) {
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <>
      <Dialog
        open={openWithdrawModal}
        onClose={closeWithdrawModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.withdrawModal}
      >
        <div className={classes.closeModal}>
          <CloseIcon
            fontSize="large"
            onClick={() => setWithdrawModal(false)}
          />
        </div>
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
            {paymentGateway === "PayPal" && (
              <>
                <InputField
                  label="Paypal"
                  name="paypal"
                  value={paymentGateway}
                />
                <InputField
                  label="Email"
                  name="email"
                  value={paypalAccount}
                />
              </>
            )}
            {paymentGateway === "Payoneer" && (
              <>
                <InputField
                  label="Payoneer"
                  name="payoneer"
                  value={paymentGateway}
                />
                <InputField
                  label="Email"
                  name="email"
                  value={payoneerAccount}
                />
              </>
            )}
            {paymentGateway === "Bank" && (
              <>
                <InputField
                  label="Bank"
                  name="bank"
                  value={paymentGateway}
                />
                <InputField
                  label="Account Number"
                  name="account"
                  value={accountNumber}
                />
              </>
            )}
            <div className={classes.amountField}>
              <InputField
                label="Amount"
                type="number"
                name="amount"
                value={authData}
                onChange={handleAuthData}
              />
              {errors && (<Typography>{errors}</Typography>)}
            </div>

            <CustomBtn type="submit" text="Apply" color="green" />
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default WithdrawModal;
