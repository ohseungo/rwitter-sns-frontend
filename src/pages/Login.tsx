import React from "react";
import useInput from "utils/hooks/useInput";
import {
  Footer,
  InputField,
  LoginForm,
  LogoText,
  Main,
  Root,
  SubmitButton,
} from "./Login.styled";

const LoginPage = () => {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <Root>
      <Main>
        <LogoText variant="h1">무슨 일이 일어나고 있나요?</LogoText>
        <LoginForm component="form" onSubmit={handleSubmit}>
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
        </LoginForm>
      </Main>
      <Footer>© 2022 by RickSW.dev</Footer>
    </Root>
  );
};

export default LoginPage;
