import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React, { useCallback, useState } from "react";
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
import SignupDialog from "components/login/SignupDialog";

const LoginPage = ({ setLoggedIn }: { setLoggedIn: Function }) => {
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");

  const [isSignupDialogOpen, setSignupDialogOpen] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      event.preventDefault();
      console.log(email, password);
      setLoggedIn(true);
    },
    [email, password, setLoggedIn]
  );

  const handleSignupDialogOpen = () => {
    setSignupDialogOpen(true);
  };

  const handleSignupDialogClose = () => {
    setSignupDialogOpen(false);
  };
  return (
    <Root>
      <Main>
        <LogoText variant="h1">무슨 일이 일어나고 있나요?</LogoText>
        <Form onSubmit={handleSubmit}>
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
          <SubmitButton type="submit" fullWidth variant="contained">
            로그인하기
          </SubmitButton>
          <SubLinkContainer container>
            <Grid item xs>
              <Button variant="text">비밀번호 찾기</Button>
            </Grid>
            <Grid item>
              <Button variant="text" onClick={handleSignupDialogOpen}>
                회원가입
              </Button>
            </Grid>
          </SubLinkContainer>
        </Form>
      </Main>
      <Footer>© 2022 by RickSW.dev</Footer>
      <SignupDialog
        open={isSignupDialogOpen}
        onClose={handleSignupDialogClose}
      />
    </Root>
  );
};

export default LoginPage;
