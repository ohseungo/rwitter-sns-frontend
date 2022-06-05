import TextField from "@mui/material/TextField";
import useInput from "utils/hooks/useInput";
import { Footer, Main, Root } from "./Login.styled";

const LoginPage = () => {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  return (
    <Root>
      <Main>
        <div>무슨 일이 일어나고 있나요?</div>
        <TextField
          id="email-input"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
          fullWidth
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
          fullWidth
        />
      </Main>
      <Footer>Footer here</Footer>
    </Root>
  );
};

export default LoginPage;
