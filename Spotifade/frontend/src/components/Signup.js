import React from "react";

export default function signup() {
  return (
    <React.Fragment>
      <body>
        <header>
          <div class="left_bx1">
            <div class="content">
              <form method="post">
                <h3>Sign Up</h3>
                <div class="card">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter Your Username..."
                    required
                  />
                </div>
                <div class="card">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter Your Email..."
                    required
                  />
                </div>
                <div class="card">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password..."
                    required
                  />
                </div>
                <div class="card">
                  <label for="re-password">Confirm Your Password</label>
                  <input
                    type="password"
                    name="user_re_password"
                    placeholder="Re-enter Your Password..."
                    required
                  />
                </div>
                <input type="submit" value="Sign up" class="submit" />
                <p>
                  Already have an account? <a href="login.html">Login</a>
                </p>
              </form>
            </div>
          </div>

          <div class="right_bx1">
            <img src="./picture/logoweb.svg" alt="" />
          </div>
        </header>
      </body>
    </React.Fragment>
  );
}
