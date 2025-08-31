import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "10px",
      stagger: {
        amount: .5,
      },
      scrollTrigger: {
        trigger: ".lol",
        // markers:true,
        start: "top 100%",
        end: "top -300%",
        scrub: true,
      },
    });
  });

  return (
    <div className="lg:p-4 p-2 ">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
          Projets
        </h2>
      </div>
      <div className="lg:mt-20 lol">
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="hero w-full lg:h-[700px]  mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

