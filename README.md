# Madera Design — Sitio web

Sitio web para **Madera Design** — muebles a la medida (muebles, centros de TV,
cocinas, closets y vestiers). *Madera y Estilo.*

Construido con **[Astro](https://astro.build)** + **Tailwind CSS**. Sitio estático,
rápido y fácil de alojar gratis.

---

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior.

## Cómo correr en local

```bash
npm install       # instala dependencias (solo la primera vez)
npm run dev        # servidor de desarrollo en http://localhost:4321
```

Otros comandos:

```bash
npm run build      # genera el sitio estático en dist/
npm run preview    # previsualiza el build de producción
```

---

## Personalización (pasar de "placeholder" a tu contenido real)

Casi todo se configura editando archivos de datos, sin tocar el diseño.

### 1. Datos del negocio y WhatsApp — `src/data/site.ts`
- **`whatsapp`**: número principal (lo usa el botón flotante y los CTA). Formato
  internacional, sin `+`, espacios ni guiones. Ej. Venezuela: `584141234567`.
- **`whatsapps`**: lista de números que se muestran en Contacto y el pie de
  página. Ya están cargados los dos números reales; edítalos aquí si cambian.
- `email`, `telefono`, `ciudad`, `direccion`, `horario` (correo/dirección/horario
  siguen siendo placeholders — actualízalos).
- `instagram`, `webActual`.

### 2. Categorías — `src/data/categories.ts`
Textos y la foto de portada de cada categoría (campo `imagen`).

### 3. Productos del catálogo — `src/data/catalog.ts`
Para **agregar un producto**: copia un bloque, cambia los datos y pon la ruta de
la foto en `imagen`. El campo `categoria` debe coincidir con el `slug` de una
categoría. Marca `destacado: true` para mostrarlo en la portada.

### 4. Formulario de contacto
El formulario **envía por WhatsApp**: al completar y enviar, abre WhatsApp (número
principal) con los datos ya escritos en el mensaje. No requiere ningún servicio
externo ni correo.

> ¿Quieres que además llegue por correo? Se puede conectar a
> [Web3Forms](https://web3forms.com) o Netlify Forms más adelante; pídelo y se activa.

### 5. Imágenes y logo
- Coloca las fotos en `public/images/` (ver `public/images/README.md` para la
  estructura sugerida) y enlázalas en los archivos de datos.
- El logo M/D está recreado como SVG en `src/components/Logo.astro`. Si tienes el
  archivo oficial, puedes reemplazarlo ahí o usar una imagen.

### 6. Colores y tipografía
- Paleta de marca: `tailwind.config.mjs` (y variables en `src/styles/global.css`).
- Fuentes: **Cormorant** (títulos), **Inter** (cuerpo), **Marcellus** (marca),
  auto-alojadas con `@fontsource` (sin llamadas externas).

---

## Estructura del proyecto

```
src/
├── components/     # Header, Footer, Hero, tarjetas, formulario, logo, etc.
├── data/           # site.ts, categories.ts, catalog.ts  ← edita aquí
├── layouts/        # BaseLayout.astro (SEO, header/footer)
├── pages/          # index, nosotros, contacto, catalogo/*
└── styles/         # global.css (tokens de marca)
public/
├── favicon.svg
└── images/         # tus fotos y logo
```

Páginas: Inicio · Catálogo · Categoría (`/catalogo/<slug>`) · Nosotros · Contacto.

---

## Desplegar (publicar en internet)

El sitio es estático (`npm run build` → carpeta `dist/`). Opciones gratuitas:

- **Netlify** o **Vercel**: conecta el repositorio; build `npm run build`, carpeta
  de salida `dist`. (En Netlify también puedes usar *Netlify Forms* como
  alternativa al formulario.)
- **GitHub Pages**: publica el contenido de `dist/`. Si el sitio no queda en la
  raíz del dominio, ajusta `site`/`base` en `astro.config.mjs`.

Recuerda actualizar `site` en `astro.config.mjs` con tu dominio final para que el
`sitemap` y las URLs canónicas sean correctas.

---

## Pendientes para dejarlo 100 % real
- [x] Números de WhatsApp reales (dos) — `src/data/site.ts`.
- [x] Fotos reales de Muebles, Muebles TV y Closets/Vestiers + imagen para redes.
- [ ] **Fotos de Cocinas** (única categoría que sigue con placeholder).
- [ ] Correo, dirección/showroom y horario reales (`src/data/site.ts`).
- [ ] Logo oficial en alta resolución (opcional; ya hay una recreación fiel en SVG).
- [ ] Más productos por categoría, si quieres ampliar el catálogo (`src/data/catalog.ts`).
