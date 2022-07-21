import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { HeaderRoot, LogoText } from "./Header.styled";
import ProfileButton from "./ProfileButton";

const Header = ({ setLoggedIn }: { setLoggedIn: Function }) => {
  return (
    <HeaderRoot color="transparent" position="sticky" elevation={0}>
      <Toolbar>
        <LogoText variant="h6">Rwitter</LogoText>
        <Link to="/profile">
          <ProfileButton />
        </Link>
      </Toolbar>
    </HeaderRoot>
  );
};

export default Header;
