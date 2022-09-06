import ManagedModal from "components/common/Modal";
import { useState } from "react";

const SignupDialog = () => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ManagedModal isOpen={isOpen} onClose={handleClose}>
      <div>Hello</div>
    </ManagedModal>
  );
};

export default SignupDialog;
