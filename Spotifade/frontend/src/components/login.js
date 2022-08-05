import React, { useContext, useState } from "react";
import "../css/AuthenStyle.css";
import axios from "axios";
import AppContext from "./AppContext";
// import {useHistory} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
export default function Login() {
  const {dispatch} = useContext(AppContext);
  const [userInput, setUserInput] = useState({email: "", Password: ""});
  const [errorMessage, setErrorMessage] = useState(null);
  const history = createBrowserHistory({forceRefresh:true});
  const onChangeHandle = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value});
  };
  const onSubmitHandle = async (e) => {
    try{
      e.preventDefault();
      const option = {
        method: "post",
        url: "/api/v1/auth/login",
        data: userInput,
      };
      const response = await axios(option);
      const {token,userName} = response.data.data;
      localStorage.setItem("token", token);
      dispatch({type: "CURRENT_USER", payload: {userName}});
      if (userName==="duong" || userName==="phuoc" || userName==="quan" || userName==="bach")
      {
        history.push("/AdminManageSong")
      }
      else{
        history.push("/Homepage");
      }
      
    } catch (error){
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <React.Fragment>
      <body>
        <header>
          <div className="left_bx1">
            <div className="content" onSubmit={onSubmitHandle}>
              <form method="post">
                <h3>Login</h3>
                <div className="card">
                  <label for="name">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your email..."
                    required
                    value={userInput.email}
                    onChange = {onChangeHandle}
                  />
                </div>
                <div className="card">
                  <label for="Password">Password</label>
                  <input
                    type="password"
                    name="Password"
                    placeholder="Enter Your Password..."
                    required
                    value={userInput.Password}
                    onChange = {onChangeHandle}
                  />
                </div>
                {errorMessage && (
                  <div className="error-message">Error: {errorMessage}</div>
                )}
                <button type="submit" className="submit">Login</button>
                <div className="check">
                  <input type="checkbox" name="" id="" />
                  <span>Remember Me.</span>
                </div>
                <p>
                  Don't have an account yet? <a href="/Signup">Sign Up</a>
                </p>
              </form>
            </div>
          </div>

          <div className="right_bx1">
            <img src="./picture/logoweb.svg" alt="" />
          </div>
        </header>
      </body>
    </React.Fragment>
  );
}
