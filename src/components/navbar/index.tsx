"use client";

import Link from "next/link";
import React from "react";

import MaxWidthWrapper from "../global/max-width-wrapper";
import { NAV_ITEMS } from "@/constants";

import { cn } from "@/lib/utils";
import { PhoneCall, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <MaxWidthWrapper>
      <div className="py-6 border-b border-purple-900/30 flex justify-between">
        <Link
          href={"/"}
          className="font-semibold text-xl hover:text-zinc-100 transition"
        >
          AG.
        </Link>

        <ul className="flex gap-6">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={cn(
                "hover:bg-zinc-600/40 rounded-md px-4 py-2 flex items-center text-zinc-300 group",
                pathname === item.href && "bg-zinc-600/40"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
              {item.label === "Contact" && (
                <PhoneCall className="size-4 ml-2 group-hover:rotate-15 duration-300 transition" />
              )}
            </li>
          ))}
        </ul>

        <button className="group py-2 px-3 hover:bg-zinc-600/40 rounded cursor-pointer">
          <Settings className="size-5 group-hover:rotate-90 transition" />
        </button>
      </div>
    </MaxWidthWrapper>
  );
}

export default Navbar;
