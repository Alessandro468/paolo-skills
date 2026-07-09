// Antepone la ruta base del sitio (import.meta.env.BASE_URL) a rutas internas.
// Necesario porque en GitHub Pages el sitio vive en una subruta (/paolo-skills/).
// Uso: withBase('/catalogo') -> '/paolo-skills/catalogo'
//      withBase('/images/logo.png') -> '/paolo-skills/images/logo.png'
// No tocar enlaces externos (https://, mailto:, tel:, #...).
const BASE = import.meta.env.BASE_URL; // termina con '/' (p.ej. '/paolo-skills/')

export function withBase(path: string): string {
  if (!path) return BASE;
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }
  return BASE.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}

/** Ruta del pathname actual sin la base, para comparaciones de navegación activa. */
export function stripBase(pathname: string): string {
  const b = BASE.replace(/\/$/, '');
  const p = pathname.startsWith(b) ? pathname.slice(b.length) : pathname;
  return p || '/';
}
