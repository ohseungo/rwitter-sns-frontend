import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/system/Box";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

import { Root, MenuRoot, FixedBox } from "./Header.styled";

const Header = () => {
  return (
    <Root>
      <MenuRoot>
        <FixedBox>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Hello</MenuItem>
          </MenuList>
        </FixedBox>
      </MenuRoot>
    </Root>
  );
};

export default Header;
