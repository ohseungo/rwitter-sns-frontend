import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
// import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/system/Box";

export const Root = styled.header`
  flex-grow: 1;
  flex-basis: var(--header-max-width);
  flex-shrink: 0;
`;

export const MenuRoot = styled(Paper)`
  display: flex;
  height: 100%;
  justify-content: flex-end;
`;

export const FixedBox = styled(Box)`
  position: fixed;
`;
