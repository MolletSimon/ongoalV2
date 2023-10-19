import { User } from "next-auth";
import Link from "next/link";
import Button from "../../lib/Button";
import Image from 'next/image'
import { signOut, useSession } from "next-auth/react";
import { UserInfo } from "./UserInfo";
import Shape from "./Shape";

export function Header() {
  return (
    <>
      <div className="flex gap-6 justify-between items-center m-10 mx-20 font-mabry">
        {/* <Shape /> */}
        <Link className="flex items-center cursor-pointer" href="/">
          <Image
            src="/images/logo.png"
            className="rounded-full bg-primary p-4"
            alt="logo"
            width={120}
            height={120}
          />
          <h1 className="uppercase text-6xl ml-8 tracking-widest font-bold text-primary font-mabry">
            OnGoal
            <span className="text-lg items-center italic"> - beta</span>
          </h1>
        </Link>
        <UserInfo />
      </div>
    </>
  );
}
