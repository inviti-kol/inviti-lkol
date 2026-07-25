"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Plan() {

  const planRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: planRef,
    offset: [
      "start end",
      "end start"
    ],
  })


  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 250]
  )


  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180]
  )


  return (

    <section
      ref={planRef}
      className="
        relative
        min-h-[900px]
        overflow-hidden
        bg-[#efe6d6]
      "
    >

      <h2 className="
        text-center
        text-4xl
        pt-20
        text-[#3d2020]
      ">
        Programa del evento
      </h2>


      <div className="
        relative
        h-[700px]
        mt-20
      ">


        <div
          className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            bg-[#af9b6a]
            -translate-x-1/2
          "
        />


        <motion.img

          src="/images/flower-decor.webp"

          className="
            absolute
            left-1/2
            top-0
            w-14
            -translate-x-1/2
            z-30
          "

          style={{
            y,
            rotate
          }}

        />


      </div>


    </section>

  )
}