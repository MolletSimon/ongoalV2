import {getServerSession} from "next-auth";
import {NextResponse} from "next/server";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {prisma} from "@/lib/Prisma";
import {Prisma} from "@prisma/client";

export async function PUT(req: Request) {
    const {code, tournament} = await req.json();
    const res = await prisma.tournament.update({
        where: {
            code: code,
        },
        data: tournament,
    });
    return NextResponse.json(res);
}

export async function POST(req: Request, res: Response) {
    const session = await getServerSession(authOptions);

    const currentUserId = await prisma.user
        .findUnique({where: {email: session?.user?.email!}})
        .then((user) => user?.id!);

    const seed =
        Date.now().toString(36) + Math.random().toString(36).substring(2);
    const code = seed.toUpperCase().slice(-6);
    const tournament = await prisma.tournament.create({
        data: {
            statusId: "1",
            code: code,
            currentPhase: 0,
            userId: currentUserId
        },
    });
    return NextResponse.json(tournament);
}

export async function GET() {
    const tournaments = await prisma.tournament.findMany({
        include: {
            teams: true
        }
    });

    return NextResponse.json(tournaments);
}
