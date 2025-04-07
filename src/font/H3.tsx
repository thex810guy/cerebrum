import { ReactNode } from "react";

export default function H3({ children, className }: { children: ReactNode, className?: string }) {
    return (<h3 className={"scroll-m-20 text-2xl font-semibold tracking-tight inter " + className}>{children}</h3>)
}
  