"use client"

import { motion } from "framer-motion"

export default function Families(){

return (

<motion.div

className="
families-row -translate-y-4
"

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:1.2,
duration:1
}}

dir="rtl"

>


{/* Familia izquierda */}

<div className="family-block">

<div className="family-label">
السيد
</div>

<div className="family-name">
محمد بن لزهر الخصخوصي
</div>

</div>



{/* و */}

<div className="and-symbol">
و
</div>



{/* Familia derecha */}

<div className="family-block">

<div className="family-label">
السيد
</div>

<div className="family-name">
محمد بن الحبيب جماعي
</div>

</div>



{/* Texto invitación */}

<div className="invite-message -translate-y-6">

بدعوتكم لحضور حفل زفاف نجليهما

</div>


</motion.div>

)

}