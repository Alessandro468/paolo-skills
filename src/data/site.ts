// =============================================================================
// Configuración global del sitio de Madera Design.
// >>> REEMPLAZA los valores marcados con TODO por los datos reales. <<<
// =============================================================================

export const site = {
  nombre: 'Madera Design',
  eslogan: 'Madera y Estilo',
  descripcion:
    'Fabricamos muebles a la medida con diseños exclusivos y materiales importados. Muebles, centros de TV, cocinas, closets y vestiers.',

  // TODO: número real en formato internacional SIN "+", espacios ni guiones.
  // Ejemplo Venezuela: 58 + código de área + número => 584141234567
  whatsapp: '584140000000',

  // TODO: datos reales de contacto
  email: 'contacto@mueblesmaderadesign.com',
  telefono: '+58 414 000 0000',
  ciudad: 'Venezuela',
  direccion: 'Añade aquí tu dirección o showroom',
  horario: 'Lun a Vie: 9:00 a.m. – 6:00 p.m. · Sáb: 9:00 a.m. – 1:00 p.m.',

  // Enlaces
  instagram: 'https://www.instagram.com/maderadesignve',
  instagramHandle: '@maderadesignve',
  webActual: 'https://mueblesmaderadesign.com',

  // Formulario de contacto (Web3Forms). Crea una clave gratis en https://web3forms.com
  // y pégala aquí. Mientras esté vacío, el formulario enviará por WhatsApp.
  web3formsKey: '' as string,
};

/** Construye un enlace de WhatsApp con mensaje pre-llenado. */
export function whatsappLink(mensaje?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export type SiteConfig = typeof site;
