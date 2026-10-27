# Portafolio

Portafolio de Jhonatan Rueda, hecho con HTML5, CSS3 y JavaScript puro.

## Estructura

```
.
├── index.html
├── css/style.css
├── js/main.js
├── assets/
└── README.MD
```

`assets/` está reservada para archivos estáticos. La fotografía personal todavía no está en esa carpeta: la presentación muestra un marcador con las iniciales JR.

## Abrir en local

Desde esta carpeta:

```bash
python -m http.server 8080
```

Abre [http://localhost:8080](http://localhost:8080).

También puedes abrir `index.html` directamente en el navegador.

## Contenido pendiente de completar

- Fotografía: en `index.html`, sustituye el marcador del `figure.retrato` por `<img src="assets/retrato.jpg" alt="Retrato de Jhonatan Rueda">` cuando el archivo exista.
- Sobre mí: el párrafo de `#sobre-mi` es un espacio editable. No contiene una biografía.
- Correo y LinkedIn: aparecen como «Pendiente de completar». GitHub apunta a https://github.com/jhonrue28.
- La paleta oscura está en `css/style.css`: fondo `#080B12`, acento `#63D8FF`, texto `#F1F5F9` y texto secundario `#A8B3C7`.

## Comprobar

1. El fondo es continuo y negro, `#080B12`. El celeste `#63D8FF` solo aparece en acentos. El pie dice «Jhonatan Rueda».
2. El menú lleva a Inicio, Sobre mí, Proyectos, Skills y Contacto.
3. Cada proyecto abre su repositorio de GitHub.
4. En Skills, la descripción aparece al pasar el cursor, al enfocar con el teclado y al pulsar en una pantalla táctil.
5. Con JavaScript desactivado, el texto sigue visible. Las animaciones de aparición solo se aplican si el script se ejecuta y el sistema no pide movimiento reducido.
