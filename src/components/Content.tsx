import { useState } from "react";
import brandVideo from "../assets/logo.gif";
import profile from "../assets/AKDEV SAHA.jpg";
export const Content = () => {
  const [gifPlayed, setGifPlayed] = useState(false);
  const [email, setEmail] = useState("");
  // Simulate direct state update
  setTimeout(() => {
    setGifPlayed(true);
  }, 5000); // Update after 5 seconds

  return (
    <div className="text-white w-full font-sans pt-[64px]">
      <div className="text-5xl w-[80vw] pl-[150px] pt-[30px] leading-tight z-0">
        PIONEERING TECH SOLUTIONS THAT EMPOWER AND{" "}
        <span className="text-indigo-to-pink">REDEFINE</span> POSSIBILITIES.
      </div>

      <div className="text-white w-full font-sans">
        <div className="flex justify-between">
          <div className="w-[60vw] pl-[150px] pt-[30px] leading-[28px] text-[20px] font-light text-slate-400 tracking-[1px]">
            When I'm not elbow-deep in code, you might find me exploring my
            favourite games or reading non-fictions. But my true passion lies in
            building tech that makes a tangible difference in people's lives. I
            am a final year student in CSE,I specialize in Web development and
            Problem solving. From crafting elegant solutions to tackling complex
            challenges, I thrive on transforming ideas into impactful realities.
            Let's chat about your project and how I can help bring your vision
            to life!
          </div>
          <div className=" h-[280px] w-[400px] mr-20 mt-[30px] hover:shadow-md hover:shadow-slate-900 duration-200">
            {!gifPlayed ? (
              <img
                src={brandVideo}
                alt="Example GIF"
                className="w-full h-full"
              />
            ) : (
              <img
                src={profile}
                alt="Static Image"
                className=" w-full h-full"
              />
            )}
          </div>
        </div>
        <div className="pl-[400px] mt-3">
          <div className="w-[150px] text-center py-3  rounded-md bg-purple-700 hover:bg-purple-800 font-medium text-[18px] text-gray-200 mb-[300px] relative  ">
            Get in touch
          </div>
        </div>
        <div className="w-full flex justify-center items-center z-1">
          <div className="w-[80vw] h-[30vh] bg-[#ebeded] absolute rounded-[30px] flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-black text-3xl font-medium pl-12">
                Join the newsletter
              </div>
              <div className="text-zinc-500 pl-12 pt-3 text-[20px] font-normal">
                Get the latest insights and updates of tech straight to your
                inbox.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-4 ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md pl-5 pr-3 w-[300px] text-black text-lg"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md "
                  onClick={}
                >
                  Subscribe
                </button>
              </div>
              <div className="text-zinc-500 pr-12 font-normal text-[20px] pt-3 ">
                Your privacy is important. I never share your email.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
