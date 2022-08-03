import React from "react";
import "../css/AuthenStyle.css";
export default function login() {
  return (
    <React.Fragment>
      <body>
        <header>
          <div className="left_bx1">
            <div className="content">
              <form method="post">
                <h3>Login</h3>
                <div className="card">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter Your Username..."
                    required
                  />
                </div>
                <div className="card">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password..."
                    required
                  />
                </div>
                <input type="submit" value="Login" className="submit" />
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
