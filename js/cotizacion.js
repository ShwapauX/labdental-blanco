// Esperamos a que se envíe el formulario con id "formCotizacion"
document.getElementById("formCotizacion").addEventListener("submit", function (e) {
  
  // Evita que la página se recargue automáticamente al enviar el formulario
  e.preventDefault();

  // Obtenemos los valores escritos por el usuario en cada campo del formulario
  const nombre = document.getElementById("nombre").value.trim();         // Nombre completo
  const servicio = document.getElementById("servicio").value.trim();     // Tipo de servicio elegido
  const detalles = document.getElementById("detalles").value.trim();     // Descripción de necesidades
  const fecha = document.getElementById("fecha").value.trim();           // Fecha estimada
  const telefono = document.getElementById("telefono").value.trim();     // Teléfono de contacto

  // Validamos que ninguno esté vacío
  if (!nombre || !servicio || !detalles || !fecha || !telefono) {
    alert("Por favor, completa todos los campos del formulario.");
    return; // detenemos el proceso si falta algo
  }

  // Validación básica del número de WhatsApp (debe tener al menos 10 dígitos)
  if (!/^\d{10,15}$/.test(telefono)) {
    alert("Ingresa un número de WhatsApp válido (solo números, sin espacios ni símbolos).");
    return;
  }

  // Creamos un mensaje que vamos a enviar por WhatsApp
  const mensaje = `Hola, soy ${nombre}. Deseo una cotización para: ${servicio}.
Mis necesidades son: ${detalles}
Fecha estimada de recolección: ${fecha}
Mi número de WhatsApp es: ${telefono}`;

  // Número de WhatsApp del laboratorio
  const numeroWhatsApp = "525538771192";

  // Creamos una URL para abrir WhatsApp con el mensaje precargado
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  // Abrimos esa URL en una nueva pestaña del navegador
  window.open(url, "_blank");
  // Reiniciamos el formulario después del envío
  document.getElementById("formCotizacion").reset();
});


