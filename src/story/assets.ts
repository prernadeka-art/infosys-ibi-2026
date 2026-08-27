export function asset(name: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}assets/${name}`;
}
