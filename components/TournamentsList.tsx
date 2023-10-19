import {Tournament} from "@prisma/client";
import {StatusTournament} from "@/models/enums/StatusTournament";
import Link from "next/link";
import Card from "@/lib/Card";
import Title from "@/lib/Title";
import Tag from "@/lib/Tag";
import {FetchTournaments} from "@/lib/Requests/FetchTournaments";

export default async function TournamentsList() {
    const tournaments = await FetchTournaments();

    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-14 gap-6">
        {
            tournaments.map((t: Tournament) => (
                <Link href={`/create-tournament/${t.code}/infos`} key={t.code}>
                    <TournamentTile t={t} />
                </Link>
            ))
        }
    </div>
}

function TournamentTile({t}: {t: Tournament}) {
    const colorTag = t.statusId === StatusTournament.CREATION
        ? "warning"
        : t.statusId === "started"
            ? "bg-primary"
            : "bg-success"
    return <Card>
        <div className="flex flex-col justify-center items-center">
            <Title size="xl">{t.name ?? "Sans nom"}</Title>

            <p className="text-lg mb-2">Nombre d&apos;équipes : 5</p>
            <Tag background={colorTag}>
                {t.statusId === StatusTournament.CREATION && <p>En cours de création</p>}
                {t.statusId === "drawMade" && <p>TAS Effectué - Prêt à lancer</p>}
                {t.statusId === "started" && <p>Démarré</p>}
            </Tag>
        </div>
    </Card>


}
