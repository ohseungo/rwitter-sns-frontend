import Box from "@mui/material/Box";
import React from "react";

export const Form = ({
  onSubmit,
  children,
  style,
}: {
  onSubmit: any;
  children: React.ReactNode;
  style?: any;
}) => (
  <Box component="form" onSubmit={onSubmit} style={style}>
    {children}
  </Box>
);
