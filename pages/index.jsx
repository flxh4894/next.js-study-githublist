import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <Header />
      <label>
        username :
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} :: Github Search</p>
      <Link href={`/users/${username}`}>
        <a>Search</a>
      </Link>
    </div>
  );
};

export default App;
