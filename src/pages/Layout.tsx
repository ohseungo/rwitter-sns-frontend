import Header from "components/common/Header";
import React from "react";
import { Main, Root } from "./Layout.styled";

interface PropsType {
  children: React.ReactNode;
}
const Layout = ({ children }: PropsType) => {
  return (
    <Root>
      <Header />
      <Main>{children}</Main>
    </Root>
  );
};

export default Layout;
