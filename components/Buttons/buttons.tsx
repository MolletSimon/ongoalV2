"use client";

import { redirect } from "next/navigation";
import Button from "../../lib/Button";
import Link from "next/link";

export function CreateTournamentButton() {
  return (
    <Link href={"/create-tournament"}>
      <Button color="white" backgroundColor="primary">
        Créer un tournoi
      </Button>
    </Link>
  );
}

export function NavigationButtons({
  nextHref,
  prevHref,
}: {
  nextHref: string;
  prevHref: string;
}) {
  return (
    <>
      <PreviousStepButton href={prevHref} />
      <NextStepButton href={nextHref} />
    </>
  );
}

export function NextStepButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <Button color="white" backgroundColor="primary">
        Suivant
      </Button>
    </Link>
  );
}

export function PreviousStepButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <Button color="white" backgroundColor="danger">
        Précédent
      </Button>
    </Link>
  );
}
