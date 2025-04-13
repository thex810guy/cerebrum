import { ReactNode } from "react";

export default function InlineCode({ children, className }: { children: ReactNode, className?: string }) {
    return (
      <code className={"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold inter " + className}>
        {children}
      </code>
    )
}