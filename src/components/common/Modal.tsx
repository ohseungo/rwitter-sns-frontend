import Dialog from "@mui/material/Dialog";
import React from "react";

const Modal = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => {
  return <Dialog open={isOpen}>{children}</Dialog>;
};

export default Modal;
