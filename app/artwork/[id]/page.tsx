import Link from "next/link";

type ArtworkPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { id } = await params;

  return (
    <main>
      <p>
        <Link href="/">← Back to gallery</Link>
      </p>
      <h1>Artwork {id}</h1>
      <p>Detail view coming in Core #2.</p>
    </main>
  );
}
