import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { label: "Pagrindinis", href: "/" },
  { label: "Katalogas", href: "/katalogas" },
  { label: "Projektai", href: "/projektai" },
  { label: "Kontaktai", href: "/kontaktai" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Voster Durys – pagrindinis puslapis"
        >
          <Image
            src="/logo/VOSTERHorizontalus.-Baltas.png"
            alt="Voster Durys"
            width={1000}
            height={601}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        <nav aria-label="Pagrindinė navigacija" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigationLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 [&::-webkit-details-marker]:hidden">
            Meniu
          </summary>
          <nav
            aria-label="Pagrindinė navigacija"
            className="absolute right-0 top-full z-10 mt-2 w-52 rounded-lg border border-gray-700 bg-gray-950 p-2 shadow-lg"
          >
            <ul className="flex flex-col">
              {navigationLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
