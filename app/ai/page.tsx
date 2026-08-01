"use client";

import { useState } from "react";

export default function AIPage() {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<
    {
      role: string;
      text: string;
    }[]
  >([
    {
      role: "ai",
      text: "Hi 👋 I am Lively AI. Ask me about money, meals, or planning.",
    },
  ]);

  const [loading, setLoading] = useState(false);


 async function sendMessage() {

  if (loading) return;

    if (!input.trim()) return;


    const userMessage = input;


    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);


    setInput("");
    setLoading(true);


    try {

      const response = await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userMessage,
        }),

      });


      const data = await response.json();


      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply,
        },
      ]);


    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, something went wrong.",
        },
      ]);

    }


    setLoading(false);

  }



  return (

    <main className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-3xl font-bold">
        Lively AI 🤖
      </h1>


      <p className="mt-2 text-slate-400">
        Your personal AI life assistant.
      </p>



      <div className="mt-8 max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6">


        <div className="h-96 space-y-4 overflow-y-auto">


          {messages.map((message, index) => (

            <div
              key={index}
              className={
                message.role === "user"
                  ? "ml-auto max-w-md rounded-xl bg-indigo-500 p-3"
                  : "max-w-md rounded-xl bg-slate-800 p-3"
              }
            >
              {message.text}
            </div>

          ))}


          {loading && (

            <div className="rounded-xl bg-slate-800 p-3">
              Thinking...
            </div>

          )}


        </div>



        <div className="mt-5 flex gap-3">


          <input

            value={input}

            onChange={(e)=>setInput(e.target.value)}

            onKeyDown={(e)=>{
              if(e.key === "Enter"){
                sendMessage();
              }
            }}

            placeholder="Ask Lively AI..."

            className="flex-1 rounded-lg border border-slate-700 bg-slate-800 p-3"

          />



          <button

            onClick={sendMessage}

            className="rounded-lg bg-indigo-500 px-5"

          >
            Send
          </button>


        </div>


      </div>


    </main>

  );
}