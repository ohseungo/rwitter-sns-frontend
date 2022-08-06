import FollowList from "components/profile/follow/FollowList";
import ProfileEditForm from "components/profile/ProfileEditForm";
import { Root } from "./Profile.styled";

const ProfilePage = () => {
  return (
    <Root>
      <div>
        Hello Profile
        <ProfileEditForm />
        <FollowList />
      </div>
    </Root>
  );
};

export default ProfilePage;
