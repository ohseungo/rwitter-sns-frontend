import { Grid } from "@mui/material";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useInput from "utils/hooks/useInput";
import {
  Footer,
  InputField,
  LogoText,
  Main,
  Root,
  SubLinkContainer,
  SubmitButton,
} from "./Login.styled";

import { Form } from "components/base/Form";

const LoginPage = ({ setLoggedIn }: { setLoggedIn: Function }) => {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      event.preventDefault();
      console.log(email, password);
      setLoggedIn(true);
    },
    [email, password, setLoggedIn]
  );
  return (
    <Root>
      <Main>
        <LogoText variant="h1">무슨 일이 일어나고 있나요?</LogoText>
        <Form onSubmit={handleSubmit}>
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
          <SubLinkContainer container>
            <Grid item xs>
              <Link to="/">비밀번호 찾기</Link>
            </Grid>
            <Grid item>
              <Link to="/">회원가입</Link>
            </Grid>
          </SubLinkContainer>
        </Form>
      </Main>
      <Footer>© 2022 by RickSW.dev</Footer>
    </Root>
  );
};

export default LoginPage;
