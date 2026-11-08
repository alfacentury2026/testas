import Image from "next/image";
import Link from "next/link";

const collections = ["Kano", "Uvero", "Fado", "Rumba"];
const features = [
  {
    title: "30+ metų patirties",
    description: "Voster durų gamyboje ir vystyme sukaupta ilgametė patirtis.",
  },
  {
    title: "Šiuolaikinis dizainas",
    description: "Kolekcijos kuriamos pagal modernias interjero tendencijas.",
  },
  {
    title: "Kokybiškos medžiagos",
    description: "Patvarūs sprendimai kasdieniam naudojimui.",
  },
  {
    title: "Oficialus atstovas Lietuvoje",
    description:
      "Padedame išsirinkti tinkamiausią kolekciją ir techninius sprendimus.",
  },
];
const interiorImages = Array.from(
  { length: 6 },
  (_, index) => `/interiors/interior%20${index + 1}.jpg`,
);

export default function Home() {
  return (
    <main>
      <section className="bg-stone-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700">
              Oficialus Voster atstovas Lietuvoje
            </p>

            <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-black sm:text-6xl">
              Voster vidaus durys
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Šiuolaikiški sprendimai moderniems ir klasikinio stiliaus
              interjerams.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/katalogas"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-stone-800"
              >
                Peržiūrėti kolekcijas
              </Link>
              <Link
                href="/kontaktai"
                className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3.5 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100"
              >
                Gauti pasiūlymą
              </Link>
            </div>

            <ul className="mt-12 grid gap-5 border-t border-stone-200 pt-7 sm:grid-cols-3">
              {[
                "30+ metų patirties",
                "Europos gamintojas",
                "Patikimas prekės ženklas",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm font-medium leading-6 text-stone-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-stone-200 bg-stone-200/70">
            <Image
              src="/42.jpg"
              alt="Voster vidaus durys"
              fill
              sizes="(min-width: 1280px) 584px, (min-width: 1024px) calc(50vw - 56px), calc(100vw - 3rem)"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Populiariausios Voster kolekcijos
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((name) => (
              <article
                key={name}
                className="overflow-hidden rounded-lg border border-stone-200 bg-white"
              >
                <div className="relative aspect-[4/3] bg-stone-100">
                  <Image
                    src={`/hero/${name.toLowerCase()}.jpg`}
                    alt={`${name} kolekcijos durys`}
                    fill
                    sizes="(min-width: 1280px) 293px, (min-width: 1024px) calc(25vw - 27px), (min-width: 640px) calc(50vw - 34px), calc(100vw - 3rem)"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <h3 className="text-lg font-medium text-black">{name}</h3>
                  <Link
                    href={`/katalogas#${name.toLowerCase()}`}
                    className="shrink-0 rounded-md border border-stone-300 px-3 py-2 text-sm font-medium text-stone-800 transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    Plačiau
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Kodėl rinktis Voster?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
            Voster daugiau nei 30 metų kuria vidaus duris, kuriose dera
            šiuolaikinis dizainas, kokybiškos medžiagos ir ilgaamžiškumas.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, description }) => (
              <article
                key={title}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <h3 className="text-lg font-medium text-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Voster durys interjere
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
            Atraskite, kaip Voster kolekcijos atrodo realiuose interjeruose.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {interiorImages.map((src, index) => (
              <div
                key={src}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-100"
              >
                <Image
                  src={src}
                  alt={`Voster durys realiame interjere ${index + 1}`}
                  fill
                  sizes="(min-width: 1280px) 397px, (min-width: 1024px) 31vw, (min-width: 640px) calc(50vw - 34px), calc(100vw - 3rem)"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-100 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Reikia pagalbos renkantis duris?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Padėsime išsirinkti tinkamiausią Voster kolekciją, apdailą ir
            techninius sprendimus pagal jūsų projektą.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/kontaktai"
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-stone-800"
            >
              Gauti pasiūlymą
            </Link>
            <Link
              href="/kontaktai"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3.5 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-50"
            >
              Susisiekti
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
