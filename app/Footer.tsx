import Link from "next/link";

const footerLinks = [
  { label: "Katalogas", href: "/katalogas" },
  { label: "Projektai", href: "/projektai" },
  { label: "Kontaktai", href: "/kontaktai" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-gray-950">Voster Durys</p>
          <p className="mt-1 text-sm text-gray-500">
            © {new Date().getFullYear()} Voster Durys. Visos teisės saugomos.
          </p>
        </div>

        <nav aria-label="Poraštės navigacija">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end">
            {footerLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-950"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
