import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="">
      <button className="pt-[2rem] ml-[40px]" onClick={() => navigate(-1)}>
        <span className="text-white font-bold text-[1.2rem]">To go back</span>
      </button>
    </div>
  );
}

export default Navigation;
