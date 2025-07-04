    document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreContacto").value.trim();
    const email = document.getElementById("emailContacto").value.trim();
    const mensaje = document.getElementById("mensajeContacto").value.trim();

    if (!nombre || !email || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
    }

    fetch("https://script.google.com/macros/library/d/1tLMc5N0s5-pDH3EP6zsk-gLzvjNiKqiJeUk4xxDoMMNhrtEdVLo4y8Jg/1", {
    method: "POST",
    body: JSON.stringify({ nombre, email, mensaje }),
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then(res => res.json())
    .then(data => {
    if (data.status === "OK") {
        alert("¡Gracias por tu mensaje! Pronto te contactaremos.");
        document.getElementById("formContacto").reset();
    } else {
        alert("Ocurrió un error al enviar tu mensaje.");
    }
    })
    .catch(err => {
    console.error(err);
    alert("Error al enviar. Intenta más tarde.");
    });
}); 