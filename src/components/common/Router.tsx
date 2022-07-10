import LoginPage from "pages/auth/Login";
import HomePage from "pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ManagedRouterProps } from "utils/types";
import Header from "./Header";

const ManagedRouterComponent = ({
  isLoggedIn,
  setLoggedIn,
  userInfo,
}: ManagedRouterProps) => {
  return (
    <Router>
      <Header />
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
