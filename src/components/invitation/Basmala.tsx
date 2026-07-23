"use client"

import { motion } from "framer-motion"

export default function Basmala(){

return (

<motion.div

className="
mt-10
flex
justify-center
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
delay:0.3,
duration:1
}}

>

<motion.img

src="/images/basmala.png"

alt="Basmala"

className="
w-[clamp(100px,35vw,140px)]
h-auto
object-contain
mb-4
opacity-90
drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]
"

/>

</motion.div>

)

}