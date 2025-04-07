import { ReactNode } from "react";

export default function H1({ children, className }: { children: ReactNode, className?: string }) {
    return (<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl inter " + className}>{children}</h1>)
}
  