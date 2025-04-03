import React from "react";

interface HeaderProps {
  title: string;
  label?: string;
}

function Header({ title, label }: HeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {label && <p className="text-base text-zinc-300">{label}</p>}
    </div>
  );
}

export default Header;
