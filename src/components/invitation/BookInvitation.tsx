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
        min-h-dvh
        w-full
        flex
        items-center
        justify-center
        bg-[#efe6d6]
        p-0
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
            mx-auto
          "

          style={{
            perspective:"2200px"
          }}

        >



          <AnimatePresence>

            {
              pagesVisible && (

                <motion.div

                  className="
                    absolute
                    inset-0
                    z-10
                    overflow-hidden
                    rounded-xl
                  "

                  initial={{
                    opacity:0
                  }}

                  animate={{
                    opacity:1
                  }}

                  transition={{
                    duration:0.4
                  }}

                >

                  <Pages />

                </motion.div>

              )
            }


          </AnimatePresence>






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


              backgroundImage:"url('/images/right.jpg')",


              transformStyle:"preserve-3d",


              backfaceVisibility:"hidden"


            }}


            animate={{


              rotateY:open ? 90 : 0


            }}


            transition={{


              duration:1,


              ease:"easeInOut"


            }}



          >



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

                ease:"easeInOut"


              }}


            />



          </motion.div>



        </div>


      </div>


    </main>

  )

}