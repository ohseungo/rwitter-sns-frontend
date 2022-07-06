import LoginPage from "pages/auth/Login";
import TestPage from "pages/auth/Test";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ManagedRouterProps } from "utils/types";

const ManagedRouterComponent = ({
  isLoggedIn,
  setLoggedIn,
  userInfo,
}: ManagedRouterProps) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <div>Hello Logged in</div>
        ) : (
          <>
            <Route
              path="/"
              element={<LoginPage setLoggedIn={setLoggedIn} />}
            ></Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default ManagedRouterComponent;
