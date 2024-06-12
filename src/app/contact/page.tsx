"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [wait, setWait] = useState(false);

  const Submit = async (e: any) => {
    e.preventDefault();
    try {
      const payload = { email, message };
      const data = await axios.post("/api/send", payload);
      toast("Message sent successfully !!!");
      setEmail(''); setMessage('');
    } catch (error) {
      toast("Error sending message...");
      console.log(error);
      
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-36 flex-col">
        <h1 className="text-white text-7xl p-6 font-bold">Contact Us</h1>
        <Toaster />
        <form
          onSubmit={Submit}
          className="z-20 flex justify-center items-center flex-col gap-5 w-full"
        >
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
          required
            readOnly={wait}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            className="bg-gray-900 rounded-3xl h-12 pl-4 w-3/5 md:w-2/5 box-border "
          />
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            readOnly={wait}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
            name="message"
            id="message"
            placeholder="Message"
            value={message}
            className="bg-gray-900 rounded-3xl box-border p-4 h-64 w-3/5 md:w-2/5"
          />
          <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Submit</span>
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Page;
