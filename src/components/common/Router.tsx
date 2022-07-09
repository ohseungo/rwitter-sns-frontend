import LoginPage from "pages/auth/Login";
import HomePage from "pages/Home";
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
          <Route path="/" element={<HomePage />} />
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
