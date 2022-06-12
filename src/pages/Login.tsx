import Typography from "@mui/material/Typography";
import useInput from "utils/hooks/useInput";
import { Footer, InputField, Main, Root, SubmitButton } from "./Login.styled";

const LoginPage = () => {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  return (
    <Root>
      <Main>
        <Typography variant="h1">무슨 일이 일어나고 있나요?</Typography>
        <InputField
          id="email-input"
          label="Email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          fullWidth
          margin="dense"
          autoFocus
        />
        <InputField
          id="password-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
          fullWidth
          margin="dense"
        />
        <SubmitButton type="submit" fullWidth variant="contained">
          로그인하기
        </SubmitButton>
      </Main>
      <Footer>Footer here</Footer>
    </Root>
  );
};

export default LoginPage;
