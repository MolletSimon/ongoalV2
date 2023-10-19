import {ReactNode} from "react";

interface Props {
    size: 'lg' | 'xl' | '2xl' | '3xl',
    children: ReactNode
}

export default function Title({size, children}: Props) {
    return <h1 className={`text-${size} font-bold text-primary`}>
        {children}
    </h1>
}
