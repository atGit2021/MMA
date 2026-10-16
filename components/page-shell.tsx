import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 pb-16 pt-10 sm:px-8 lg:px-10">
      {children}
    </main>
  );
}
