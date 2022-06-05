import { Container } from "./LayoutContainer.styled";
import React from "react";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export default LayoutContainer;
