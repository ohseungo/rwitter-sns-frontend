import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const HeaderRoot = styled(AppBar)`
  a {
    color: #000000;
    text-decoration: none;
  }
`;

export const LogoLink = styled(Link)`
  flex: 1;
`;

export const LogoText = styled(Typography)`
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
`;
