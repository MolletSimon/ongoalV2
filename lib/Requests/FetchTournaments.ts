import {Tournament} from "@prisma/client";
import {headers} from "next/headers";

export async function FetchTournaments() {
    return await fetch(`${process.env.URL}/tournaments`, {cache: "no-store"}).then(
        res => res?.json()
    );
}
