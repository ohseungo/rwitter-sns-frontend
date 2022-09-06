import Dialog from "@mui/material/Dialog";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}
const ManagedModal = ({ isOpen, children, onClose }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {children}
    </Dialog>
  );
};

export default ManagedModal;
