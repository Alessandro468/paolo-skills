// =============================================================================
// Configuración global del sitio de Madera Design.
// >>> REEMPLAZA los valores marcados con TODO por los datos reales. <<<
// =============================================================================

export const site = {
  nombre: 'Madera Design',
  eslogan: 'Madera y Estilo',
  descripcion:
    'Fabricamos muebles a la medida con diseños exclusivos y materiales importados. Muebles, centros de TV, cocinas, closets y vestiers.',

  // Números de WhatsApp en formato internacional SIN "+", espacios ni guiones.
  // `whatsapp` es el principal (lo usa el botón flotante y los CTA).
  whatsapp: '584125515196',
  whatsappAlt: '584143038227',

  // Ambos números para mostrar en Contacto y pie de página.
  whatsapps: [
    { numero: '584125515196', etiqueta: '+58 412 551 5196' },
    { numero: '584143038227', etiqueta: '+58 414 303 8227' },
  ],

  email: 'maderadesignve@gmail.com',
  razonSocial: 'Madera Design VE, C.A.',
  // TODO: teléfono/ciudad/dirección/horario reales (aún placeholders)
  telefono: '+58 412 551 5196',
  ciudad: 'Caracas, Venezuela',
  direccion: 'Piedra Azul, municipio Baruta, Caracas',
  horario: 'Lunes a viernes: 8:00 a.m. – 5:00 p.m.',

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
