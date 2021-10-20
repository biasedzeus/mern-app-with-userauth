import './App.css';
import React, { useState } from 'react';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  async function onSubmit (event) {
    event.preventDefault();
    console.log("Name :",name)
    console.log("Email :",email)
    console.log("PAssword:",pass)

  }


  return (
    <div className="container">
      <form >
        <input type="text"  value={name} onChange = { (e) => setName(e.target.value)}/>
        <input type="email" value={email} onChange = { (e) => setEmail(e.target.value)} />
        <input type="password" value={pass} onChange = { (e) => setPass(e.target.value)}/>
        <button class="submit-button" onClick={onSubmit}>Submit</button>
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
