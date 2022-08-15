import Box from "@mui/material/Box";
import React from "react";

export const Form = ({
  onSubmit,
  children,
}: {
  onSubmit: any;
  children: React.ReactNode;
}) => (
  <Box component="form" onSubmit={onSubmit}>
    {children}
  </Box>
);
