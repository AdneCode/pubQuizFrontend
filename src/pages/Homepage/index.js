import { useState } from "react";

export const Homepage = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const addPlayer = { code, name };
    //Connect to socket.io
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></input>
        <br></br>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
    </div>
  );
};
