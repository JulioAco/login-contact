    function login(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener valores de los campos
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Validar credenciales
        if (email === "contacto.lotusmint@gmail.com" && password === "123") {
            let newTab = window.open("", "_blank"); // Abrir nueva pestaña vacía
            if (newTab) {
                newTab.location.href = "https://www.google.com"; // Redirigir la nueva pestaña
                document.getElementById("login-form").reset(); // Reiniciar formulario
            } else {
                alert("El navegador bloqueó la apertura de una nueva pestaña. Permita ventanas emergentes e inténtelo de nuevo.");
            }
        } else {
            alert("Credenciales incorrectas. Intenta de nuevo.");
        }
    }
