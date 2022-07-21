import LoginPage from "pages/auth/Login";
import HomePage from "pages/home/Home";
import ProfilePage from "pages/profile/Profile";
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
      {isLoggedIn && <Header setLoggedIn={setLoggedIn} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </>
        ) : (
          <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
        )}
      </Routes>
    </Router>
  );
};

export default ManagedRouterComponent;
