"use client"

import { motion } from "framer-motion"

export default function InvitationText() {

  return (

    <motion.div

      className="
        mt-0
        text-center
        font-serif
        text-[#f8f0ff]
      "

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:0.8,
        duration:1
      }}

      dir="rtl"

    >

      <div className="invitation-text">

        تتشرف عائلتا

      </div>

    </motion.div>

  )
}
