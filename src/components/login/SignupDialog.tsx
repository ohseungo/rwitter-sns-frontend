import { Form } from "components/base/Form";
import ManagedModal from "components/common/Modal";
import { useState } from "react";
import { Root, DialogTitle, InputField } from "./SignupDialog.styled";
import useInput from "utils/hooks/useInput";

const SignupDialog = () => {
  const [isOpen, setOpen] = useState(true);
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {};
  return (
    <ManagedModal isOpen={isOpen}>
      <Root>
        <DialogTitle variant="h5">회원가입</DialogTitle>
        <Form
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "1rem" }}
        >
          <InputField
            id="email-input"
            placeholder="이메일"
            type="email"
            value={email}
            onChange={onChangeEmail}
            fullWidth
            margin="dense"
            autoFocus
          />
          <InputField
            id="password-input"
            placeholder="비밀번호"
            type="password"
            variant="outlined"
            value={password}
            onChange={onChangePassword}
            fullWidth
            margin="dense"
          />
        </Form>
      </Root>
    </ManagedModal>
  );
};

export default SignupDialog;
