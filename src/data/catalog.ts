// =============================================================================
// Catálogo de productos (placeholders).
// Para AGREGAR un producto: copia un bloque, cambia los datos y pon la ruta de
// la foto en `imagen` (coloca el archivo en /public/images/productos/).
// `categoria` debe coincidir con un `slug` de src/data/categories.ts
// =============================================================================

export interface Producto {
  id: string;
  nombre: string;
  categoria: string; // slug de la categoría
  descripcion: string;
  material?: string;
  imagen?: string; // p.ej. '/images/productos/closet-boutique.jpg'
  destacado?: boolean;
}

export const productos: Producto[] = [
  // --- Muebles ---
  {
    id: 'bar-cava',
    nombre: 'Bar y cava',
    categoria: 'muebles',
    descripcion: 'Bar con vinoteca, estantería para copas y licores, iluminación LED y zona de nevera.',
    material: 'Madera con iluminación LED',
    imagen: '/images/productos/bar-cava.jpg',
    destacado: true,
  },
  {
    id: 'mueble-sala-nordic',
    nombre: 'Mueble de sala Nórdico',
    categoria: 'muebles',
    descripcion: 'Mueble bajo de sala con repisas abiertas y acabado en nogal.',
    material: 'Madera con acabado nogal',
  },
  {
    id: 'escritorio-atelier',
    nombre: 'Escritorio Atelier',
    categoria: 'muebles',
    descripcion: 'Escritorio a la medida con cajonera y pasacables integrado.',
    material: 'Madera y herrajes importados',
  },
  {
    id: 'biblioteca-clasica',
    nombre: 'Biblioteca clásica',
    categoria: 'muebles',
    descripcion: 'Librero de piso a techo con molduras y luz cálida.',
    material: 'Madera con luz LED',
  },

  // --- Muebles TV ---
  {
    id: 'panel-tv-ranurado',
    nombre: 'Panel TV con LED',
    categoria: 'muebles-tv',
    descripcion: 'Panel geométrico con líneas de luz LED, TV integrado y mueble bajo flotante iluminado.',
    material: 'Paneles con iluminación LED',
    imagen: '/images/productos/mueble-tv-led.jpg',
    destacado: true,
  },
  {
    id: 'centro-entretenimiento-vitrina',
    nombre: 'Centro con vitrinas',
    categoria: 'muebles-tv',
    descripcion: 'Centro de TV con vitrinas laterales iluminadas y almacenamiento inferior.',
    material: 'Madera y vidrio',
  },
  {
    id: 'mueble-tv-flotante',
    nombre: 'Mueble TV flotante',
    categoria: 'muebles-tv',
    descripcion: 'Módulo suspendido con cajones push-open y luz inferior.',
    material: 'Madera con herrajes push-open',
  },

  // --- Cocinas ---
  {
    id: 'cocina-isla',
    nombre: 'Cocina con isla',
    categoria: 'cocinas',
    descripcion: 'Cocina en U con gran isla en superficie tipo mármol, torre de hornos y amplios módulos en madera.',
    material: 'Superficie tipo mármol y madera',
    imagen: '/images/productos/cocina-2.jpg',
    destacado: true,
  },
  {
    id: 'cocina-integral-mate',
    nombre: 'Cocina en L',
    categoria: 'cocinas',
    descripcion: 'Cocina en L con tope claro, cocina a gas empotrada, fregadero doble y gabinetes en madera con líneas negras.',
    material: 'Materiales importados',
    imagen: '/images/productos/cocina-1.jpg',
  },

  // --- Closets y Vestiers ---
  {
    id: 'vestier-boutique',
    nombre: 'Vestier boutique',
    categoria: 'closets-y-vestiers',
    descripcion: 'Vestier tipo boutique con módulos abiertos, cajoneras, barras y luz LED en cada nivel.',
    material: 'Madera con iluminación LED',
    imagen: '/images/productos/vestier-1.jpg',
    destacado: true,
  },
  {
    id: 'closet-corredera',
    nombre: 'Vestier en U iluminado',
    categoria: 'closets-y-vestiers',
    descripcion: 'Vestier en U con repisas, cajoneras y barras, iluminado con tiras LED cálidas.',
    material: 'Madera y herrajes importados',
    imagen: '/images/productos/vestier-2.jpg',
  },
  {
    id: 'vestier-espejo',
    nombre: 'Vestier con isla y LED',
    categoria: 'closets-y-vestiers',
    descripcion: 'Amplio vestier con módulos abiertos, zapatera iluminada y barras a la medida.',
    material: 'Madera con iluminación LED',
    imagen: '/images/productos/vestier-3.jpg',
  },
];

export function productosPorCategoria(slug: string): Producto[] {
  return productos.filter((p) => p.categoria === slug);
}

export function productosDestacados(limite = 6): Producto[] {
  return productos.filter((p) => p.destacado).slice(0, limite);
}
