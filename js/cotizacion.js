/*document.getElementById("formCotizacion").addEventListener("submit", function (e) {
  e.preventDefault(); // Previene que la página recargue

  // Capturamos valores del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const servicio = document.getElementById("servicio").value.trim();
  const detalles = document.getElementById("detalles").value.trim();
  const fecha = document.getElementById("fecha").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  // Validamos que todos los campos estén llenos
  if (!nombre || !servicio || !detalles || !fecha || !telefono) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Enviamos datos a tu Google Sheet mediante Apps Script
  fetch("https://script.google.com/macros/s/AKfycbyI1vol0V8ZMwaD2GUde7bXLLv5SpzrqbPoYTR6JmE23tTeJPiVw6MLGt07GigLv3xuYw/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre,
      servicio,
      detalles,
      fecha,
      telefono
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "OK") {
      // Si se guardó correctamente en Sheets, enviamos a WhatsApp
      const mensaje = `Hola, soy ${nombre}. Deseo una cotización para: ${servicio}.
Mis necesidades son: ${detalles}
Fecha estimada de recolección: ${fecha}
Mi número de WhatsApp es: ${telefono}`;

      const whatsappURL = `https://wa.me/525538771192?text=${encodeURIComponent(mensaje)}`;
      window.open(whatsappURL, "_blank"); // Abre WhatsApp

      document.getElementById("formCotizacion").reset(); // Limpia el formulario
    } else {
      alert("Ocurrió un error al guardar en Google Sheets.");
    }
  })
  .catch(err => {
    console.error("Error al enviar:", err);
    alert("No se pudo enviar tu solicitud. Intenta más tarde.");
  });
});*/

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formCotizacion');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const servicio = document.getElementById('servicio').value;
        const detalles = document.getElementById('detalles').value;
        const fecha = document.getElementById('fecha').value;
        const telefono = document.getElementById('telefono').value;
        
        // Validar los campos
        if (!nombre || !servicio || !detalles || !fecha || !telefono) {
            alert('Por favor completa todos los campos');
            return;
        }
        
        // Formatear el mensaje para WhatsApp
        const mensajeWhatsApp = `Hola, soy ${nombre} y estoy interesado en el servicio de ${servicio}. 
        Detalles: ${detalles}
        Fecha deseada para recolección: ${fecha}
        Mi WhatsApp: ${telefono}`;
        
        // Codificar el mensaje para URL
        const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
        
        // Redirigir a WhatsApp
        window.open(`https://wa.me/525538771192?text=${mensajeCodificado}`, '_blank');
        
        // Opcional: Guardar en Google Sheets (usa el método que te mostré antes)
        guardarEnGoogleSheets({ nombre, servicio, detalles, fecha, telefono });
        
        // Opcional: Resetear el formulario
        formulario.reset();
    });
    
    // Función para guardar en Google Sheets (opcional)
    function guardarEnGoogleSheets(datos) {
        // Reemplaza con tu URL de Apps Script
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbyI1vol0V8ZMwaD2GUde7bXLLv5SpzrqbPoYTR6JmE23tTeJPiVw6MLGt07GigLv3xuYw/exec';
        
        fetch(scriptUrl, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log('Datos guardados:', data))
        .catch(error => console.error('Error:', error));
    }
});