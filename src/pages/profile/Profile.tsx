import UserList from "components/profile/UserList";
import ProfileEditForm from "components/profile/ProfileEditForm";
import { Root } from "./Profile.styled";

const ProfilePage = () => {
  const dummyUserList = ["친구", "친구아님"];
  return (
    <Root>
      <ProfileEditForm />
      <UserList userList={dummyUserList} />
    </Root>
  );
};

export default ProfilePage;
