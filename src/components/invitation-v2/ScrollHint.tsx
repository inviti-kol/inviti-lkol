"use client"

import { motion } from "framer-motion"

export default function ScrollHint({
  color = "dark"
}: {
  color?: "light" | "dark"
}) {


  function scrollDown(){

    const container = document.querySelector(
      ".pages-scroll"
    )

    if(container){

      container.scrollBy({

        top: container.clientHeight,

        behavior:"smooth"

      })

    }

  }


  const textColor =
    color === "light"
      ? "text-[#FCEEB1]"
      : "text-[#3d2020]"


  const borderColor =
    color === "light"
      ? "border-[#FCEEB1]"
      : "border-[#3d2020]"


  return (

    <motion.button

      onClick={scrollDown}

      className={`
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        ${textColor}
        font-serif
      `}

      animate={{
        y:[0,10,0]
      }}

      transition={{
        duration:1.5,
        repeat:Infinity
      }}

      dir="rtl"

    >

      <span>
        اسحب للأسفل
      </span>


      <div
        className={`
          w-3
          h-3
          border-r
          border-b
          ${borderColor}
          rotate-45
          mt-2
        `}
      />


    </motion.button>

  )

}