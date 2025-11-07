import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // Espera medio segundo antes de salir
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-blue-700 text-white z-50">
      {/* GIF */}
      <motion.img
        src="/images/two.gif" // 👈 Guarda tu GIF en /public/loading.gif
        alt="Cargando..."
        className="w-24 h-24 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Barra de progreso */}
      <div className="w-64 h-3 bg-white/20 rounded-full overflow-hidden shadow-lg">
        <motion.div
          className="h-full bg-blue-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        />
      </div>

      <p className="mt-3 text-sm text-gray-200 font-medium">
        Cargando... {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;
