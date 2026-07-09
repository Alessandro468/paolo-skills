/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta real de Madera Design (extraída del feed de Instagram)
        espresso: '#2E211A', // marrón más oscuro (fondos oscuros, texto sobre claro)
        chocolate: '#4A3524', // marrón principal de los posts
        cacao: '#6B4A32', // marrón medio
        carbon: '#1A1512', // casi negro cálido
        arena: '#D9C7B2', // beige neutro
        crema: '#F3ECE3', // fondo claro cálido
        hueso: '#FBF7F1', // fondo más claro
        oro: '#B08D4F', // dorado del logo M/D
        'oro-claro': '#C9A96A', // dorado claro (hover / detalles)
      },
      fontFamily: {
        display: ['Cormorant', 'Georgia', 'serif'],
        marca: ['Marcellus', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(26, 21, 18, 0.45)',
        card: '0 24px 60px -30px rgba(26, 21, 18, 0.55)',
      },
      backgroundImage: {
        // Textura firma: listones de madera verticales (paneles ranurados)
        slats:
          'repeating-linear-gradient(90deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) 1px, transparent 1px, transparent 13px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 6px, transparent 6px, transparent 13px)',
      },
    },
  },
  plugins: [],
};
