"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Plan() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const flowerY = useTransform(scrollYProgress, [0, 1], [-20, 20])
  const flowerRotate = useTransform(scrollYProgress, [0, 1], [-10, 10])

  const events = [
    {
      date: "15 / 08 / 2026",
      title: "عقد القران",
      place: "الجامع الكبير",
      hour: "بعد صلاة العصر",
    },
    {
      date: "17:00 H",
      title: "الانطلاق نحو المهدية جماعيا",
      place: "من محطة الحافلات باب عليوة",
      hour: "",
    },
    {
      date: "15 / 08 / 2026",
      title: "مأدبة العشاء",
      place: "قاعة الأندلس للأفراح",
      hour: "19:00 H ← 21:00",
    },
    {
      date: "21:30 H",
      title: "الوطية و حفل الزفاف",
      place: "قاعة الأندلس للأفراح",
      hour: "",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: "url('/images/plan.jpg')",
      }}
      dir="rtl"
    >
      <div className="absolute inset-0 bg-[#efe6d6]/45" />

      <div className="relative z-10 mx-auto max-w-5xl">

        <h2 className="text-center text-4xl text-[#3d2020] font-serif">
          برنامج الحفل
        </h2>

        <div className="mx-auto mt-5 mb-16 h-[1px] w-40 bg-[#af9b6a]" />

        <div className="relative">

          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              w-[2px]
              -translate-x-1/2
              bg-[#af9b6a]
            "
          />

          <div className="flex flex-col gap-16">

            {events.map((event, index) => (

              <div
                key={index}
                className="
                  relative
                  grid
                  grid-cols-[1fr_80px_1fr]
                  items-center
                  gap-4
                "
              >

                <div className="text-left">

                  <div className="text-xl text-[#3d2020] font-semibold">
                    {event.date}
                  </div>

                </div>

                <div className="relative flex justify-center">

                  <motion.img
                    src="/images/flower-decor.webp"
                    alt=""
                    className="relative z-20 w-12"
                    style={{
                      y: flowerY,
                      rotate: flowerRotate,
                    }}
                  />

                </div>

                <div className="text-right">

                  <h3 className="text-2xl text-[#3d2020] font-serif">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-lg text-[#5a4030]">
                    {event.place}
                  </p>

                  {event.hour && (
                    <p className="mt-1 text-base text-[#7b624d]">
                      {event.hour}
                    </p>
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}