import React, { FC } from "react";

type Props = {
  space: {};
};

const Spacing: FC<Props> = ({ space }) => {
  return <div style={{ ...space }} />;
};

export default Spacing;
