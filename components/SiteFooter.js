import Link from 'next/link';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/links';

// Pricing, Terms, Refund и Privacy обязаны быть в навигации на каждой
// странице — это требование проверки домена Paddle.
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav>
        <Link href="/">Rotshield</Link>
        <Link href="/pricing/">Pricing</Link>
        <Link href="/terms/">Terms of Service</Link>
        <Link href="/refund/">Refund Policy</Link>
        <Link href="/privacy/">Privacy Policy</Link>
        <Link href="/support/">Support</Link>
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
      </nav>
      <p className="caption">
        Rotshield for iOS · requires iOS 18 or later · Ruslan Dzhafarov, sole proprietor, Poland
      </p>
    </footer>
  );
}
