"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"


export default function Background() {


  const petals = useMemo(()=>{

    return Array.from({length:25}).map(()=>({

      width:6 + Math.random()*8,

      height:10 + Math.random()*12,

      left:Math.random()*100,

      duration:10 + Math.random()*8,

      delay:Math.random()*8

    }))


  },[])



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



      {/* FOTO DE FONDO */}


      <motion.video

  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
  "

  src="/images/invitation/bg.mp4"

  autoPlay

  muted

  loop

  playsInline

  

/>





      {/* TONO CREMA */}


      <div

        className="
          absolute
          inset-0
          bg-black/35
        "

      />






      {/* PETALOS */}


      {

        petals.map((petal,index)=>(


          <motion.div


            key={index}


            className="
              absolute
              rounded-tl-full
              rounded-br-full
              bg-[#f3dfc0]
            "


            style={{


              width:`${petal.width}px`,


              height:`${petal.height}px`,


              left:`${petal.left}%`


            }}


            initial={{

              y:-50,

              rotate:0,

              opacity:0

            }}



            animate={{


              y:"110vh",


              x:[

                0,

                40,

                -30,

                20

              ],


              rotate:[

                0,

                180,

                360

              ],


              opacity:[

                0,

                .45,

                0

              ]

            }}



            transition={{


              duration:petal.duration,


              delay:petal.delay,


              repeat:Infinity,


              ease:"linear"


            }}



          />


        ))


      }


    </div>


  )

}