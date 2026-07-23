"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Intro from "./Intro"


export default function Envelope(){

const [opening,setOpening] = useState(false)
const [opened,setOpened] = useState(false)



function openEnvelope(){

setOpening(true)

setTimeout(()=>{

setOpened(true)

},2500)

}



return (

<main

className="
min-h-screen
flex
items-center
justify-center
bg-[#f7efe3]
overflow-hidden
"

>


{

!opened ?


<motion.div

className="
relative
cursor-pointer
"

onClick={openEnvelope}


initial={{
scale:0.8,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

transition={{
duration:1
}}

>



{/* SOBRE */}

<div

className="
relative
w-[360px]
h-[240px]
"
style={{
perspective:"1000px"
}}

>


{/* cuerpo */}

<div

className="
absolute
bottom-0
w-full
h-[200px]
bg-[#fffaf2]
rounded-xl
shadow-2xl
"

>


</div>



{/* TARJETA INTERIOR */}


<motion.div

className="
absolute
left-5
w-[330px]
h-[210px]
bg-white
rounded-lg
shadow-xl
flex
items-center
justify-center
font-serif
text-yellow-700
text-2xl
"

animate={{

y: opening ? -260 : 20,
scale: opening ? 1.05 : 1

}}

transition={{

duration:1.5

}}

>

بِسْمِ اللهِ


</motion.div>




{/* SOLAPA */}


<motion.div

className="
absolute
top-0
left-0
w-full
h-[130px]
bg-[#ead8b8]
origin-top
rounded-t-xl
z-20
"

animate={{

rotateX: opening ? -180 : 0

}}

transition={{

duration:1.3

}}

style={{

transformPerspective:800,
transformStyle:"preserve-3d"

}}

/>




{/* SELLO */}


<motion.div

className="
absolute
top-[105px]
left-1/2
-translate-x-1/2
w-16
h-16
rounded-full
bg-yellow-600
text-white
flex
items-center
justify-center
text-2xl
shadow-xl
"

animate={{

scale: opening ? 0 : 1,
opacity: opening ? 0 : 1

}}

transition={{

duration:0.5

}}

>

<div className="
relative
w-20
h-20
rounded-full
bg-gradient-to-br
from-yellow-700
to-yellow-500
flex
items-center
justify-center
text-white
shadow-xl
border-4
border-yellow-300
">

<span className="
text-2xl
font-serif
">
بِ
</span>

</div>


</motion.div>



</div>


<p

className="
text-center
mt-10
tracking-[5px]
text-gray-600
"

>

OPEN INVITATION

</p>



</motion.div>


:


<Intro />


}


</main>


)

}