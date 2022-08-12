import UserList from "components/profile/UserList";
import ProfileEditForm from "components/profile/ProfileEditForm";
import { ProfileText, Root } from "./Profile.styled";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const ProfilePage = () => {
  const dummyUserList = ["친구", "친구아님"];
  return (
    <Root>
      <ProfileEditForm />
      <ProfileText>팔로잉</ProfileText>
      <UserList userList={dummyUserList} />
    </Root>
  );
};

export default ProfilePage;
