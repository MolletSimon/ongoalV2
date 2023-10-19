"use client";

import { Input } from "@/lib/Input";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import {UpdateTournament} from "@/lib/Requests/UpdateTournament";

export const dynamic = "force-dynamic";

export default function InformationsTournament() {
  const params = useParams();
  const name = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState({
    name: "",
    date: "",
  });

  const handleBlur = async () => {
    checkErrors();
    await UpdateTournament(params["code"] as string, {
      code: params["code"] as string,
      currentPhase: 0,
      statusId: "1",
      date: date.current?.value ? new Date(date.current?.value) : null,
      name: name.current?.value ?? null,
      userId: null
    })
  };

  const checkErrors = () => {
    if (!name.current?.value) {
      setErrors((prevErrors) => {
        return { ...prevErrors, name: "Le nom du tournoi est obligatoire" };
      });
    } else {
      setErrors((prevErrors) => {
        return { ...prevErrors, name: "" };
      });
    }

    if (!date.current?.value) {
      setErrors((prevErrors) => {
        return { ...prevErrors, date: "La date du tournoi est obligatoire" };
      });
    } else {
      setErrors((prevErrors) => {
        return { ...prevErrors, date: "" };
      });
    }
  };

  return (
    <form className="m-10 ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="col-span-full sm:col-span-2 md:col-span-3">
        <Input
          id="tournament-name"
          label="Nom du tournoi"
          additionalClass="mt-6 mb-8"
          onBlur={handleBlur}
          type="text"
          error={errors.name}
          align="left"
          placeholder="Renseignez le nom du tournoi"
          innerRef={name}
        ></Input>

        <Input
          id="tournament-date"
          label="Date du tournoi"
          additionalClass="mt-6 mb-8"
          error={errors.date}
          onBlur={handleBlur}
          type="date"
          align="left"
          placeholder="JJ/MM/AAAA"
          innerRef={date}
        ></Input>
      </div>
    </form>
  );
}
