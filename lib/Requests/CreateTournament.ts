import {headers} from "next/headers";
import {Tournament} from "@prisma/client";

export async function CreateTournament() {
    const request = await fetch(`${process.env.URL}/tournaments`, {
        method: "POST",
        cache: "no-store",
        headers: headers()
    });

    return await request.json() as Tournament;
}
