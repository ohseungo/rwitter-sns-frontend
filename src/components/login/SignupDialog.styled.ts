import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Root = styled(Box)`
  padding: 1.5rem 5rem;
  width: 70vw;
  max-width: 480px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DialogTitle = styled(Typography)``;

export const InputField = styled(TextField)`
  fieldset {
  }
`;
