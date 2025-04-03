import React from "react";
import Header from "../global/header";
import { Project } from "./project";
import { projects } from "@/constants";

export function RecentProject() {
  return (
    <div className="flex flex-col gap-8">
      <Header
        title={"Recent Projects."}
        label="Explore some of my recent projects below. For more, visit my GitHub profile."
      />

      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <Project
            key={idx}
            count={idx}
            technologies={project.technologies}
            coverImage={project.coverImage}
            title={project.title}
            websiteUrl={project.websiteUrl}
            label={project.label}
          />
        ))}
      </div>
    </div>
  );
}
