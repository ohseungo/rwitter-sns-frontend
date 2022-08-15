import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

export interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  selectedIndex: number;
}

const TabPanel = ({ children, index, selectedIndex }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={selectedIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {selectedIndex === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
