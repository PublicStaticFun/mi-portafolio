import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Youtube, Facebook, Mail } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de envío
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      form.current.reset();
    }, 1200);
  };

  return (
    <section
      id="contacto"
      className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-gray-800 px-4 py-14"
    >
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600"
      >
        ¡Contáctame! 💌
      </motion.h1>

      {/* Contenedor principal */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Formulario */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full space-y-3"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Envíame un mensaje
          </h2>

          <div>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="tunombre@correo.com"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows="3"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white font-medium py-2 px-4 rounded-lg text-sm shadow-md transition`}
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </motion.button>

          {sent && (
            <p className="text-green-600 font-medium text-sm mt-2">
              ✅ ¡Tu mensaje fue enviado con éxito! (simulado)
            </p>
          )}
        </motion.form>

        {/* Redes Sociales */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start space-y-4"
        >
          <h2 className="text-lg font-semibold text-blue-600 mb-1">
            Mis redes:
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://github.com/PublicStaticFun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 text-sm transition"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 text-sm transition"
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 text-sm transition"
            >
              <Youtube size={18} />
              <span>YouTube</span>
            </a>

            <a
              href="mailto:mario.aleprogramming@outlook.com"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 text-sm transition"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
