"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onclick?: () => void;
  backgroundColor?: "success" | "primary" | "danger";
  color?: "success" | "primary" | "danger" | "white";
};

export default function Button({
  children,
  onclick,
  color,
  backgroundColor,
}: Props) {
  const bg = !!!backgroundColor ? "" : `bg-${backgroundColor}`;
  const textColor = !!!color ? "" : `text-${color}`;
  const font = "font-normal font-lexend";
  const hover = "hover:scale-105 transition-all";

  return (
    <button
      className={`p-4 px-6 border-2 rounded-full ${bg} ${textColor} ${font} ${hover}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
