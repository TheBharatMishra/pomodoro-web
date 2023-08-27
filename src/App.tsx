import { useState } from "react";

function App() {
  const [sesstionTime, setSession] = useState(0);
  const [breakTime, setBreak] = useState(0);

  return (
    <main>
      <div className="bg-purple-600">
        <button
          onClick={() => setSession(sesstionTime + 1)}
          className="bg-pink-400 rounded p-2"
        >
          +
        </button>
        <div>Session Time: {sesstionTime}</div>
        <button
          onClick={() => setSession(sesstionTime - 1)}
          className="bg-pink-400 rounded p-2"
        >
          -
        </button>
      </div>

      <div></div>

      <div className="bg-purple-400">
        <button
          onClick={() => setBreak(breakTime + 1)}
          className="bg-pink-400 rounded p-2"
        >
          +
        </button>
        <div>Break Time: {breakTime}</div>
        <button
          onClick={() => setBreak(breakTime - 1)}
          className="bg-pink-400 rounded p-2"
        >
          -
        </button>
      </div>
    </main>
  );
}

export default App;
