import { HashRouter as Router } from "react-router-dom";
import { ManagedRouterProps } from "utils/types";

const ManagedRouterComponent = ({
  isLoggedIn,
  userInfo,
}: ManagedRouterProps) => {
  return (
    <Router>
      {isLoggedIn ? <div>Hello Logged in</div> : <div>you need to log in</div>}
    </Router>
  );
};

export default ManagedRouterComponent;
