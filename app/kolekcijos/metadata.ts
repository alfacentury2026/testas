import type { Metadata } from "next";
import { collections } from "../../data/collections";

export type CollectionSlug = keyof typeof collections;

export function isCollectionSlug(slug: string): slug is CollectionSlug {
  return Object.hasOwn(collections, slug);
}

export function getCollectionMetadata(slug: CollectionSlug): Metadata {
  const collection = collections[slug];

  return {
    title: `${collection.title} | Voster Durys`,
    description: collection.description,
  };
}
