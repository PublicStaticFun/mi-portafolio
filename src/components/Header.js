import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'

function Header() {
  return (
    <>
      <nav className='fixed top-0 w-full bg-gradient-to-r from-pink-500 to-blue-900 text-white p-4 z-10 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-xl font-bold'>Mi Portafolio</h1>
            <ul className='flex space-x-6'>
                <li><Link to='inicio' smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>Inicio</Link></li>
                <li><Link to='acerca' smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>Acerca</Link></li>
                <li><Link to='habilidades' smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>Habilidades</Link></li>
                <li><Link to='proyectos' smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>Proyectos</Link></li>
                <li><Link to='contacto' smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>Contacto</Link></li>
            </ul>
        </div>
      </nav>

      <section id='inicio' className='min-h-screen flex flex-col justify-center items-center text-white pt-20'>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='text-center'>
            <motion.h1 className='text-5xl font-bold mb-4' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 100 }}>
                ¡Hola! Soy Public Static Code.
            </motion.h1>
            <motion.p className='text-xl mb-8' initial={{ opacity:0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                Desarrollador creativo y apasionado por el código.
            </motion.p>
            <div className='flex flex-wrap justify-center gap-4 mt-6'>
                <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#ff69b4" }} 
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center"
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                >
                    <img 
                        src="/ironmouse.png"  // Imagen desde public/
                        alt="Icono de Ironmouse" 
                        className="w-8 h-8 mr-2"  // Tamaño pequeño con margen
                    />¡Contactame!  {/* Texto fuera del <img> */}
                </motion.button>
                <br />

                <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#ffa500" }} 
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center"
                onClick={() => window.open("/java.pdf", "_blank")}
                >
                    <img 
                        src="/moxxie.png"  // Imagen desde public/
                        alt="Icono de Moxxie" 
                        className="w-8 h-8 mr-2"  // Tamaño pequeño con margen
                    />¡Curriculum!  {/* Texto fuera del <img> */}
                </motion.button>
            </div>
        </motion.div>
      </section>
    </>
  )
}

export default Header;