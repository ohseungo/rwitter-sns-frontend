import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import { Grid } from "@mui/material";

export const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.section`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.section`
  height: 10vh;
  text-align: center;
  background-color: grey;
`;

export const LogoText = styled(Typography)`
  font-size: 3rem;
  font-weight: 700;
  margin: 3rem 0;
`;

export const LoginForm = styled(Box)``;

export const InputField = styled(TextField)`
  fieldset {
  }
`;
export const SubmitButton = styled(Button)`
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1rem;
  height: 3rem;

  border-radius: 1rem;
`;

export const SubLinkContainer = styled(Grid)`
  padding: 1rem 0;
`;
