"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function BookInvitation() {
  const [showMessage, setShowMessage] = useState(true)

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a0f12]">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-[#efe6d6] px-8 py-6 shadow-2xl"
          >
            <h1 className="text-2xl font-semibold text-[#5a2d2d]">
              Hola, este es un mensaje de prueba.
            </h1>

            <p className="mt-3 text-[#6b4a4a]">
              Si ves este mensaje, el componente funciona correctamente.
            </p>

            <button
              onClick={() => setShowMessage(false)}
              className="mt-6 rounded-lg bg-[#5a2d2d] px-5 py-2 text-white hover:bg-[#6d3a3a]"
            >
              Cerrar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}