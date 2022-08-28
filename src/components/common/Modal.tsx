import Dialog from "@mui/material/Dialog";
import React from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <Dialog open={true}>{children}</Dialog>;
};

export default Modal;
