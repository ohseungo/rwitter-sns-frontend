import Dialog from "@mui/material/Dialog";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  handleClose?: () => void;
}
const ManagedModal = ({ isOpen, children, handleClose }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      {children}
    </Dialog>
  );
};

export default ManagedModal;
