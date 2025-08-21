"use client";

import { projects } from "@/data";
import ProjectPinCard from "@/components/project-pin-card/ProjectPinCard";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            className="sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem] h-[32rem] w-[80vw] flex items-center justify-center "
            key={project.id}
          >
            <ProjectPinCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
