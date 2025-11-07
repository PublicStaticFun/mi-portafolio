import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='acerca' className='min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-colors duration-500'>
        <motion.h1 initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, type: "spring" }} className='text-4xl md:text-5xl font-bold mb-10 text-center'>
            Sobre mí.
        </motion.h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl'>
            <motion.div whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-200 p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                <img src={`${process.env.PUBLIC_URL}/images/twi.gif`} alt='GIF de saludo' className='w-32 h-32 rounded-xl mb-4 object-cover'/>
                    <h2 className='text-2xl font-bold mb-2 text-blue-700'>¡Hola!</h2>
                    <p className='text-base leading-relaxed'>
                        Soy <span className='font-semibold text-blue-600'>Public Static Code</span>,
                        un desarrollador web apasionado por la creación de interfaces
                        modernas, dinámicas y bien estructuradas. Disfruto unir el diseño
                        visual con la programación para construir experiencias únicas.
                    </p>   
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-pink-200 p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                <img src={`${process.env.PUBLIC_URL}/images/giphy.gif`} alt='GIF de saludo' className='w-32 h-32 rounded-xl mb-4 object-cover'/>
                    <h2 className='text-2xl font-bold mb-2 text-pink-700'>Objetivo profesional</h2>
                    <p className='text-base leading-relaxed'>
                        Mi meta es continuar creciendo como desarrollador full stack,
                        profundizando en tecnologías como React, Next.js y Django. Me motiva
                        crear aplicaciones escalables y con una gran experiencia de usuario.
                    </p>   
            </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-green-200 mt-10 p-8 rounded-2xl shadow-md w-full max-w-4xl flex flex-col md:flex-row items-center gap-6">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className='flex-shrink-0' >
                    <img src={`${process.env.PUBLIC_URL}/images/luz.jpg`} alt='Foto de perfil' className='w-48 h-48 md:w-60 md:h-60 rounded-full border-8 border-white shadow-lg object-cover' />
                </motion.div>
                <div className='text-center md:text-left flex-1'>
                    <h3 className='text-2xl font-semibold mb-4 text-green-700'>
                        Datos personales
                    </h3>
                    <ul className='space-y-2 text-base'>
                        <li><strong>Nombre:</strong> Public Static Code</li>
                        <li><strong>Ubicación:</strong> [Confidencial]</li>
                        <li><strong>Email:</strong> mario.aleprogramming@outlook.com</li>
                        <li><strong>Tecnologías:</strong> Frontend, Backend, Bases de datos</li>
                        <li><strong>Idiomas:</strong> Español, Ingles</li>
                    </ul>
                </div>
        </motion.div>

    </section>
  )
}

export default About;