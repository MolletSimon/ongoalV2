"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  clickable?: boolean;
  action?: () => void;
};

export default function Card({ children, action, clickable }: Props) {
  return (
    <div
      className="hover:scale-110 p-4 border-2 shadow-sm rounded-lg transition-all cursor-pointer bg-gray-50"
      onClick={action}
    >
      {children}
    </div>
  );
}
