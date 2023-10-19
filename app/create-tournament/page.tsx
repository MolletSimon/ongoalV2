import { redirect } from "next/navigation";
import {CreateTournament} from "@/lib/Requests/CreateTournament";

export default async function Page() {
  const tournament = await CreateTournament();

  redirect(`/create-tournament/${tournament.code}/infos`);
}
