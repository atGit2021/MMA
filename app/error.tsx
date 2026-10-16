"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-semibold tracking-tight text-neutral-900">
        Met Museum Art Gallery
      </h1>
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <p className="text-neutral-600">
          Something went wrong loading the gallery.
        </p>
        <p className="max-w-md text-sm text-neutral-400">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
