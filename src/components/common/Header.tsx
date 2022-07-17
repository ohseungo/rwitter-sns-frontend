import Toolbar from "@mui/material/Toolbar";
import { HeaderRoot, LogoText } from "./Header.styled";
import ProfileButton from "./ProfileButton";

const Header = () => {
  return (
    <HeaderRoot color="transparent" position="sticky" elevation={0}>
      <Toolbar>
        <LogoText variant="h6">Rwitter</LogoText>
        <ProfileButton />
      </Toolbar>
    </HeaderRoot>
  );
};

export default Header;
