import Login from "./components/Login";
import Signup from "./components/Signup";

import AdminManageSong from "./components/AdminManageSong";
import AdminManageUser from "./components/AdminManageUser";

import UserInfo from "./components/UserInfo";
import UserPlaylist from "./components/UserPlaylist";

import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/UserPlaylist">
            <UserPlaylist />
          </Route>
          <Route exact path="/UserInfomation">
            <UserInfo />
          </Route>
          <Route exact path="/AdminManageUser">
            <AdminManageUser />
          </Route>
          <Route exact path="/AdminManageSong">
            <AdminManageSong />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
