import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3300/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
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
      <h1>register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
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
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Pass : {pass}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
