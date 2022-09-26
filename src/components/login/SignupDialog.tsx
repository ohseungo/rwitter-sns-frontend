import ManagedModal from "components/common/Modal";
import { useState } from "react";
import { Root, DialogTitle } from "./SignupDialog.styled";

const SignupDialog = () => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ManagedModal isOpen={isOpen} onClose={handleClose}>
      <Root>
        <DialogTitle variant="h5">회원가입</DialogTitle>
      </Root>
    </ManagedModal>
  );
};

export default SignupDialog;
