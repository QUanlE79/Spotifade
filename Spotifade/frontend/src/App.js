import Login from "./components/Login.js";
import Signup from "./components/Signup.js";

import AdminManageSong from "./components/AdminManageSong.js";
import AdminManageUser from "./components/AdminManageUser.js";
import AdminUpload from "./components/AdminUpload.js";
import UserInfo from "./components/UserInfo.js";
import UserPlaylist from "./components/UserPlaylist.js";

import Homepage from "./components/Homepage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppReducer from "./reducers/AppReducer.js";
import { useCallback, useEffect, useReducer } from "react";
import AppContext from "./components/AppContext.js";
import axios from "axios";
function App() {
  const initialState={user:null,songs:[],users:[]};
  const [state,dispatch]= useReducer(AppReducer,initialState);

  const checkCurrentUser=useCallback(async ()=>{
    try {
      const token=localStorage.getItem("token");
      const option={
        method:"get",
        url:"/api/v1/auth/",
        headers:{
          Authorization:`Bearer ${token}`,
        },
      };
      const response=await axios(option);
      if(response.data.data.user){
        const { userName }=response.data.data.user;
        dispatch({type:"CURRENT_USER",payload:{userName} });
      }
    } catch (error) {
      console.log(error)
    }
  },[dispatch]
   );
   useEffect(()=>{
    checkCurrentUser();
   },[checkCurrentUser])
  return (
    <Router>
      <AppContext.Provider value={{state,dispatch}}>
      <div className="container">
        <Switch>
          <Route exact path="/Homepage">
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
          <Route exact path="/Upload">
              <AdminUpload />
            </Route>
          <Route exact path="/AdminManageSong">
            <AdminManageSong />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
