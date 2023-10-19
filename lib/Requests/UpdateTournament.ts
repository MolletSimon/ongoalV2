"use client";

import {Tournament} from "@prisma/client";

export async function UpdateTournament(code: string, tournament: Tournament) {
    await fetch(`${process.env.URL}/tournaments`, {
        method: "PUT",
        body: JSON.stringify({code, tournament}),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
