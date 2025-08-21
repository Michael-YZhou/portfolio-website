import React from "react";
import Image from "next/image";
import { Navigation } from "lucide-react";
import { PinContainer } from "../ui/PinContainer";
import { Project } from "@/types";

const ProjectPinCard = ({ project }: { project: Project }) => {
  return (
    <PinContainer
      title="/ui.aceternity.com"
      href="https://twitter.com/mannupaaji"
    >
      <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
        <div
          className="relative w-full h-full overflow-hidden lg:rounded-3xl"
          style={{ backgroundColor: "#13162D" }}
        >
          <Image src="/bg.png" alt="bgimg" fill />
        </div>

        <Image
          src={project.img}
          alt="cover"
          className="z-10 absolute bottom-0"
          fill
        />
      </div>

      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
        {project.title}
      </h1>

      <p
        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
        style={{
          color: "#BEC1DD",
          margin: "1vh 0",
        }}
      >
        {project.des}
      </p>

      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
          {project.iconLists.map((icon, index) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <Image src={icon} alt="icon5" className="p-2" fill />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
            Check Live Site
          </p>
          <Navigation className="ms-3" color="#CBACF9" />
        </div>
      </div>
    </PinContainer>
  );
};

export default ProjectPinCard;
