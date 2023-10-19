"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthCheck({ children }: Props) {
  const session = useSession();

  if (session.status === "unauthenticated") redirect("/api/auth/signin");
  return (
    <>
      {session.status === "authenticated" && children}
      {session.status === "loading" && <p>Loading...</p>}
    </>
  );
}
