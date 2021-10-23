import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router";

const DashBoard = () => {
  const history = useHistory();
  const [quote, setQoute] = useState("");
  const [tempQuote, setTempQuote] = useState("");

  async function updateQuote(e) {
    e.preventDefault();
    const req = await fetch("http://localhost:3300/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        quote: tempQuote,
      }),
    });

    const data = await req.json();
    if (data.status === "ok") {
      setQoute(tempQuote);
      setTempQuote("");
    } else {
      alert(data.error);
    }
  }

  async function populateQuote() {
    const req = await fetch("http://localhost:3300/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    console.log("DATA==>", data);
    if (data.status === "ok") {
      setQoute(data.qoute);
      console.log(quote);
    } else {
      alert(data.error);
    }
  }

  //To verify if user is loggedin

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        history.replace("/login");
      } else {
        populateQuote();
      }
    }
  }, []);

  return (
    <div>
      <h1>Your Quote : {quote || "No qoute Found"}</h1>
      <form onSubmit={updateQuote}>
        <input
          type="text"
          placeholder="quotes"
          value={tempQuote}
          onChange={(e) => setTempQuote(e.target.value)}
        />
        <input type="submit" value="Updqate Quote" />
      </form>
    </div>
  );
};

export default DashBoard;
