import { ArrowRight, Send } from "lucide-react";
import Header from "../global/header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { contacts } from "@/constants";
import Link from "next/link";

export const ContactMe = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <Header
        title="Contact me."
        label="I’m always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message."
      />
      <div className="flex flex-col  gap-4 rounded-lg border border-zinc-600/30 bg-zinc-700/40 px-6 py-8 ">
        <div className="flex gap-4  ">
          <div className="w-1/2 flex flex-col gap-2">
            <Label>Name</Label>
            <Input placeholder="Your Name" />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <Label>Email</Label>
            <Input placeholder="Your Email" />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <Label>Message</Label>
          <Textarea rows={4} placeholder="Your Message" className="w-full " />
        </div>
        <div className="w-full flex justify-end">
          <Button>
            {" "}
            <Send className="size-4" /> Send
          </Button>
        </div>
      </div>

      <p className=""> Or contact me with...</p>

      <div className="flex gap-4">
        {contacts.map((contact, idx) => (
          <Link
            className=" group flex gap-2 items-center border rounded bg-zinc-700/50 hover:bg-zinc-700/70 p-2 hover:border-zinc-600/70 border-zinc-600/50 cursor-pointer transition"
            target="_blank"
            key={idx}
            href={contact.href}
          >
            {contact.icon}
            <p className="">{contact.title}</p>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
          </Link>
        ))}
      </div>
    </div>
  );
};
