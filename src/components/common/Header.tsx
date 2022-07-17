import { HeaderRoot, LogoText } from "./Header.styled";

const Header = () => {
  return (
    <HeaderRoot position="sticky" elevation={0}>
      <LogoText variant="h6">Rwitter</LogoText>
    </HeaderRoot>
  );
};

export default Header;
