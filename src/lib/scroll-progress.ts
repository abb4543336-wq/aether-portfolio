/**
 * Tiny shared store for page scroll progress (0..1).
 * Read imperatively inside the r3f render loop to avoid React re-renders.
 */
export const scrollState = { progress: 0 };

export function readScrollProgress() {
  if (typeof window === "undefined") return 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / max));
}

/** Maps a global progress value into a local 0..1 range. */
export function rangeProgress(p: number, start: number, end: number) {
  if (end === start) return 0;
  return Math.min(1, Math.max(0, (p - start) / (end - start)));
}

export const damp = (current: number, target: number, lambda: number, dt: number) =>
  current + (target - current) * (1 - Math.exp(-lambda * dt));
