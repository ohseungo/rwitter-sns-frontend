import Toolbar from "@mui/material/Toolbar";
import { HeaderRoot, LogoLink, LogoText } from "./Header.styled";
import ProfileButton from "./ProfileButton";
import { Link } from "react-router-dom";

const Header = ({ setLoggedIn }: { setLoggedIn: Function }) => {
  return (
    <HeaderRoot color="transparent" position="sticky" elevation={0}>
      <Toolbar>
        <LogoLink to="/">
          <LogoText variant="h6">Rwitter</LogoText>
        </LogoLink>
        <Link to="/profile">
          <ProfileButton />
        </Link>
      </Toolbar>
    </HeaderRoot>
  );
};

export default Header;
