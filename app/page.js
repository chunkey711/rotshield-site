import Link from 'next/link';
import { Cosmos } from '@/components/Cosmos';
import { Mascot, MASCOT_STATES } from '@/components/Mascot';
import { SiteFooter } from '@/components/SiteFooter';
import { APP_STORE_URL, CONTACT_MAILTO } from '@/lib/links';
import styles from './home.module.css';

const STEPS = [
  {
    title: 'Pick the apps',
    body: "In Apple's own picker. iOS hands Rotshield opaque tokens, not names — the app never learns what you chose.",
  },
  {
    title: 'Set a rule',
    body: 'A schedule, all day, or a daily limit. For a single stretch of work, a focus timer does the same thing once.',
  },
  {
    title: 'Earn the way back in',
    body: 'A short breathing challenge opens a 15-minute window. When it closes, iOS puts the shield back on its own.',
  },
];

const VALUES = [
  {
    title: 'Reach deep focus',
    body: 'Distractions are simply closed, so an hour of work stays an hour of work.',
  },
  {
    title: 'Stop putting it off',
    body: 'Take back the hours and spend them on the thing you keep postponing.',
  },
  {
    title: 'Keep the brain charged',
    body: 'A day that ends with something left in you, not scrolled away.',
  },
];

// Пороги из lib/brain.js приложения.
const SCORE_FLOOR = { thriving: 85, bright: 65, tired: 45, frayed: 25, depleted: 0 };

function GetAppButton() {
  if (!APP_STORE_URL) {
    return <span className="pill pill--muted">Coming to the App Store</span>;
  }
  return (
    <a className="pill pill--primary" href={APP_STORE_URL}>
      Get it on the App Store
    </a>
  );
}

function ShieldMock() {
  return (
    <div className={styles.shield} aria-hidden="true">
      <Mascot state="bright" size={64} className={styles.shieldMascot} />
      <p className={styles.shieldTitle}>Blocked</p>
      <p className={styles.shieldSubtitle}>Instagram is blocked right now</p>
      <span className={`${styles.shieldButton} ${styles.shieldPrimary}`}>Stay focused</span>
      <span className={styles.shieldButton}>Unlock</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <Cosmos />
        <div className={styles.heroInner}>
          <p className={`overline ${styles.reveal}`}>rotshield · for iphone</p>
          <Mascot state="thriving" size={200} breathing className={`${styles.heroMascot} ${styles.reveal}`} />
          <h1 className={`${styles.title} ${styles.reveal}`}>
            Where time gets <em>earned back.</em>
          </h1>
          <p className={`${styles.lede} ${styles.reveal}`}>
            Rotshield closes the apps you choose — on a schedule, all day, or once a daily limit runs
            out. To get back in early, you breathe for a minute.
          </p>
          <div className={`${styles.actions} ${styles.reveal}`}>
            <GetAppButton />
            <a className="pill pill--secondary" href="#how">
              How it works
            </a>
          </div>
        </div>
      </section>

      <section id="how" className={styles.section}>
        <p className="overline">how it works</p>
        <div className={styles.how}>
          <ol className={styles.steps}>
            {STEPS.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <ShieldMock />
        </div>
      </section>

      <section className={styles.section}>
        <p className="overline">what it is for</p>
        <div className={styles.values}>
          {VALUES.map((value) => (
            <article key={value.title} className={styles.card}>
              <h2>{value.title}</h2>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.score}`}>
        <p className="overline">brain score</p>
        <h2 className={styles.sectionTitle}>One number for how the day went.</h2>
        <p className={styles.sectionLede}>
          Your daily goal against the minutes you actually spent. The mascot wears the result all
          day — and every time you turn back at a shield, it earns a little credit.
        </p>
        <ul className={styles.states}>
          {MASCOT_STATES.map((state) => (
            <li key={state}>
              <Mascot state={state} size={72} label={`${state} mascot`} />
              <span className={styles.stateName}>{state}</span>
              <span className="caption">{SCORE_FLOOR[state]}+</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.section} ${styles.privacy}`}>
        <div className={styles.privacyInner}>
          <p className="overline">privacy</p>
          <h2 className={styles.sectionTitle}>Nothing leaves your phone.</h2>
          <p className={styles.sectionLede}>
            No account, no server, no analytics. That is not a statement of intent — it is a
            description of the build. Screen time is computed by iOS inside a sandboxed extension
            and never sent anywhere. Delete the app, and everything goes with it.
          </p>
          <Link href="/privacy/" className={styles.textLink}>
            Read the privacy policy
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.honest}>
          <h2 className={styles.sectionTitle}>Friction, not a lock.</h2>
          <p className={styles.sectionLede}>
            The shield belongs to iOS. Rotshield asks the system to close an app, and the system
            does it — so withdrawing Screen Time access or deleting the app undoes the block. It is a
            tool for limiting yourself, not other people.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.cta}`}>
        <Mascot state="bright" size={96} breathing />
        <h2 className={styles.sectionTitle}>Rotshield for iPhone</h2>
        <p className="caption">requires iOS 18 or later</p>
        <div className={styles.actions}>
          <GetAppButton />
          <a className="pill pill--secondary" href={CONTACT_MAILTO}>
            Write to me
          </a>
        </div>
      </section>

      <div className={styles.footerWrap}>
        <SiteFooter />
      </div>
    </>
  );
}
