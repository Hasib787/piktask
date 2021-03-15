import { FC } from "react";

type Props = {
  name: string;
  email: string;
  verified: boolean;
};

const userAuth: FC<Props> = ({ name, email, verified }) => {
  return <div>User Authentication page</div>;
};

export default userAuth;
