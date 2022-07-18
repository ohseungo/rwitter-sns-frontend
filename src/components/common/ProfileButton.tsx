import Button from "@mui/material/Button";

const ProfileButton = ({ setLoggedIn }: { setLoggedIn: Function }) => {
  return (
    <Button
      color="inherit"
      onClick={() => {
        setLoggedIn(false);
      }}
    >
      Profile
    </Button>
  );
};

export default ProfileButton;
