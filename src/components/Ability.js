import React, { useRef } from "react";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

// 🧮 Calcula años automáticamente
const getExperienceYears = (startYear) => {
  const years = currentYear - startYear;
  return years < 1 ? 0 : years;
};

// 🧩 Datos de habilidades
const skillsData = {
  Frontend: {
    color: "from-blue-400 to-blue-600",
    skills: [
      { name: "React", logo: `${process.env.PUBLIC_URL}/logos/react.svg`, startYear: 2024 },
      { name: "HTML5", logo: `${process.env.PUBLIC_URL}/logos/html.svg`, startYear: 2021 },
      { name: "CSS3", logo: `${process.env.PUBLIC_URL}/logos/css.svg`, startYear: 2021 },
    ],
  },
  Backend: {
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "Django", logo: `${process.env.PUBLIC_URL}/logos/django.svg`, startYear: 2025 },
      { name: "Python", logo: `${process.env.PUBLIC_URL}/logos/python.svg`, startYear: 2023 },
    ],
  },
  "Base de Datos": {
    color: "from-green-400 to-emerald-600",
    skills: [
      { name: "PostgreSQL", logo: `${process.env.PUBLIC_URL}/logos/postgresql.svg`, startYear: 2025 },
    ],
  },
  "Otros lenguajes": {
    color: "from-purple-400 to-purple-600",
    skills: [
      { name: "GIT", logo: `${process.env.PUBLIC_URL}/logos/git.svg`, startYear: 2025 },
      { name: "npm", logo: `${process.env.PUBLIC_URL}/logos/npm.svg`, startYear: 2023 },
      { name: "json", logo: `${process.env.PUBLIC_URL}/logos/json.svg`, startYear: 2023 },
    ],
  },
};

const Habilidades = () => {
  // 🧭 Referencias de scroll para cada categoría
  const scrollRefs = {
    Frontend: useRef(null),
    Backend: useRef(null),
    "Base de Datos": useRef(null),
  };

  // Función para moverse horizontalmente
  const scroll = (category, direction) => {
    const container = scrollRefs[category].current;
    if (container) {
      const scrollAmount = direction === "next" ? 250 : -250;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="habilidades"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-50 text-gray-800"
    >
      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Habilidades Técnicas
      </motion.h1>

      <div className="space-y-24 w-full max-w-6xl">
        {Object.entries(skillsData).map(([category, { color, skills }]) => (
          <div key={category} className="relative">
            {/* Nombre de categoría */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-2xl font-bold mb-8 text-center bg-gradient-to-r ${color} text-transparent bg-clip-text`}
            >
              {category}
            </motion.h2>

            {/* Botones de navegación */}
            <button
              onClick={() => scroll(category, "prev")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition z-10"
            >
              ◀
            </button>

            <button
              onClick={() => scroll(category, "next")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition z-10"
            >
              ▶
            </button>

            {/* Contenedor scroll horizontal centrado */}
            <div
              ref={scrollRefs[category]}
              className="overflow-x-auto scroll-smooth scrollbar-hide"
            >
              <div className="flex justify-center space-x-6 px-12 py-2 min-w-max">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`relative bg-gradient-to-br ${color} p-[2px] rounded-2xl shadow-lg`}
                  >
                    <div className="bg-white rounded-2xl p-4 flex flex-col items-center w-36 text-center h-full">
                      <motion.img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 mb-2 object-contain"
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      />
                      <p className="text-sm font-semibold mb-1">
                        {skill.name}
                      </p>
                      <p className="text-xl font-bold text-gray-800">
                        {getExperienceYears(skill.startYear)}
                      </p>
                      <p className="text-xs text-gray-600">
                        Años de experiencia
                      </p>
                    </div>

                    {/* Brillo al pasar */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-white opacity-0"
                      whileHover={{
                        opacity: 0.2,
                        background:
                          "linear-gradient(120deg, rgba(255,255,255,0.5), transparent)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
