"use client";

import Image from "next/image";
import Link from "next/link";
import { collections } from "../../data/collections";

type CollectionSlug = keyof typeof collections;

export default function RelatedCollections({
  slug,
}: {
  slug: CollectionSlug;
}) {
  const currentCollection = collections[slug];
  const relatedCollections = Object.entries(collections)
    .flatMap(([relatedSlug, collection]) => {
      if (
        relatedSlug === slug ||
        collection.group !== currentCollection.group ||
        !("gallery" in collection)
      ) {
        return [];
      }

      const cover = collection.gallery.items[0]?.image;
      if (!cover) return [];

      return [{ slug: relatedSlug, title: collection.title, cover }];
    })
    .slice(0, 3);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          Susijusios kolekcijos
        </h2>
        {relatedCollections.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCollections.map(({ slug: relatedSlug, title, cover }) => (
              <article key={relatedSlug}>
                <Link
                  href={`/kolekcijos/${relatedSlug}`}
                  className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-transparent">
                    <Image
                      src={cover}
                      alt={`${title} kolekcijos durys`}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium tracking-wide text-stone-900 transition-colors group-hover:text-stone-500 sm:text-lg">
                    {title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
