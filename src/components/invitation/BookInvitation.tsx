"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Pages from "./Pages"

export default function BookInvitation() {

  const [open, setOpen] = useState(false)
  const [pagesVisible, setPagesVisible] = useState(false)


  function openBook() {

    if (open) return

    setOpen(true)
    setPagesVisible(true)

  }


  return (

    <main

      className="
        w-full
        min-h-[100dvh]
        flex
        items-center
        justify-center
        bg-[#efe6d6]
        overflow-hidden
        p-4
      "

    >


      <div

        onClick={openBook}

        className="
          relative
          w-[90vw]
          max-w-[700px]
          aspect-[330/554]
          cursor-pointer
          select-none
        "

        style={{
          perspective:"1800px"
        }}

      >


        {/* ============================= */}
        {/* PÁGINAS */}
        {/* ============================= */}

        <AnimatePresence>

          {pagesVisible && (

            <motion.div

              className="
                absolute
                inset-0
                z-10
              "

              initial={{
                opacity:0,
                scale:0.98
              }}

              animate={{
                opacity:1,
                scale:1
              }}

              transition={{
                duration:0.3
              }}

            >

              <Pages />

            </motion.div>

          )}

        </AnimatePresence>



        {/* ============================= */}
        {/* PORTADA IZQUIERDA */}
        {/* ============================= */}


        <motion.div

          className="
            absolute
            left-0
            top-0
            w-1/2
            h-full
            rounded-l-lg
            bg-cover
            bg-center
            shadow-2xl
            origin-left
            z-20
          "

          style={{

            backgroundImage:"url('/images/left.jpg')",

            transformStyle:"preserve-3d",

            backfaceVisibility:"hidden"

          }}

          animate={{

            rotateY: open ? -90 : 0

          }}

          transition={{

            duration:1,

            ease:"easeInOut"

          }}

        />





        {/* ============================= */}
        {/* PORTADA DERECHA */}
        {/* ============================= */}


        <motion.div

          className="
            absolute
            right-0
            top-0
            w-1/2
            h-full
            rounded-r-lg
            bg-cover
            bg-center
            shadow-2xl
            origin-right
            z-30
          "

          style={{

            backgroundImage:"url('/images/right.jpg')",

            transformStyle:"preserve-3d",

            backfaceVisibility:"hidden"

          }}

          animate={{

            rotateY: open ? 90 : 0

          }}

          transition={{

            duration:1,

            ease:"easeInOut"

          }}

        >



          {/* ============================= */}
          {/* SELLO */}
          {/* ============================= */}


          <motion.img

            src="/images/seal.webp"

            alt="Seal"

            className="
              absolute
              w-24
              h-24
              left-0
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-40
              pointer-events-none
            "

            animate={

              open

              ?

              {

                scale:[1,1.08,1],

                y:[0,-18,-18],

                opacity:[1,1,0]

              }

              :

              {

                scale:1,

                y:0,

                opacity:1

              }

            }


            transition={{

              duration:0.8,

              times:[0,0.4,1],

              ease:"easeInOut"

            }}

          />


        </motion.div>


      </div>


    </main>

  )

}