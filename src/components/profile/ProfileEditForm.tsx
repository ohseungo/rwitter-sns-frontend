import { Root } from "./ProfileEditForm.styled";
import React, { useCallback } from "react";

const ProfileEditForm = () => {
  const handleSubmit = useCallback((event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);
  return (
    <>
      <Root onSubmit={handleSubmit}>Hello Edit Form</Root>
    </>
  );
};

export default ProfileEditForm;
