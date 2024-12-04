import { useState } from "react";
import "./../index.css";
export default function Home() {
  const [message, setMessage] = useState();
  return (
    <div className="background h-screen flex items-center flex-col p-10 bg-slate-300">
      <img src="./logo.jpg" alt="bharat forge" className="w-80 rounded-xl" />

      <input
        type="text"
        placeholder="enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="m-5 text-lg h-12 p-2 w-80 focus:outline-slate-200 rounded-lg bg-gray-200 text-slate-800"
      />

      <button className="w-20 p-2 mx-2 bg-emerald-300 rounded-2xl text-lg">
        send
      </button>
    </div>
  );
}
