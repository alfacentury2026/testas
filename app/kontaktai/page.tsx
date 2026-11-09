import ContactForm from "./ContactForm";

type ContactPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { kolekcija } = await searchParams;
  const collection = typeof kolekcija === "string" ? kolekcija : "";

  return (
    <main>
      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Susisiekite su mumis
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Padėsime išsirinkti tinkamiausią Voster kolekciją ir atsakysime į
            visus jūsų klausimus.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Kontaktai
            </h2>
            <dl className="mt-8 space-y-7">
              <div>
                <dt className="text-sm font-medium text-stone-500">Telefonas</dt>
                <dd className="mt-2 text-lg font-medium text-stone-900">
                  <a href="tel:+37061427880">+370 614 27880</a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-stone-500">
                  El. paštas
                </dt>
                <dd className="mt-2 text-lg font-medium text-stone-900">
                  <a href="mailto:info@vosterdurys.lt">
                    info@vosterdurys.lt
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-stone-500">Adresas</dt>
                <dd className="mt-2 text-lg leading-7 text-stone-900">
                  S. Žukausko 49
                  <br />
                  Vilnius
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-stone-500">
                  Darbo laikas
                </dt>
                <dd className="mt-2 text-lg text-stone-900">I–V 10:00–19:00</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Parašykite mums
            </h2>
            <ContactForm collection={collection} />
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Salono vieta
          </h2>
          <div className="mt-8 flex min-h-80 items-center justify-center rounded-lg border border-stone-200 bg-stone-200/50 p-8 text-center">
            <p className="text-sm font-medium tracking-wide text-stone-500 sm:text-base">
              Google Maps bus prijungtas vėlesniame etape
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
