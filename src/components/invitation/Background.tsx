"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export default function Background() {

  const petals = useMemo(() => {

    return Array.from({ length: 20 }).map(() => ({
      width: 8 + Math.random() * 8,
      height: 12 + Math.random() * 10,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 5,
      delay: Math.random() * 5,
    }))

  }, [])


  return (

    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        z-0
      "
    >


      {/* Fondo */}

      <motion.div

        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "

        style={{
          backgroundImage:"url('/images/bg.jpg')",
        }}

        animate={{
          scale:[1,1.15,1],
        }}

        transition={{
          duration:18,
          repeat:Infinity,
          repeatType:"reverse",
          ease:"easeInOut",
        }}

      />


      {/* Capa gris transparente */}

      <div
        className="
          absolute
          inset-0
          bg-black/10
        "
      />


      {/* Pétalos */}

      {
        petals.map((petal,i)=>(

          <motion.div

            key={i}

            className="
              absolute
              rounded-tl-full
              rounded-br-full
              bg-[#f8eedb]
            "

            style={{

              width:`${petal.width}px`,

              height:`${petal.height}px`,

              left:`${petal.left}%`,

            }}


            initial={{
              y:-30,
              rotate:0,
              opacity:0,
            }}


            animate={{

              y:700,

              x:[
                0,
                30,
                -20,
                10
              ],

              rotate:[
                0,
                180,
                360
              ],

              opacity:[
                0,
                0.8,
                0
              ]

            }}


            transition={{

              duration:petal.duration,

              delay:petal.delay,

              repeat:Infinity,

              ease:"linear",

            }}

          />

        ))
      }


    </div>

  )

}