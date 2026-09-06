import styles from './Mascot.module.css';

export const MASCOT_STATES = ['thriving', 'bright', 'tired', 'frayed', 'depleted'];

// Арт — силуэт мозга, мимика вырезана дырками; красится через CSS-маску
// цветом темы, как currentColor в приложении.
export function Mascot({ state = 'bright', size = 220, breathing = false, label, className = '' }) {
  return (
    <span
      role="img"
      aria-label={label ?? `Rotshield mascot, ${state}`}
      className={`${styles.mascot} ${breathing ? styles.breathing : ''} ${className}`}
      style={{ '--src': `url(/mascot/${state}.svg)`, width: size, height: size }}
    />
  );
}
