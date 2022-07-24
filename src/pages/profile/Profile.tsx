import ProfileEditForm from "components/profile/ProfileEditForm";
import { Root } from "./Profile.styled";

const ProfilePage = () => {
  return (
    <Root>
      <div>
        Hello Profile
        <ProfileEditForm />
      </div>
    </Root>
  );
};

export default ProfilePage;
