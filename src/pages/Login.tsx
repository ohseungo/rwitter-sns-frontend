import useInput from "utils/hooks/useInput";
import {
  Footer,
  InputField,
  LogoText,
  Main,
  Root,
  SubmitButton,
} from "./Login.styled";

const LoginPage = () => {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  const handleSubmit = () => {};
  return (
    <Root>
      <Main>
        <LogoText variant="h1">무슨 일이 일어나고 있나요?</LogoText>
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
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
        >
          로그인하기
        </SubmitButton>
      </Main>
      <Footer>© 2022 by RickSW.dev</Footer>
    </Root>
  );
};

export default LoginPage;
