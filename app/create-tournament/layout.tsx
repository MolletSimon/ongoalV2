import {
  NavigationButtons,
  NextStepButton,
} from "@/components/Buttons/buttons";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <h2 className="text-2xl mt-10 mx-20 font-bold font-mabry">
        Création de votre tournoi !
      </h2>
      <div className="flex">
        <div className="w-2/3">{children}</div>
        <div className="border-2 w-1/3">
          <h1>Recap</h1>
        </div>
      </div>
      <div className="flex gap-4 justify-end mr-24 mt-10">
        <NavigationButtons nextHref="/create-tournament/teams" prevHref="/" />
      </div>
    </div>
  );
}
