import React from "react";

const ProjectCard = (props) => {
  return (
    <>
     
        <div className=" lg:w-1/2 h-full group transition-all rounded-none hover:rounded-[70px] relative overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={props.image1}
            alt=""
          />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10">
            <h2 className="uppercase text-6xl font-[font1] border-2 text-white pt-2 px-4 border-white rounded-full">
              Vior le Projet
            </h2>
          </div>
        </div>
        <div className=" lg:w-1/2 h-full group transition-all rounded-none hover:rounded-[70px] relative overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={props.image2}
            alt=""
          />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10">
            <h2 className="uppercase text-6xl font-[font1] border-2 text-white pt-2 px-4 border-white rounded-full">
              Vior le Projet
            </h2>
          </div>
        </div>
    
    </>
  );
};

export default ProjectCard;
