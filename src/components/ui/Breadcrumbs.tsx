import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/site";

export type Crumb = { name: string; href: string };

/** Visible breadcrumb trail (pairs with BreadcrumbJsonLd for SEO). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", href: routes.home }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-fg-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-fg">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-fg">
                  {c.name}
                </Link>
              )}
              {!last && <span className="text-fg-faint">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
