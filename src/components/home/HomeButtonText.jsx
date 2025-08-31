import React from "react";
import { Link } from "react-router-dom";

const HomeButtonText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <div className="border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] lg:h-44 flex items-center px-14 border-white rounded-full uppercase">
        <Link className="text-[6vw] mt-6 " to={"/projects"}>
          Projects
        </Link>
      </div>
      <div className="border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] lg:h-44 flex items-center px-14 border-white rounded-full uppercase">
        <Link className="text-[6vw] mt-6 " to={"/agence"}>
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeButtonText;
