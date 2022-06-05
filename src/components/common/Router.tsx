import LoginPage from "pages/Login";
import { HashRouter as Router } from "react-router-dom";
import { ManagedRouterProps } from "utils/types";

const ManagedRouterComponent = ({
  isLoggedIn,
  userInfo,
}: ManagedRouterProps) => {
  return (
    <Router>{isLoggedIn ? <div>Hello Logged in</div> : <LoginPage />}</Router>
  );
};

export default ManagedRouterComponent;
