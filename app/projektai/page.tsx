import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Projektai
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Šiuo metu ruošiame projektų galeriją.
            <br className="hidden sm:block" /> Netrukus čia rasite Voster durų
            sprendimus realiuose interjeruose ir įgyvendintuose projektuose.
          </p>

          <div className="mt-10 rounded-lg border border-stone-200 bg-white px-6 py-16 sm:px-12 sm:py-20">
            <p className="text-xl font-medium tracking-tight text-stone-900 sm:text-2xl">
              Projektų galerija ruošiama
            </p>
          </div>

          <Link
            href="/katalogas"
            className="mt-9 inline-flex items-center justify-center rounded-md bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
          >
            Peržiūrėti kolekcijas
          </Link>
        </div>
      </section>
    </main>
  );
}
