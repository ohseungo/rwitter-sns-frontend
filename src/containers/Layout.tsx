import React from "react";

interface PropsType {
  children: React.ReactNode;
}
const Layout = ({ children }: PropsType) => {
  return (
    <div>
      <header>헤더</header>
      {children}
    </div>
  );
};

export default Layout;
