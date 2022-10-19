import React, { useState } from "react";
import ManagedRouterComponent from "components/common/Router";
import LayoutContainer from "components/common/LayoutContainer";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import THEME from "config/Theme";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "store/reducers";

const store = configureStore({ reducer: rootReducer });

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<object>({});

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
