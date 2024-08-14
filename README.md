# Proyecto de Mapa con Geolocalización

Este proyecto es una aplicación web simple que muestra un mapa interactivo utilizando la biblioteca Leaflet. La aplicación permite obtener la ubicación actual del usuario y mostrarla en el mapa con un marcador personalizado.

## Características

- Muestra un mapa centrado en una ubicación predeterminada.
- Permite al usuario obtener su ubicación actual mediante la geolocalización del navegador.
- Marca la ubicación actual del usuario con un punto verde en el mapa.

## Requisitos

- Un servidor web para alojar los archivos HTML, CSS, y JavaScript.
- Conexión a Internet para cargar los mapas desde OpenStreetMap.

## Instalación

1. Clona este repositorio o descarga los archivos.
2. Coloca los archivos en tu servidor web.
3. Asegúrate de que los archivos `index.html`, `script.js` y `styles.css` estén en el mismo directorio.

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. El mapa se cargará con la ubicación predeterminada.
3. Al cargar la página, la aplicación intentará obtener tu ubicación actual. Si se otorgan permisos, tu ubicación será mostrada en el mapa.

## Estructura de Archivos

- `index.html`: Estructura HTML de la página.
- `script.js`: Contiene el código JavaScript para la funcionalidad de geolocalización y manejo del mapa.
- `styles.css`: Define los estilos de la página y del mapa.
- `README.md`: Instrucciones y descripción del proyecto.

## Tecnologías Utilizadas

- **HTML**: Para la estructura del contenido.
- **CSS**: Para el diseño y estilo de la página.
- **JavaScript**: Para la funcionalidad de la geolocalización y el manejo del mapa.
- **Leaflet**: Biblioteca JavaScript para mapas interactivos.
- **OpenStreetMap**: Servicio de mapas utilizado para mostrar el mapa en la aplicación.

## Permisos de Geolocalización

Para que la funcionalidad de geolocalización funcione correctamente, es necesario que el usuario otorgue permisos de ubicación en su navegador. Si los permisos son denegados, se mostrará un mensaje de error.

## Personalización

Si deseas cambiar la ubicación predeterminada del mapa, puedes modificar las coordenadas en el archivo `script.js`:

```javascript
let map = L.map('map').setView([LATITUD, LONGITUD], ZOOM);
