import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

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
  background-color: white;
`;

export const InputField = styled(TextField)`
  fieldset {
    border-radius: 50px;
  }

  margin-top: 1.5rem;
`;
