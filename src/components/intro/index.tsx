import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

export const Intro = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-4xl">Hey, I'm Amrit Ghimire</p>
        <p className="text-base text-zinc-300">
          I’m a full-stack developer and entrepreneur. I specialize in web
          development, app development, and digital solutions.
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <Button className="flex gap-2 items-center">
          Contact me <PhoneCall className="size-4 " />
        </Button>
        <Button variant={"secondary"} className="group">
          More about me
          <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
        </Button>
      </div>
    </div>
  );
};
