'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DOCS = [
  { href: '/pricing/', label: 'Pricing' },
  { href: '/terms/', label: 'Terms of Service' },
  { href: '/refund/', label: 'Refund Policy' },
  { href: '/privacy/', label: 'Privacy Policy' },
  { href: '/support/', label: 'Support' },
];

// Правая колонка текстовых страниц: заполняет контейнер 60rem по делу
// и даёт переход между документами без прокрутки до футера.
export function DocNav() {
  const pathname = usePathname();
  const current = (href) => pathname === href || pathname === href.slice(0, -1);

  return (
    <nav className="doc-nav" aria-label="Documents">
      <p className="overline">Documents</p>
      <ul>
        {DOCS.map((doc) => (
          <li key={doc.href}>
            <Link href={doc.href} aria-current={current(doc.href) ? 'page' : undefined}>
              {doc.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
