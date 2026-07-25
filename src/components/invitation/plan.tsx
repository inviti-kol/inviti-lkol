"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Plan() {

  const timelineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: [
      "start 80%",
      "end 20%"
    ],
  })


  const flowerPosition = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 450]
  )


  const flowerRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360]
  )


  const events = [
    {
      time: "15 / 08 / 2026",
      title: "عقد القران",
      place: "الجامع الكبير",
      hour: "بعد صلاة العصر",
    },
    {
      time: "17:00 H",
      title: "الانطلاق نحو المهدية جماعيا",
      place: "من محطة الحافلات باب عليوة",
      hour: "",
    },
    {
      time: "19:00 H",
      title: "مأدبة العشاء",
      place: "قاعة الأندلس للأفراح",
      hour: "",
    },
    {
      time: "21:30 H",
      title: "الوطية و حفل الزفاف",
      place: "قاعة الأندلس للأفراح",
      hour: "",
    },
  ]


  return (

    <section
      className="
        relative
        min-h-screen
        bg-cover
        bg-center
        py-20
        px-6
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/images/plan.jpg')",
      }}
      dir="rtl"
    >


      <div className="absolute inset-0 bg-[#efe6d6]/40" />


      <div className="
        relative
        z-10
        max-w-5xl
        mx-auto
      ">


        <h2 className="
          text-center
          text-4xl
          text-[#3d2020]
          font-serif
        ">
          برنامج الحفل
        </h2>


        <div className="
          w-40
          h-px
          bg-[#af9b6a]
          mx-auto
          mt-5
          mb-16
        "/>



        <div
          ref={timelineRef}
          className="relative"
        >


          <div
            className="
              absolute
              left-1/2
              top-4
              bottom-4
              w-px
              bg-[#af9b6a]
              -translate-x-1/2
            "
          />



          <motion.img

            src="/images/flower-decor.webp"

            alt=""

            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              w-14
              z-30
              pointer-events-none
            "

            style={{
              y: flowerPosition,
              rotate: flowerRotation,
            }}

          />



          <div className="
            space-y-14
          ">


            {events.map((event,index)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:0.8
                }}

                viewport={{
                  once:true
                }}

                className="
                  grid
                  grid-cols-[1fr_60px_1fr]
                  items-center
                "

              >


                <div className="
                  text-left
                ">

                  <p className="
                    text-xl
                    text-[#3d2020]
                    font-serif
                  ">
                    {event.time}
                  </p>

                </div>



                <div className="
                  flex
                  justify-center
                ">

                  <img
                    src="/images/flower-decor.webp"
                    alt=""
                    className="
                      w-8
                      h-8
                      object-contain
                    "
                  />

                </div>



                <div className="
                  text-right
                ">


                  <h3 className="
                    text-2xl
                    text-[#3d2020]
                    font-serif
                  ">
                    {event.title}
                  </h3>


                  <p className="
                    mt-2
                    text-lg
                    text-[#5a4030]
                  ">
                    {event.place}
                  </p>



                  {
                    event.hour && (

                      <p className="
                        mt-1
                        text-[#6b5644]
                      ">
                        {event.hour}
                      </p>

                    )
                  }


                </div>


              </motion.div>


            ))}


          </div>


        </div>


      </div>


    </section>

  )
}