import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 3rem 0;
  }
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
  background-color: grey;
`;

export const LogoText = styled(Typography)``;
export const InputField = styled(TextField)`
  fieldset {
  }
`;
