import { Typography } from "@mui/material";
import ManagedModal from "components/common/Modal";
import { useState } from "react";
import { Root } from "./SignupDialog.styled";

const SignupDialog = () => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ManagedModal isOpen={isOpen} onClose={handleClose}>
      <Root>
        <Typography variant="h5">Sign Up</Typography>
      </Root>
    </ManagedModal>
  );
};

export default SignupDialog;
