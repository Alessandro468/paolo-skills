// =============================================================================
// Categorías del catálogo. El `slug` define la URL: /catalogo/<slug>
// La `imagen` es opcional: si la dejas vacía se muestra un placeholder con
// textura de madera. Coloca las fotos reales en /public/images/categorias/.
// =============================================================================

export interface Categoria {
  slug: string;
  nombre: string;
  tituloCorto: string;
  descripcion: string;
  detalle: string;
  imagen?: string; // p.ej. '/images/categorias/muebles.jpg'
}

export const categorias: Categoria[] = [
  {
    slug: 'muebles',
    nombre: 'Muebles',
    tituloCorto: 'Mobiliario a la medida',
    descripcion:
      'Piezas de mobiliario diseñadas para tu espacio: mesas, repisas, escritorios y muebles de sala con acabados en madera.',
    detalle:
      'Cada mueble se proyecta a la medida de tu ambiente, combinando funcionalidad y una estética cálida y atemporal.',
    imagen: '',
  },
  {
    slug: 'muebles-tv',
    nombre: 'Muebles TV',
    tituloCorto: 'Centros de TV',
    descripcion:
      'Centros de entretenimiento y paneles ranurados que integran tu televisor, iluminación LED y almacenamiento en una sola pieza.',
    detalle:
      'Diseños que ordenan el área social con paneles de madera, vitrinas iluminadas y espacios ocultos para cables y equipos.',
    imagen: '/images/productos/mueble-tv-led.jpg',
  },
  {
    slug: 'cocinas',
    nombre: 'Cocinas',
    tituloCorto: 'Cocinas a la medida',
    descripcion:
      'Cocinas integrales con materiales importados, herrajes de calidad y una distribución pensada para tu día a día.',
    detalle:
      'Optimizamos cada centímetro con módulos a la medida, superficies resistentes y acabados que elevan el corazón del hogar.',
    imagen: '/images/productos/cocina-1.jpg',
  },
  {
    slug: 'closets-y-vestiers',
    nombre: 'Closets y Vestiers',
    tituloCorto: 'Closets y vestiers',
    descripcion:
      'Closets y vestiers exclusivos con iluminación, espejos y organización a la medida para vestir con orden y elegancia.',
    detalle:
      'Desde closets funcionales hasta vestiers tipo boutique con luz ambiental, cajoneras y módulos abiertos a tu medida.',
    imagen: '/images/productos/vestier-1.jpg',
  },
  {
    slug: 'bars',
    nombre: 'Bars',
    tituloCorto: 'Bares y cavas',
    descripcion:
      'Bares y cavas a la medida con vinoteca, estantería para copas y licores, iluminación LED y zona de nevera.',
    detalle:
      'Diseñamos tu bar o cava integrado al área social: vinoteca, repisas iluminadas para copas y botellas, y espacio para nevera, con acabados elegantes en madera.',
    imagen: '/images/productos/bar-cava.jpg',
  },
];

export function getCategoria(slug: string): Categoria | undefined {
  return categorias.find((c) => c.slug === slug);
}
