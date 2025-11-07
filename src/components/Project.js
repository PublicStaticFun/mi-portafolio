import React from "react";
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData.json';

function Project() {
    const projectList = projectsData.projectsData;

    return (
        <section id="proyectos" className="min-h-screen flex flex-col justify-center items-center text-white pt-20">
            <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center"
                  >
                    Proyectos
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projectList.map((project, index) => (
                    <motion.div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-sm mb-4">{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                            Ver Proyecto
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Project;