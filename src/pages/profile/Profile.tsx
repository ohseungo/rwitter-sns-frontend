import UserList from "components/profile/UserList";
import ProfileEditForm from "components/profile/ProfileEditForm";
import { Root } from "./Profile.styled";

const ProfilePage = () => {
  return (
    <Root>
      <ProfileEditForm />
      <UserList />
    </Root>
  );
};

export default ProfilePage;
