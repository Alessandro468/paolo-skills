# Imágenes del sitio

Coloca aquí los archivos reales. Mientras una ruta esté vacía en los datos, el
sitio muestra un placeholder con textura de madera, así que puedes ir
reemplazando poco a poco.

## Estructura sugerida

```
public/images/
├── logo.svg                 # Logo oficial M/D (opcional; ver src/components/Logo.astro)
├── og-default.jpg           # Imagen para compartir en redes (1200×630)
├── categorias/
│   ├── muebles.jpg
│   ├── muebles-tv.jpg
│   ├── cocinas.jpg
│   └── closets-y-vestiers.jpg
└── productos/
    ├── vestier-boutique.jpg
    ├── panel-tv-ranurado.jpg
    └── ...
```

## Cómo enlazar una imagen

1. Copia el archivo dentro de `public/images/...`.
2. Abre el dato correspondiente y pon la ruta (empieza con `/images/...`):
   - Categorías → `src/data/categories.ts`, campo `imagen`.
   - Productos → `src/data/catalog.ts`, campo `imagen`.

Ejemplo:

```ts
imagen: '/images/productos/vestier-boutique.jpg',
```

## Recomendaciones

- Formato: `.jpg` o `.webp` para fotos; `.svg` o `.png` para el logo.
- Fotos de producto: proporción cercana a 4:3. Categorías: 3:4 (vertical).
- Optimiza el peso (idealmente < 300 KB por foto).
