import React from "react";
import { motion } from "framer-motion";
import { Github, Youtube, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-20">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white">
                        PublicStaticFun<span className="text-blue-500">.</span>
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Desarrollador Full Stack | React • Django • Tailwind
                    </p>
                </div>
                <div className="flex space-x-6">
                    <motion.a href="https://github.com/PublicStaticFun" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="hover:text-blue-400 transition">
                        <Github size={22} />
                    </motion.a>
                     <motion.a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="hover:text-blue-400 transition">
                        <Facebook size={22} />
                    </motion.a>
                     <motion.a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="hover:text-blue-400 transition">
                        <Youtube size={22} />
                    </motion.a>
                </div>
            </motion.div>
            <div className="border-t border-gray-700 my-6"></div>
            <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Public Static Fun. Todos los derechos reservados.
            </motion.div>
        </footer>
    )
}

export default Footer;