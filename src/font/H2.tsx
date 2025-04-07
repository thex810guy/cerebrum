import { ReactNode } from "react";

export default function H2({ children, className }: { children: ReactNode, className?: string }) {
    return (<h2 className={"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 inter " + className}>{children}</h2>)
}
  