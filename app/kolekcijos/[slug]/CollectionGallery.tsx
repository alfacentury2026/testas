"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CollectionTitle from "../CollectionTitle";
import type { CollectionOption } from "../../../data/collections";

type GalleryItem = {
  name: string;
  image: string;
};

type CollectionGalleryProps = {
  slug: string;
  title: string;
  options: readonly CollectionOption[];
  description: string;
  features: readonly string[];
  gallery: {
    type: "decor" | "model";
    items: readonly GalleryItem[];
  };
};

export default function CollectionGallery({
  slug,
  title,
  options,
  description,
  features,
  gallery,
}: CollectionGalleryProps) {
  const [selectedItem, setSelectedItem] = useState(gallery.items[0]);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const thumbnailTrack = useRef<HTMLDivElement>(null);
  const itemLabel = gallery.type === "decor" ? "dekorą" : "modelį";
  const galleryLabel = gallery.type === "decor" ? "dekorų" : "modelių";

  useEffect(() => {
    if (!isImageOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsImageOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isImageOpen]);

  function scrollThumbnails(direction: -1 | 1) {
    thumbnailTrack.current?.scrollBy({
      left: direction * 180,
      behavior: "smooth",
    });
  }

  return (
    <main className="bg-white">
      <section className="py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-6 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <button
              type="button"
              onClick={() => setIsImageOpen(true)}
              aria-label={`Padidinti ${title} durų nuotrauką, ${selectedItem.name}`}
              className="group relative mx-auto block aspect-[4/5] w-[85%] overflow-hidden border border-stone-200 bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              <Image
                src={selectedItem.image}
                alt={`${title} durys, ${selectedItem.name}`}
                fill
                sizes="(min-width: 1280px) 430px, (min-width: 1024px) 38vw, 85vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
              <span className="absolute bottom-4 right-4 bg-emerald-800 px-3 py-2 text-xs font-medium tracking-wide text-white sm:text-sm">
                {selectedItem.name}
              </span>
            </button>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollThumbnails(-1)}
                aria-label={`Slinkti ${galleryLabel} galeriją į kairę`}
                className="flex size-9 shrink-0 items-center justify-center border border-stone-200 text-lg text-stone-700 transition-colors hover:border-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              >
                &#8592;
              </button>
              <div
                ref={thumbnailTrack}
                className="flex min-w-0 flex-1 gap-3 overflow-x-auto scroll-smooth py-1"
              >
                {gallery.items.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    aria-label={`Pasirinkti ${item.name} ${itemLabel}`}
                    aria-pressed={selectedItem.name === item.name}
                    className={`w-[76px] shrink-0 border bg-white p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:w-[88px] ${
                      selectedItem.name === item.name
                        ? "border-stone-900"
                        : "border-stone-200 hover:border-stone-500"
                    }`}
                  >
                    <span className="relative block aspect-[3/4] w-full bg-stone-50">
                      <Image
                        src={item.image}
                        alt={`${title} durys, ${item.name}`}
                        fill
                        sizes="88px"
                        className="object-contain"
                      />
                    </span>
                    <span className="mt-1 block truncate text-center text-xs text-stone-700">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollThumbnails(1)}
                aria-label={`Slinkti ${galleryLabel} galeriją į dešinę`}
                className="flex size-9 shrink-0 items-center justify-center border border-stone-200 text-lg text-stone-700 transition-colors hover:border-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              >
                &#8594;
              </button>
            </div>
          </div>

          <div className="py-2 lg:py-4">
            <CollectionTitle title={title} options={options} />
            <div className="mt-8 border border-stone-200 bg-white p-6">
              <p className="text-sm leading-6 text-stone-600">
                {description}
              </p>
              <ul className="mt-5 space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-stone-700"
                  >
                    <span
                      aria-hidden="true"
                      className="font-semibold text-emerald-800"
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={`/kontaktai?kolekcija=${slug}`}
              className="mt-8 inline-flex items-center justify-center bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              Gauti pasiūlymą
            </Link>
          </div>
        </div>
      </section>

      {isImageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} durų peržiūra, ${selectedItem.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            aria-label="Uždaryti nuotraukos peržiūrą"
            className="absolute inset-0 h-full w-full cursor-zoom-out"
          />
          <div className="relative z-10 h-[min(90vh,1000px)] w-full max-w-3xl border border-white/20 bg-stone-100">
            <Image
              src={selectedItem.image}
              alt={`${title} durys, ${selectedItem.name}`}
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-contain"
            />
            <span className="absolute bottom-4 right-4 bg-emerald-800 px-3 py-2 text-sm font-medium text-white">
              {selectedItem.name}
            </span>
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              aria-label="Uždaryti nuotraukos peržiūrą"
              className="absolute right-3 top-3 bg-white/90 px-3 py-2 text-sm font-medium text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Uždaryti
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
