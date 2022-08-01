import { Root } from "./ProfileEditForm.styled";
import React, { useCallback } from "react";
import { Form } from "components/common/StyledComponent";
import { TextField } from "@mui/material";

const ProfileEditForm = () => {
  const handleSubmit = useCallback((event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);
  return (
    <Root>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="닉네임"
          variant="standard"
          defaultValue="현재 닉네임"
        />
      </Form>
    </Root>
  );
};

export default ProfileEditForm;
