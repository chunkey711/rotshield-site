import Link from 'next/link';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/links';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav>
        <Link href="/">Rotshield</Link>
        <Link href="/privacy/">Privacy Policy</Link>
        <Link href="/support/">Support</Link>
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
      </nav>
      <p className="caption">Rotshield for iOS · requires iOS 18 or later · Ruslan Dzhafarov, Poland</p>
    </footer>
  );
}
