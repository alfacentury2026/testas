import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Voster vidaus durys
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Oficialus Voster gamintojo atstovas Lietuvoje.
            Kokybiškos vidaus durys namams ir verslui.
          </p>

          <Link
            href="/katalogas"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg"
          >
            Peržiūrėti katalogą
          </Link>
        </div>
      </section>

      {/* Apie */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">
          Apie mus
        </h2>

        <p className="text-gray-600 leading-8">
          Voster Durys specializuojasi vidaus durų sprendimuose
          ir atstovauja vieną žinomiausių Lenkijos gamintojų –
          Voster. Siūlome platų modelių, spalvų ir apdailos
          pasirinkimą įvairių stilių interjerams.
        </p>
      </section>

      {/* Kolekcijos */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">
            Populiariausios kolekcijos
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">
                Modernios durys
              </h3>
              <p className="text-sm text-gray-600">
                Šiuolaikiški modeliai moderniems namams.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">
                Klasikinės durys
              </h3>
              <p className="text-sm text-gray-600">
                Tradicinio dizaino kolekcijos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">
                Dažomos durys
              </h3>
              <p className="text-sm text-gray-600">
                Individualiems interjero sprendimams.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">
                Paslėptų vyrių durys
              </h3>
              <p className="text-sm text-gray-600">
                Minimalistiniam dizainui.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktai */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">
          Kontaktai
        </h2>

        <p>Telefonas: +370 600 00000</p>
        <p>El. paštas: info@vosterdurys.lt</p>
        <p>Miestas: Vilnius</p>
      </section>
    </main>
  );
}