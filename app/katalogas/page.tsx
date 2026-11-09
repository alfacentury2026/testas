"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { collections } from "../../data/collections";

const collectionCoverFallbacks: Record<string, string> = {
  kano: "/collections/kano/bialy-mat.jpg",
  uvero: "/collections/uvero/uvero-10 bialy-mat.jpg",
  fado: "/collections/fado/fado bialy-mat.jpg",
  rumba: "/collections/rumba/rumba bialy-mat.jpg",
  della: "/collections/della/della-10.jpg",
};

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const filteredCollections = Object.entries(collections)
    .map(([slug, collection]) => ({
      slug,
      title: collection.title,
      image:
        ("gallery" in collection ? collection.gallery.items[0]?.image : undefined) ??
        collectionCoverFallbacks[slug],
    }))
    .filter(({ title }) =>
      title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <main className="bg-stone-100">
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-center text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Voster kolekcijos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-stone-600 sm:text-lg">
            Atraskite visas Voster kolekcijas ir išsirinkite tinkamiausią
            sprendimą savo interjerui.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <label htmlFor="collection-search" className="sr-only">
              Ieškoti kolekcijos
            </label>
            <input
              id="collection-search"
              type="search"
              placeholder="Ieškoti kolekcijos..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-sm border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none placeholder:text-stone-500 focus:border-stone-600 focus:ring-1 focus:ring-stone-600"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 sm:mt-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-5">
            {filteredCollections.map(({ title, slug, image }) => {
              return (
                <article key={slug}>
                  <Link
                    href={`/kolekcijos/${slug}`}
                    className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <Image
                        src={image}
                        alt={`${title} kolekcijos durys`}
                        fill
                        sizes="(min-width: 1280px) 227px, (min-width: 1024px) calc((100vw - 144px) / 5), (min-width: 640px) calc((100vw - 88px) / 3), calc((100vw - 68px) / 2)"
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <h2 className="mt-4 text-base font-medium tracking-wide text-stone-900 transition-colors group-hover:text-stone-500 sm:text-lg">
                      {title}
                    </h2>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
