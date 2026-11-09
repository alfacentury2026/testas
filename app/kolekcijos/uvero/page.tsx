"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { collections } from "../../../data/collections";

const collection = collections.uvero;
const decors = [
  {
    name: "Uvero 10 - Baltas mat",
    image: "/collections/uvero/uvero-10 bialy-mat.jpg",
  },
  {
    name: "Uvero 10 - Cashmere",
    image: "/collections/uvero/uvero-10 cashmere.jpg",
  },
  {
    name: "Uvero 10 - Clay",
    image: "/collections/uvero/uvero-10 clay.jpg",
  },
  {
    name: "Uvero 10 - Grau",
    image: "/collections/uvero/uvero-10 grau.jpg",
  },
  {
    name: "Uvero 10 - Ąžuolas karamelinis",
    image: "/collections/uvero/uvero-10 dab-karmelowy.jpg",
  },
  {
    name: "Uvero 20 - Baltas mat",
    image: "/collections/uvero/uvero-20 bialy-mat.jpg",
  },
  {
    name: "Uvero 20 - Cashmere",
    image: "/collections/uvero/uvero 20 cashmere.jpg",
  },
  {
    name: "Uvero 20 - Clay",
    image: "/collections/uvero/uvero-20 clay.jpg",
  },
  {
    name: "Uvero 20 - Ąžuolas karamelinis",
    image: "/collections/uvero/uvero-20 dab-karmelowy.jpg",
  },
];

type Decor = (typeof decors)[number];

export default function UveroCollectionPage() {
  const [selectedDecor, setSelectedDecor] = useState<Decor>(decors[0]);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const thumbnailTrack = useRef<HTMLDivElement>(null);

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
              aria-label={`Padidinti ${collection.title} durų nuotrauką, ${selectedDecor.name}`}
              className="group relative mx-auto block aspect-[4/5] w-[85%] overflow-hidden border border-stone-200 bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900"
            >
              <Image
                src={selectedDecor.image}
                alt={`${collection.title} durys, ${selectedDecor.name}`}
                fill
                sizes="(min-width: 1280px) 430px, (min-width: 1024px) 38vw, 85vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
              <span className="absolute bottom-4 right-4 bg-emerald-800 px-3 py-2 text-xs font-medium tracking-wide text-white sm:text-sm">
                {selectedDecor.name}
              </span>
            </button>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollThumbnails(-1)}
                aria-label="Slinkti dekorų galeriją į kairę"
                className="flex size-9 shrink-0 items-center justify-center border border-stone-200 text-lg text-stone-700 transition-colors hover:border-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              >
                &#8592;
              </button>
              <div
                ref={thumbnailTrack}
                className="flex min-w-0 flex-1 gap-3 overflow-x-auto scroll-smooth py-1"
              >
                {decors.map((decor) => (
                  <button
                    key={decor.name}
                    type="button"
                    onClick={() => setSelectedDecor(decor)}
                    aria-label={`Pasirinkti ${decor.name} dekorą`}
                    aria-pressed={selectedDecor.name === decor.name}
                    className={`w-[76px] shrink-0 border bg-white p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:w-[88px] ${
                      selectedDecor.name === decor.name
                        ? "border-stone-900"
                        : "border-stone-200 hover:border-stone-500"
                    }`}
                  >
                    <span className="relative block aspect-[3/4] w-full bg-stone-50">
                      <Image
                        src={decor.image}
                        alt={`${collection.title} durys, ${decor.name}`}
                        fill
                        sizes="88px"
                        className="object-contain"
                      />
                    </span>
                    <span className="mt-1 block truncate text-center text-xs text-stone-700">
                      {decor.name}
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollThumbnails(1)}
                aria-label="Slinkti dekorų galeriją į dešinę"
                className="flex size-9 shrink-0 items-center justify-center border border-stone-200 text-lg text-stone-700 transition-colors hover:border-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              >
                &#8594;
              </button>
            </div>
          </div>

          <div className="py-2 lg:py-4">
            <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              {collection.title}
            </h1>
            <div
              className="mt-8 min-h-56 border border-stone-200 bg-white sm:min-h-64"
            >
              <p className="p-6 text-sm leading-6 text-stone-600">
                {collection.description}
              </p>
            </div>
            <Link
              href="/kontaktai?kolekcija=uvero"
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
          aria-label={`${collection.title} durų peržiūra, ${selectedDecor.name}`}
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
              src={selectedDecor.image}
              alt={`${collection.title} durys, ${selectedDecor.name}`}
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-contain"
            />
            <span className="absolute bottom-4 right-4 bg-emerald-800 px-3 py-2 text-sm font-medium text-white">
              {selectedDecor.name}
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
