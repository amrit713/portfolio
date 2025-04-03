import Image from "next/image";
import { IconType } from "react-icons";
import { Button } from "../ui/button";
import { ArrowRight, Link as Chain } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  coverImage: string;
  count: number;
  label: string;
  websiteUrl: string;
  technologies: {
    title: string;
    icon: IconType;
  }[];
}

export const Project = ({
  title,
  coverImage,
  label,
  technologies,
  websiteUrl,
  count,
}: ProjectProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h3 className="text-xl font-semibold">
        0{count + 1}. {title}
      </h3>
      <p className="text-base text-zinc-400">{label}</p>

      <div className="relative max-w-full h-[30rem] md:h-[48rem] bg-red-70 rounded-xl overflow-hidden cursor-hover border-3 border-primary/50 hover:opacity-80 transition  ">
        <Image src={coverImage} alt="img" fill className="object-cover" />
      </div>

      <div className="flex gap-6 ">
        {technologies.map(({ icon: Icon, title }, idx) => (
          <div
            className="flex gap-2 items-center border rounded bg-zinc-700/50 hover:bg-zinc-700/70 p-2 hover:border-zinc-600/70 border-zinc-600/50 cursor-pointer transition"
            key={idx}
          >
            <Icon className="size-4" />
            <p className="">{title}</p>
          </div>
        ))}
      </div>
      <div className="max-w-xs">
        <Button className="group" size={"lg"} asChild>
          <Link href={websiteUrl}>
            <Chain className="size-4 " />
            Visit website
            <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
