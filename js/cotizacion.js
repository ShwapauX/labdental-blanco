// Esperamos a que se envíe el formulario con id "formCotizacion"
document.getElementById("formCotizacion").addEventListener("submit", function (e) {
  
  // Evita que la página se recargue automáticamente al enviar el formulario
  e.preventDefault();

  // Obtenemos los valores escritos por el usuario en cada campo del formulario
  const nombre = document.getElementById("nombre").value;         // Nombre completo
  const servicio = document.getElementById("servicio").value;     // Tipo de servicio elegido
  const detalles = document.getElementById("detalles").value;     // Descripción de necesidades
  const fecha = document.getElementById("fecha").value;           // Fecha estimada
  const telefono = document.getElementById("telefono").value;     // Teléfono de contacto

  // Creamos un mensaje que vamos a enviar por WhatsApp
  const mensaje = `Hola, soy ${nombre}. Deseo una cotización para: ${servicio}.
Mis necesidades son: ${detalles}
Fecha estimada de recolección: ${fecha}
Mi número de WhatsApp es: ${telefono}`;

  // Número de WhatsApp del laboratorio (debes colocar el tuyo, con clave internacional sin "+" ni espacios)
  const numeroWhatsApp = "525538771192"; // 52 = México

  // Creamos una URL para abrir WhatsApp con el mensaje precargado
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  // Abrimos esa URL en una nueva pestaña del navegador
  window.open(url, "_blank");
});

