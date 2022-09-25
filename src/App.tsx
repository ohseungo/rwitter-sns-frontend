import React, { useState } from "react";
import ManagedRouterComponent from "components/common/Router";
import LayoutContainer from "components/common/LayoutContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<object>({});

  const THEME = createTheme({
    typography: {
      fontFamily: `sans-serif`,
    },
  });

  return (
    <ThemeProvider theme={THEME}>
      <LayoutContainer>
        <ManagedRouterComponent
          isLoggedIn={isLoggedIn}
          setLoggedIn={setLoggedIn}
          userInfo={userInfo}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
