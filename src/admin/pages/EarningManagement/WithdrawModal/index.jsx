import { Card, CardContent, Dialog, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { CustomBtn, InputField } from "../../../../components/InputField";

const useStyles = makeStyles({
  withdrawInfo: {
    padding: "2rem 5rem",
  }
})

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
    <div>
      <Dialog
        open={openWithdrawModal}
        onClose={closeWithdrawModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card className={classes.withdrawInfo}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <InputField
                label="User Name / Email"
                name="userName"
                // value={authData.userName}
                // onChange={handleAuthData}
              />
              <div className={classes.passwordField}>
                <InputField
                  label="Password"
                  // type={passwordValue ? "text" : "password"}
                  name="password"
                  // value={authData.password}
                  // onChange={handleAuthData}
                />
                {/* <img
                  src={lockIcon}
                  alt="Show or hide password"
                  onClick={handleShowHidePassword}
                /> */}
              </div>

              <CustomBtn type="submit" text="Sign In" color="green" />
            </form>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
};

export default WithdrawModal;
