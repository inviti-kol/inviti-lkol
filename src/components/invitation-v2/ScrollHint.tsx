"use client"

import { motion } from "framer-motion"

export default function ScrollHint() {


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
        text-[#EDEBB7]
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