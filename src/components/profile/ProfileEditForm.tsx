import { Root } from "./ProfileEditForm.styled";
import React, { useCallback } from "react";
import { Form } from "components/common/StyledComponent";

const ProfileEditForm = () => {
  const handleSubmit = useCallback((event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);
  return (
    <Root>
      <Form onSubmit={handleSubmit}>
        <span>Hello Edit Form</span>
      </Form>
    </Root>
  );
};

export default ProfileEditForm;
