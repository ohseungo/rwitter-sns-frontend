import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
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
