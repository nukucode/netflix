import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-center text-9xl font-black mb-2">
          404 error
        </h1>
        <h1 className="text-white text-center text-5xl font-bold mb-10">
          Page not found
        </h1>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="flex justify-center items-center w-11/12 bg-white p-2 rounded-sm mt-[15px]"
        >
          <HomeIcon className="h-5 text-black" />
          <span className="ml-1 text-black">Back to Home</span>
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
