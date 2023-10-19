import {ReactNode} from "react";
import {StatusTournament} from "@/models/enums/StatusTournament";

interface Props {
    children: ReactNode,
    background: string
}

export default function Tag({children, background}: Props) {
    return <span
        className={`text-sm font-semibold uppercase mt-2 py-1 px-2 rounded bg-${background} text-white`}
    >
        {children}
    </span>
}
