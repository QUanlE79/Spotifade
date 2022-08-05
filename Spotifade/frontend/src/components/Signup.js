import React, { useContext, useState } from "react";
import AppContext from "./AppContext";
import createBrowserHistory from 'history/createBrowserHistory';
import axios from "axios";
export default function Signup() {
  const {dispatch} = useContext(AppContext);
  const [userInput, setUserInput] = useState({name: "", email: "", Password: "",Password1: ""});
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
        url: "/api/v1/auth/register",
        data: userInput,
      };
      const response = await axios(option);
      const {token,userName} = response.data.data;
      localStorage.setItem("token", token);
      dispatch({type: "CURRENT_USER", payload: {userName}});
      history.push("/Login");
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
                <h3>Sign Up</h3>
                <div className="card">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Username..."
                    required
                    value={userInput.name}
                    onChange={onChangeHandle}
                  />
                </div>
                <div className="card">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email..."
                    required
                    value={userInput.email}
                    onChange={onChangeHandle}
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
                    onChange={onChangeHandle}
                  />
                </div>
                <div className="card">
                  <label for="Password1">Confirm Your Password</label>
                  <input
                    type="password"
                    name="Password1"
                    placeholder="Re-enter Your Password..."
                    required
                    value={userInput.Password1}
                    onChange={onChangeHandle}
                  />
                </div>
                {errorMessage &&
                  (Array.isArray(errorMessage) ? (errorMessage.map((err) => (
                    <div className="error-message">Error: {err}</div>
                  ))) : (
                    <div className="error-message">Error : {errorMessage}</div>
                  ))
                }
                <input type="submit" value="Sign up" class="submit" />
                <p>
                  Already have an account? <a href="/Login">Login</a>
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
