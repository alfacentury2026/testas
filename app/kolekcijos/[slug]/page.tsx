import { notFound } from "next/navigation";
import CollectionGallery from "./CollectionGallery";
import { collections } from "../../../data/collections";

type CollectionSlug = keyof typeof collections;

function isCollectionSlug(slug: string): slug is CollectionSlug {
  return Object.hasOwn(collections, slug);
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isCollectionSlug(slug)) notFound();

  const collection = collections[slug];
  if (!("gallery" in collection)) notFound();

  return (
    <CollectionGallery
      title={collection.title}
      description={collection.description}
      gallery={collection.gallery}
    />
  );
}
