import React from "react";

const App = () => {
  return (
    // user view
    <div className="grid grid-cols-5 text-center">
      {/* left history section */}
      <div className="col-span-1 bg-zinc-800 h-screen text-white pt-5.5">
        {" "}
        Hello In To History
      </div>
      {/* right body */}
      <div className="col-span-4">
        {/* content section */}
        <div className=" container h-3/4 flex items-center justify-center text-white">
          <h1 className="text-6xl">Hello.. Welcome</h1>
        </div>
        {/* user input section */}
        <div className="bg-zinc-800 p-1.5 pr-5 w-1/2 text-white m-auto rounded-4xl border border-zinc-400 flex">
          {/* to type  */}
          <input
            type="text"
            placeholder="Ask me anything..."
            className="outline-none w-full h-full p-3 bg-transparent"
          />
          {/* to click button */}
          <button>Ask</button>
        </div>
      </div>
    </div>
  );
};

export default App;
