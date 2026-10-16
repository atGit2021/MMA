import { PageShell } from "@/components/page-shell";

export default function Loading() {
  return (
    <PageShell>
      <h1 className="mb-8 text-center font-display text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        Met Museum Art Gallery
      </h1>
      <p className="py-16 text-center text-neutral-600">Loading gallery…</p>
    </PageShell>
  );
}
