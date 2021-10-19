import { Dialog, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
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
  const { openWithdrawModal, setWithdrawModal } = props;

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const closeWithdrawModal = () => {
    setWithdrawModal(false);
  };

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
              // value={authData.userName}
              // onChange={handleAuthData}
            />
            <InputField
              label="Paypal"
              name="paypal"
              // value={authData.userName}
              // onChange={handleAuthData}
            />
            <InputField
              label="Email"
              name="email"
              // value={authData.userName}
              // onChange={handleAuthData}
            />
            <div className={classes.passwordField}>
              <InputField
                label="Amount"
                type="number"
                name="amount"
                // value={authData.password}
                // onChange={handleAuthData}
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
