import React from "react";
import profile from "../assets/images/534a9b245f131a57.jpg";
import Messages from "../components/Messages";
const Chat = () => {
  return (
    <div className="w-[80%] h-[80%] bg-slate-200 flex rounded-lg overflow-hidden">
      <div className="w-[30%] bg-blue-600 overflow-auto ">
        <div className="p-3 flex items-center justify-between">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div>
            <span className="text-white font-bold">Jane Doe</span>
          </div>
        </div>
        <hr className="border-black border-1"></hr>

        <div className="mt-4 ml-3 mr-3 flex items-center hover:bg-blue-800 p-2 rounded-lg">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div className="ml-3">
            <p className="font-bold text-white">Hello today</p>
            <p className="text-gray-400 font-normal text-xs">moments ago</p>
          </div>
        </div>
        <div className="mt-4 ml-3 mr-3 flex items-center hover:bg-blue-800 p-2 rounded-lg">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div className="ml-3">
            <p className="font-bold text-white">Hello today</p>
            <p className="text-gray-400 font-normal text-xs">moments ago</p>
          </div>
        </div>
        <div className="mt-4 ml-3 mr-3 flex items-center hover:bg-blue-800 p-2 rounded-lg">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div className="ml-3">
            <p className="font-bold text-white">Hello today</p>
            <p className="text-gray-400 font-normal text-xs">moments ago</p>
          </div>
        </div>
        <div className="mt-4 ml-3 mr-3 flex items-center hover:bg-blue-800 p-2 rounded-lg">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div className="ml-3">
            <p className="font-bold text-white">Hello today</p>
            <p className="text-gray-400 font-normal text-xs">moments ago</p>
          </div>
        </div>
        <div className="mt-4 ml-3 mr-3 flex items-center hover:bg-blue-800 p-2 rounded-lg">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div className="ml-3">
            <p className="font-bold text-white">Hello today</p>
            <p className="text-gray-400 font-normal text-xs">moments ago</p>
          </div>
        </div>
        <div className="mt-4 ml-3 mr-3 flex items-center hover:bg-blue-800 p-2 rounded-lg">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div className="ml-3">
            <p className="font-bold text-white">Hello today</p>
            <p className="text-gray-400 font-normal text-xs">moments ago</p>
          </div>
        </div>
        <div className="mt-4 ml-3 mr-3 flex items-center hover:bg-blue-800 p-2 rounded-lg">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div className="ml-3">
            <p className="font-bold text-white">Hello today</p>
            <p className="text-gray-400 font-normal text-xs">moments ago</p>
          </div>
        </div>
        <div className="mt-4 ml-3 mr-3 flex items-center hover:bg-blue-800 p-2 rounded-lg">
          <img
            src={profile}
            className="w-[50px] h-[50px] rounded-[50%] bg-contain"
          />
          <div className="ml-3">
            <p className="font-bold text-white">Hello today</p>
            <p className="text-gray-400 font-normal text-xs">moments ago</p>
          </div>
        </div>
      </div>
      <div className="w-[70%] bg-blue-100 relative overflow-auto">
        <div className="mt-4 pl-4" />
        <Messages />
      </div>
      <div className="absolute bottom-15 right-0">aa</div>
    </div>
  );
};

export default Chat;
