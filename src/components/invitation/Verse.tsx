"use client"

import { motion } from "framer-motion"

export default function Verse() {
  return (
    <motion.div
      className="verse"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1 }}
      dir="rtl"
    >

      <p>
        ﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ
        أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم
        مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ
        لِّقَوْمٍ يَتَفَكَّرُونَ﴾
      </p>

    </motion.div>
  )
}