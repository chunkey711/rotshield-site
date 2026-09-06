import styles from './Cosmos.module.css';

// Космос главного экрана приложения: три пятна лавы (гамма THRIVING — мосс,
// тил, амбер), звёзды по краям, виньетка. Сцена только для тёмной схемы.
const STARS = [
  [12, 20, 3, 0.55], [31, 12, 3, 0.35], [54, 18, 3, 0.65], [77, 11, 3, 0.4],
  [89, 27, 3, 0.55], [8, 46, 3, 0.45], [93, 50, 3, 0.55], [20, 77, 3, 0.4],
  [77, 79, 3, 0.3], [22, 31, 2, 0.35], [41, 8, 2, 0.25], [64, 29, 2, 0.3],
  [85, 38, 2, 0.25], [5, 29, 2, 0.3], [95, 13, 2, 0.25], [36, 88, 2, 0.22],
  [64, 88, 2, 0.28], [83, 25, 4, 0.9],
];

export function Cosmos() {
  return (
    <div className={styles.cosmos} aria-hidden="true">
      <span className={`${styles.blob} ${styles.moss}`} />
      <span className={`${styles.blob} ${styles.teal}`} />
      <span className={`${styles.blob} ${styles.amber}`} />
      {STARS.map(([x, y, size, alpha], i) => (
        <span
          key={i}
          className={styles.star}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            '--alpha': alpha,
            '--dur': `${1400 + (i % 5) * 420}ms`,
            '--delay': `${(i * 370) % 1600}ms`,
          }}
        />
      ))}
      <span className={styles.vignette} />
    </div>
  );
}
