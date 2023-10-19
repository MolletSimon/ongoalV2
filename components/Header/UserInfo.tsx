"use client";

import { signOut, useSession } from "next-auth/react";
import Button from "../../lib/Button";
import Image from 'next/image'

export function UserInfo() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <>
      {user && (
        <div className="flex items-center gap-4 rounded-full px-8 border-primary">
          {user.image ? (
            <Image
              src={user.image!}
              alt="user"
              width={60}
              height={60}
              className="rounded-full"
            />
          ) : (
            <span className="bg-primary rounded-full p-4 text-white text-lg font-bold">
              SM
            </span>
          )}

          <p className="text-xl font-bold text-primary">
            {user.name?.split(" ")[0]} -{" "}
            <span className="italic font-normal">Admin</span>
          </p>
          <Button
            onclick={() => {
              signOut();
            }}
          >
            Se déconnecter
          </Button>
        </div>
      )}
    </>
  );
}
