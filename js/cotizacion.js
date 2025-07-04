document.getElementById("formCotizacion").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const servicio = document.getElementById("servicio").value.trim();
  const detalles = document.getElementById("detalles").value.trim();
  const fecha = document.getElementById("fecha").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  if (!nombre || !servicio || !detalles || !fecha || !telefono) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Enviar a Google Sheets
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
  .then(response => response.json())
  .then(data => {
    if (data.status === "OK") {
      alert("¡Cotización enviada y registrada!");
      document.getElementById("formCotizacion").reset();

      // Abrir WhatsApp automáticamente
      const mensaje = `Hola, soy ${nombre}. Deseo una cotización para: ${servicio}.
Mis necesidades son: ${detalles}
Fecha estimada de recolección: ${fecha}
Mi número de WhatsApp es: ${telefono}`;
      const whatsappURL = `https://wa.me/525538771192?text=${encodeURIComponent(mensaje)}`;
      window.open(whatsappURL, "_blank");
    } else {
      alert("Hubo un error al guardar los datos.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error al enviar la cotización.");
  });
});

