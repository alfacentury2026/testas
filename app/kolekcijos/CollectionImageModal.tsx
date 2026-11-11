"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

type GalleryImage = {
  name: string;
  image: string;
};

type CollectionImageModalProps = {
  title: string;
  items: readonly GalleryImage[];
  selectedItem: GalleryImage;
  onSelect: (item: GalleryImage) => void;
  onClose: () => void;
};

export default function CollectionImageModal({
  title,
  items,
  selectedItem,
  onSelect,
  onClose,
}: CollectionImageModalProps) {
  const navigate = useCallback(
    (direction: -1 | 1) => {
      if (items.length < 2) return;

      const currentIndex = items.findIndex(
        (item) => item.image === selectedItem.image,
      );
      const selectedIndex = currentIndex === -1 ? 0 : currentIndex;
      const nextIndex =
        (selectedIndex + direction + items.length) % items.length;
      onSelect(items[nextIndex]);
    },
    [items, onSelect, selectedItem],
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigate(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigate(1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} durų peržiūra, ${selectedItem.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
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
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Ankstesnė nuotrauka"
          disabled={items.length < 2}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-white/90 px-3 py-2 text-2xl text-stone-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          &#8592;
        </button>
        <button
          type="button"
          onClick={() => navigate(1)}
          aria-label="Kita nuotrauka"
          disabled={items.length < 2}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-white/90 px-3 py-2 text-2xl text-stone-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          &#8594;
        </button>
        <span className="absolute bottom-4 right-4 bg-emerald-800 px-3 py-2 text-sm font-medium text-white">
          {selectedItem.name}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Uždaryti nuotraukos peržiūrą"
          className="absolute right-3 top-3 z-10 bg-white/90 px-3 py-2 text-sm font-medium text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Uždaryti
        </button>
      </div>
    </div>
  );
}
