// App.js
import React, { useState } from "react";
import { URL } from "./constants";

const App = () => {
  // State to store user input from text field
  const [query, setQuery] = useState('');

  // State to store AI response from Gemini API
  const [result, setResult] = useState(undefined);

  // Payload object for API request
  // Uses the current query typed by the user
  const payLoad = {
    "contents": [
      {
        "parts": [
          {
            "text": query
          }
        ]
      }
    ]
  }

  // Function to call Gemini API and get AI response
  const askQuestion = async () => {
    try {
      // Fetch request to Gemini API
      let response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json", // Required for JSON data
          "X-goog-api-key": "AIzaSyBkSGbKywJD1E82QZcMgXhZUh3Zf5XnkyA" // Your API key
        },
        method: "POST",
        body: JSON.stringify(payLoad) // Convert payload to JSON string
      });

      // Parse the response as JSON
      const getResponse = await response.json();

      // Log the response text to console (for debugging)
      console.log(getResponse.candidates[0].content.parts[0].text);

      // Update the result state to display on the UI
      setResult(getResponse.candidates[0].content.parts[0].text);

    } catch (error) {
      // Handle any errors during fetch
      console.error("Error fetching AI response:", error);
    }
  }

  return (
    // Main container using Tailwind CSS grid layout
    <div className="grid grid-cols-5 text-center">

      {/* Left section: History panel (can store previous questions later) */}
      <div className="col-span-1 bg-zinc-800 h-screen text-white pt-5.5">
        Hello In To History
      </div>

      {/* Right section: Main content and input */}
      <div className="col-span-4">

        {/* AI response display */}
        <div className="container h-3/4 flex items-center justify-center text-white">
          <h1 className="text-6xl">{result}</h1>
        </div>

        {/* User input section with text field and button */}
        <div className="bg-zinc-800 p-1.5 pr-5 w-1/2 text-white m-auto rounded-4xl border border-zinc-400 flex">

          {/* Input field for user query */}
          <input
            value={query} // Bind input to query state
            onChange={(e) => setQuery(e.target.value)} // Update state on typing
            type="text"
            placeholder="Ask me anything..."
            className="outline-none w-full h-full p-3 bg-transparent"
          />

          {/* Button to trigger AI question */}
          <button onClick={askQuestion}>Ask</button>
        </div>
      </div>
    </div>
  );
};

export default App;