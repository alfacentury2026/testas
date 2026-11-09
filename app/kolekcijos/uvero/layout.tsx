import type { ReactNode } from "react";
import { getCollectionMetadata } from "../metadata";

export function generateMetadata() {
  return getCollectionMetadata("uvero");
}

export default function CollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
