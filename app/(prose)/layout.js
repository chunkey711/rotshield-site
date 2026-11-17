import Link from 'next/link';
import { SiteFooter } from '@/components/SiteFooter';

// Сетка как на главной: контейнер 60rem, шапка, текст и футер — на всю его ширину.
export default function ProseLayout({ children }) {
  return (
    <div className="prose-page">
      <header className="prose-header">
        <Link href="/" className="prose-home">
          <span aria-hidden="true">←</span> Rotshield
        </Link>
      </header>
      <main className="prose">{children}</main>
      <SiteFooter />
    </div>
  );
}
