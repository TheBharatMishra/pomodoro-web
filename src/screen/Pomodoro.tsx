import { useState } from "react";

export const Pomodoro = () => {
  const [sesstionTime, setSession] = useState(25);
  const [breakTime, setBreak] = useState(5);
  const [playing, setPlay] = useState(true);
  //   const [timeline, setTimeline] = useState(25);
  //   const [spinning, notSpinning] = useState("");
  //   const timeStart = () => {
  //     setInterval(() => setSession(sesstionTime - 1), 1000);
  //   };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <img className="w-20" src="clock.svg" alt="Be productive!" />
      <h1 className="text-5xl">Pomodoro Clock</h1>
      <section className="flex font-semibold flex-row m-5">
        <div className="border-black border-2 rounded flex flex-col m-5 justify-center items-center text-center">
          <p className="p-2">Session Length</p>
          <div className="flex flex-row justify-evenly items-evenly ">
            <button
              onClick={() => setSession(sesstionTime + 1)}
              className="bg-gray-400 rounded p-2"
            >
              +
            </button>
            <p className="p-2">{sesstionTime}</p>
            <button
              onClick={() => setSession(sesstionTime - 1)}
              className="bg-gray-400 rounded p-2"
            >
              -
            </button>
          </div>
        </div>

        <div className="border-black border-2 rounded flex flex-col p-2 m-5 justify-center items-center text-center">
          <p className="p-2">Break Length</p>
          <div className="flex flex-row items-between ">
            <button
              onClick={() => setBreak(breakTime + 1)}
              className="bg-gray-400 rounded p-2"
            >
              +
            </button>
            <p className="p-2">{breakTime}</p>
            <button
              onClick={() => setBreak(breakTime - 1)}
              className="bg-gray-400 rounded p-2"
            >
              -
            </button>
          </div>
        </div>
      </section>
      <section className="m-4 p-4 border-4 border-black text-center rounded-xl">
        <h3 className="text-2xl">Session</h3>
        <h1 className="text-8xl">{sesstionTime}:00</h1>
      </section>
      <section className="w-10 flex flex-row items-center justify-center mb-5">
        {playing ? (
          <img
            onClick={() => {
              setPlay(false);
              //   useEffect(timeStart);
            }}
            src="play.svg"
            alt="Play"
          />
        ) : (
          <img onClick={() => setPlay(true)} src="pause.svg" alt="Pause" />
        )}
        <img
          //   className={spinning}
          //   onClick={() => notSpinning("rotate-90")}
          src="reset.svg"
          alt="Reset"
        />
      </section>
      <section>
        <h3>
          Made by
          <a
            className="text-orange-500 mx-2"
            href="https://github.com/TheBharatMishra"
          >
            Bharat Mishra
          </a>
        </h3>
      </section>
    </main>
  );
};
