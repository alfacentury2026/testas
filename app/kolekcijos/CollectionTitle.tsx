import Image from "next/image";
import type { CollectionOption } from "../../data/collections";

type CollectionTitleProps = {
  title: string;
  options: readonly CollectionOption[];
};

const optionIcons = {
  1: {
    src: "/icons/su%20uzlaida.jpg",
    label: "Varčia su užlaida",
    width: 178,
    height: 174,
  },
  2: {
    src: "/icons/be%20uzlaidos.jpg",
    label: "Varčia be užlaidos (paslėpti vyriai)",
    width: 172,
    height: 174,
  },
  3: {
    src: "/icons/reversines.jpg",
    label: "Reversinė varčia",
    width: 183,
    height: 186,
  },
} satisfies Record<
  CollectionOption,
  { src: string; label: string; width: number; height: number }
>;

export default function CollectionTitle({
  title,
  options,
}: CollectionTitleProps) {
  return (
    <div
      className={
        options.length > 0
          ? "flex flex-wrap items-center gap-x-5 gap-y-3"
          : undefined
      }
    >
      <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
        {title}
      </h1>
      {options.length > 0 && (
        <div className="flex items-center gap-2">
          {options.map((option) => {
            const icon = optionIcons[option];
            return (
              <Image
                key={option}
                src={icon.src}
                alt={icon.label}
                title={icon.label}
                width={icon.width}
                height={icon.height}
                className="h-10 w-auto shrink-0"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
