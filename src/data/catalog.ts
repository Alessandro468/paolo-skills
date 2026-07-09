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
    id: 'mueble-sala-nordic',
    nombre: 'Mueble de sala Nórdico',
    categoria: 'muebles',
    descripcion: 'Mueble bajo de sala con repisas abiertas y acabado en nogal.',
    material: 'Madera con acabado nogal',
    destacado: true,
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
    nombre: 'Panel TV ranurado',
    categoria: 'muebles-tv',
    descripcion: 'Panel de listones de madera con TV integrado e iluminación posterior.',
    material: 'Listones de madera + LED',
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
    id: 'cocina-integral-mate',
    nombre: 'Cocina integral mate',
    categoria: 'cocinas',
    descripcion: 'Cocina en línea con gabinetes mate, tope resistente y organización interna.',
    material: 'Materiales importados',
    destacado: true,
  },
  {
    id: 'cocina-isla',
    nombre: 'Cocina con isla',
    categoria: 'cocinas',
    descripcion: 'Distribución con isla central, almacenamiento amplio y zona de desayuno.',
    material: 'Madera y superficies premium',
  },

  // --- Closets y Vestiers ---
  {
    id: 'vestier-boutique',
    nombre: 'Vestier boutique',
    categoria: 'closets-y-vestiers',
    descripcion: 'Vestier tipo boutique con módulos abiertos, espejo y luz ambiental.',
    material: 'Madera con iluminación LED',
    destacado: true,
  },
  {
    id: 'closet-corredera',
    nombre: 'Closet puertas corredera',
    categoria: 'closets-y-vestiers',
    descripcion: 'Closet con puertas corredera, cajoneras y organización a la medida.',
    material: 'Madera y herrajes importados',
  },
  {
    id: 'vestier-espejo',
    nombre: 'Vestier con espejo',
    categoria: 'closets-y-vestiers',
    descripcion: 'Espejo iluminado, repisas para calzado y cajones forrados.',
    material: 'Madera, espejo y LED',
  },
];

export function productosPorCategoria(slug: string): Producto[] {
  return productos.filter((p) => p.categoria === slug);
}

export function productosDestacados(limite = 6): Producto[] {
  return productos.filter((p) => p.destacado).slice(0, limite);
}
