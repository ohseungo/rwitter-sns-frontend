import UserList from "components/profile/UserList";
import ProfileEditForm from "components/profile/ProfileEditForm";
import { ProfileText, Root } from "./Profile.styled";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import TabPanel from "components/base/TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfilePage = () => {
  const dummyUserList = ["친구", "친구아님"];

  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Root>
      <ProfileEditForm />
      <ProfileText>팔로잉</ProfileText>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
      </Tabs>
      <TabPanel selectedIndex={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel selectedIndex={value} index={1}>
        Item Two
      </TabPanel>
      <UserList userList={dummyUserList} />
    </Root>
  );
};

export default ProfilePage;
