"use client";
import { useState } from "react";

export default function Home() {
  const [displayText, setDisplaytext] = useState();
  return (
    <main>
      <h1>Hello World</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input id="email" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" />
      </div>
      <button>Click here</button>
      <div>
        {displayText && <span>Click here!</span>}
        <button onClick={() => setDisplaytext(!displayText)}>Privacy*</button>
      </div>
    </main>
  );
}
