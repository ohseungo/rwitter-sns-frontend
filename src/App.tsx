import React, { useState } from "react";
import Layout from "containers/Layout";
import ManagedRouterComponent from "components/common/Router";
function App() {
  // return (
  //   <div>
  //     <Layout>
  //       <h1>Hello world</h1>
  //     </Layout>
  //   </div>
  // );
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<object>({});
  return (
    <div>
      <ManagedRouterComponent isLoggedIn={isLoggedIn} userInfo={userInfo} />
    </div>
  );
}

export default App;
