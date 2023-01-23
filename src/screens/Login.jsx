import React from 'react'
import React from "react";
import { Input, Button } from "@material-ui/core";

const Login = () => {
  return (
    <>
    <div className=" justify-center items-center w-[50%] h-[50%] bg-slate-200 rounded-lg overflow-auto">
      <div className="flex justify-center items-center mt-10">
        <span className="text-green-600 font-bold text-lg">Sign Up</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="gap-2 flex-wrap">
          <div className="flex justify-center items-center w-[100%]">
            <Input className="w-[500px]" placeholder="First name" />
          </div>
          <div className="flex justify-center items-center w-[100%]">
            <Input className="w-[500px]" placeholder="Last name" />
          </div>
          <div className="flex justify-center items-center w-[100%]">
            <Input className="w-[500px]" placeholder="Email" />
          </div>
          <div className="flex justify-center items-center w-[100%]">
            <Input
              className="w-[500px]"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="flex justify-center items-center mt-10 ">
            <button
              className="rounded-lg bg-green-500 p-3 text-white"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  </>
  )
}

export default Login