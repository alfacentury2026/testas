import Link from "next/link";

const navigationLinks = [
  { label: "Pagrindinis", href: "/" },
  { label: "Katalogas", href: "/katalogas" },
  { label: "Projektai", href: "/projektai" },
  { label: "Kontaktai", href: "/kontaktai" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-950"
          aria-label="Voster Durys – pagrindinis puslapis"
        >
          Voster Durys
        </Link>

        <nav aria-label="Pagrindinė navigacija" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigationLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-950"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 [&::-webkit-details-marker]:hidden">
            Meniu
          </summary>
          <nav
            aria-label="Pagrindinė navigacija"
            className="absolute right-0 top-full z-10 mt-2 w-52 rounded-lg border border-gray-200 bg-white p-2 shadow-lg"
          >
            <ul className="flex flex-col">
              {navigationLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950"
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
