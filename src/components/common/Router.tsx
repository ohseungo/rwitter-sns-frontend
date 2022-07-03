import LoginPage from "pages/Login";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ManagedRouterProps } from "utils/types";

const ManagedRouterComponent = ({
  isLoggedIn,
  userInfo,
}: ManagedRouterProps) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <div>Hello Logged in</div>
        ) : (
          <Route path="/" element={<LoginPage />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default ManagedRouterComponent;
