import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function handleUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3300/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        pass,
      }),
    });

    const data = await response.json();
    console.log("Responsii", response);
    console.log(data);
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleUser}>
    
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <input type="submit" value="register" />
        <div>
          <p>Email : {email}</p>
          <p>Pass : {pass}</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
