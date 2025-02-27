function login(event) {
            event.preventDefault(); // Evita que el formulario se envíe
            
            // Obtener valores de los campos
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Validar credenciales
            if (email === "contacto.lotusmint@gmail.com" && password === "123") {
                window.location.href = "https://www.google.com"; // Redirige a Google
            } else {
                alert("Credenciales incorrectas. Intenta de nuevo.");
            }
        }