import AuthCheck from "@/components/AuthCheck";
import {CreateTournamentButton} from "@/components/Buttons/buttons";
import Card from "@/lib/Card";
import {Tournament} from "@prisma/client";
import Link from "next/link";
import TournamentsList from "@/components/TournamentsList";
import {FetchTournaments} from "@/lib/Requests/FetchTournaments";

export default async function Home() {
    return (
        <main className="font-mabry">
            <AuthCheck>
                <div className="m-14">
                    <CreateTournamentButton/>
                    <TournamentsList />
                </div>
            </AuthCheck>
        </main>
    );
}
