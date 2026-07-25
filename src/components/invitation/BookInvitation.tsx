"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Pages from "./Pages"


export default function BookInvitation() {

  const [open, setOpen] = useState(false)


  function openBook() {

    if(open) return

    setOpen(true)

  }


  return (

    <main

      className="
        min-h-dvh
        w-full
        flex
        items-center
        justify-center
        bg-[#efe6d6]
        p-6
        overflow-hidden
      "

    >


      <div

        className="
          relative
          rounded-[36px]
          bg-[#faf7f1]
          shadow-[0_30px_100px_rgba(0,0,0,0.25)]
          border
          border-[#e7dcc5]
          p-5
          md:p-8
        "

      >


        <div

          onClick={openBook}

          className="
            relative
            w-[92vw]
            max-w-[560px]
            aspect-[330/554]
            cursor-pointer
            select-none
          "

          style={{
            perspective:"2200px"
          }}

        >



          {/* CONTENIDO INTERIOR */}


          <AnimatePresence>


          {open &&

          <motion.div

            className="
              absolute
              inset-0
              z-10
              rounded-xl
              overflow-hidden
              bg-[#faf7f1]
            "


            initial={{
              opacity:0,
              scale:.96
            }}


            animate={{
              opacity:1,
              scale:1
            }}


            transition={{
              duration:.8
            }}

          >

            <Pages />

          </motion.div>

          }


          </AnimatePresence>





          {/* TAPA IZQUIERDA */}


          <motion.div


            className="
              absolute
              left-0
              top-0
              w-1/2
              h-full
              rounded-l-xl
              bg-cover
              bg-center
              shadow-2xl
              origin-left
              z-20
            "


            style={{

              backgroundImage:
              "url('/images/left.jpg')",

              transformStyle:
              "preserve-3d",

              backfaceVisibility:
              "hidden"

            }}


            animate={{

              rotateY:
              open ? -100 : 0,

              opacity:
              open ? 0 : 1

            }}


            transition={{

              duration:1.2,

              ease:"easeInOut"

            }}


          />







          {/* TAPA DERECHA */}


          <motion.div


            className="
              absolute
              right-0
              top-0
              w-1/2
              h-full
              rounded-r-xl
              bg-cover
              bg-center
              shadow-2xl
              origin-right
              z-30
            "


            style={{

              backgroundImage:
              "url('/images/right.jpg')",

              transformStyle:
              "preserve-3d",

              backfaceVisibility:
              "hidden"

            }}


            animate={{

              rotateY:
              open ? 100 : 0,

              opacity:
              open ? 0 : 1

            }}


            transition={{

              duration:1.2,

              ease:"easeInOut"

            }}



          >





          {/* SELLO */}


          <motion.img


            src="/images/seal.webp"


            alt="seal"


            className="
              absolute
              w-24
              h-24
              left-0
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-40
            "


            animate={

              open

              ?

              {

                scale:[1,1.15,0],

                y:[0,-20,-40],

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

              duration:.9

            }}


          />




          </motion.div>



        </div>


      </div>


    </main>

  )

}