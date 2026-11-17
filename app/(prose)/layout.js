import Link from 'next/link';
import { SiteFooter } from '@/components/SiteFooter';
import { DocNav } from '@/components/DocNav';

// Сетка как на главной: контейнер 60rem, слева колонка текста 36rem,
// справа навигация по документам. Шапка, текст и футер — от одного края.
export default function ProseLayout({ children }) {
  return (
    <div className="prose-page">
      <header className="prose-header">
        <Link href="/" className="prose-home">
          <span aria-hidden="true">←</span> Rotshield
        </Link>
      </header>
      <div className="prose-grid">
        <main className="prose">{children}</main>
        <aside className="prose-aside">
          <DocNav />
        </aside>
      </div>
      <SiteFooter />
    </div>
  );
}
