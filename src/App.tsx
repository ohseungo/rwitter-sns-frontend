import React, { useState } from "react";
import ManagedRouterComponent from "components/common/Router";
import LayoutContainer from "components/common/LayoutContainer";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<object>({});
  return (
    <LayoutContainer>
      <ManagedRouterComponent isLoggedIn={isLoggedIn} userInfo={userInfo} />
    </LayoutContainer>
  );
}

export default App;
