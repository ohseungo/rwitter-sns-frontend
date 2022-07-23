import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { HeaderRoot, LogoLink } from "./Header.styled";
import ProfileButton from "./ProfileButton";
import { Link } from "react-router-dom";

const Header = ({ setLoggedIn }: { setLoggedIn: Function }) => {
  return (
    <HeaderRoot color="transparent" position="sticky" elevation={0}>
      <Toolbar>
        <LogoLink to="/">
          <Typography variant="h6">Rwitter</Typography>
        </LogoLink>
        <Link to="/profile">
          <ProfileButton />
        </Link>
      </Toolbar>
    </HeaderRoot>
  );
};

export default Header;
