import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionGallery from "./CollectionGallery";
import { collections } from "../../../data/collections";
import {
  getCollectionMetadata,
  isCollectionSlug,
} from "../metadata";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isCollectionSlug(slug)) notFound();

  return getCollectionMetadata(slug);
}

export default async function CollectionPage({
  params,
}: CollectionPageProps) {
  const { slug } = await params;

  if (!isCollectionSlug(slug)) notFound();

  const collection = collections[slug];
  if (!("gallery" in collection)) notFound();

  return (
    <CollectionGallery
      slug={slug}
      title={collection.title}
      description={collection.description}
      gallery={collection.gallery}
    />
  );
}
