// Inicialización del mapa en la ubicación predeterminada
let map = L.map('map').setView([42.6056, -5.6416], 13);

// Agregar capa de mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Función para obtener la ubicación actual del usuario
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("La geolocalización no es soportada por este navegador.");
    }
}

// Función para mostrar la posición en el mapa
function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    // Agregar marcador en la ubicación actual
    let marker = L.marker([lat, lon], { icon: L.divIcon({ className: 'green-point' }) }).addTo(map)
        .bindPopup("Ubicación actual")
        .openPopup();

    // Centramos el mapa en la ubicación actual
    map.setView([lat, lon], 15);
}

// Función para manejar errores de geolocalización
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("El usuario denegó la solicitud de geolocalización.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La información de ubicación no está disponible.");
            break;
        case error.TIMEOUT:
            alert("La solicitud de ubicación ha expirado.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Un error desconocido ocurrió.");
            break;
    }
}

// Obtener ubicación actual al cargar la página
getLocation();