import React, { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main = (props: MainProps) => {
  return <main>{props.children}</main>;
};

export default Main;
