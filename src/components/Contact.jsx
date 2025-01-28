import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("¡Mensaje enviado! Pronto me pondré en contacto.");
        // Aquí podrías enviar el formulario a un backend, si lo deseas.
        setFormData({ name: "", email: "", message: "" }); // Limpiar los campos después de enviar
    };

    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Contáctame</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        className="form-control mb-3"
                        placeholder="Tu correo"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        className="form-control mb-3"
                        rows="4"
                        placeholder="Tu mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="btn btn-primary btn-lg">
                        Enviar mensaje
                    </button>
                </form>

                <div className="mt-5 text-center">
                    <h4>O también puedes contactarme a través de mis redes:</h4>
                    <div className="social-links mt-4">
                        <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" className="btn btn-outline-primary mx-2">
                            LinkedIn
                        </a>
                        <a href="mailto:tu-correo@example.com" className="btn btn-outline-danger mx-2">
                            Correo
                        </a>
                        <a href="tel:+123456789" className="btn btn-outline-success mx-2">
                            Teléfono
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
