"use client"

import { motion } from "framer-motion"

export default function CouplesName() {

  return (

    <motion.div

      className="
        flex
        items-center
        justify-center
        gap-[14px]
        my-[20px_8px]
        -translate-y-12
      "

      initial={{
        opacity:0,
        y:20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:1.8,
        duration:1
      }}

      dir="rtl"

    >

      <span className="names-gold">
        بهاء
      </span>


      <span className="couple-separator">
        &
      </span>


      <span className="names-gold">
        سيرين
      </span>


    </motion.div>

  )

}