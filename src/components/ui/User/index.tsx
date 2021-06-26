import { FC } from "react";
import useStyles from "./User.styles";

type Props = {
  name: string;
  email: string;
  verified: boolean;
};

const User: FC<Props> = ({ name, email, verified }) => {
  const classes = useStyles();

  return <div></div>;
};

export default User;
