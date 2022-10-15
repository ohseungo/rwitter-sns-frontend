import { Form } from "components/base/Form";
import ManagedModal from "components/common/Modal";
import { InputField } from "./SignupDialog.styled";
import useInput from "utils/hooks/useInput";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const SignupDialog = ({ open, onClose }: { open: boolean; onClose: any }) => {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const { value: passwordCheck, onChange: onChangePasswordCheck } =
    useInput("");

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    if (password !== passwordCheck) {
      //error
      return;
    }

    onClose();
  };
  return (
    <ManagedModal isOpen={open}>
      <DialogTitle>회원가입</DialogTitle>
      <DialogContent>
        {" "}
        <Form onSubmit={handleSubmit}>
          <InputField
            id="signup-email-input"
            placeholder="이메일"
            type="email"
            value={email}
            onChange={onChangeEmail}
            fullWidth
            margin="dense"
            autoFocus
          />
          <InputField
            id="signup-password-input"
            placeholder="비밀번호"
            type="password"
            variant="outlined"
            value={password}
            onChange={onChangePassword}
            fullWidth
            margin="dense"
          />
          <InputField
            id="signup-password-check-input"
            placeholder="비밀번호 확인"
            type="password"
            variant="outlined"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            fullWidth
            margin="dense"
          />
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>회원가입</Button>
        <Button onClick={handleClose}>닫기</Button>
      </DialogActions>
    </ManagedModal>
  );
};

/* <ManagedModal isOpen={isOpen}>
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
</ManagedModal> */

export default SignupDialog;
