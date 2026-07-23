"use client"

import { motion } from "framer-motion"

export default function ScrollHint() {


  function scrollDown(){

    window.scrollBy({
      top: window.innerHeight,
      behavior:"smooth"
    })

  }


  return (

    <motion.button

      onClick={scrollDown}

      className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        text-[#3d2020]
        font-serif
      "

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
        className="
          w-3
          h-3
          border-r
          border-b
          border-[#3d2020]
          rotate-45
          mt-2
        "
      />

    </motion.button>

  )

}