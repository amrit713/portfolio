import { technologies } from "@/constants";
import Header from "../global/header";

export const Technology = () => {
  return (
    <div className="flex flex-col gap-6">
      <Header
        title="Technologies I use."
        label="Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:"
      />

      <div className="flex gap-4 flex-wrap">
        {technologies.map((tech, idx) => (
          <div
            className="flex gap-2 items-center border rounded bg-zinc-700/50 hover:bg-zinc-700/70 p-2 hover:border-zinc-600/70 border-zinc-600/50 cursor-pointer transition"
            key={idx}
          >
            {tech.icon}
            <p className="">{tech.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
