import { ArrowRight, GithubIcon } from "lucide-react";
import { Button } from "../ui/button";

import Header from "../global/header";
import { aboutContents } from "@/constants";

export const AboutMe = () => {
  const contents = aboutContents.split("\n");

  return (
    <div className="flex flex-col gap-4">
      <Header title="About me" />
      <div className="flex flex-col gap-4">
        {contents.map((item, i) => (
          <p className="text-base text-zinc-300" key={i}>
            {item}
          </p>
        ))}
      </div>
      <div className="flex gap-4">
        <Button className="group">
          <GithubIcon className="size-4" />
          View my Github{" "}
          <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
        </Button>
        <Button variant={"secondary"} className="group">
          Contact me
          <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
        </Button>
      </div>
    </div>
  );
};
