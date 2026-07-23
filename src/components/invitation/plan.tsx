"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function Plan() {

  const { scrollYProgress } = useScroll()

  const flowerY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 250]
  )

  const flowerRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180]
  )


  const events = [
    {
      time: "15 / 8 / 2026",
      title: "عقد القران",
      place: "الجامع الكبير",
      hour: "بعد صلاة العصر"
    },
    {
      time: "17:00 H",
      title: "الانطلاق نحو المهدية جماعيا",
      place: "من محطة الحافلات باب عليوة",
      hour: ""
    },
    {
      time: "15 / 8 / 2026",
      title: "مأدبة العشاء",
      place: "قاعة الأندلس للأفراح",
      hour: "19:00 H ← 21:00"
    },
    {
      time: "15 / 8 / 2026",
      title: "الوطية و حفل الزفاف",
      place: "قاعة الأندلس للأفراح",
      hour: "21:30 H"
    }
  ]


  return (

    <motion.section

      className="
        relative
        min-h-screen
        w-full
        bg-cover
        bg-center
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-7
        py-12
        text-[#3d2020]
        font-serif
        overflow-hidden
      "

      style={{
        backgroundImage:"url('/images/plan.jpg')"
      }}

      dir="rtl"

    >


      <div
        className="
          absolute
          inset-0
          bg-[#efe6d6]/40
        "
      />


      <motion.img

        src="/images/flower-decor.webp"

        className="
          absolute
          top-10
          left-10
          w-20
          z-20
        "

        style={{
          y: flowerY,
          rotate: flowerRotate
        }}

      />


      <div
        className="
          relative
          z-10
          w-full
          max-w-md
        "
      >


        <h2 className="
          text-3xl
          mb-4
        ">
          برنامج الحفل
        </h2>


        <div className="
          w-32
          h-[1px]
          bg-[#af9b6a]
          mx-auto
          mb-10
        "/>



        <div className="
          flex
          flex-col
          gap-8
        ">


          {
            events.map((event,index)=>(

              <div
                key={index}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                "
              >


                <div className="
                  text-xl
                  mb-2
                ">
                  {event.time}
                </div>



                <div className="
                  text-2xl
                  mb-1
                ">
                  {event.title}
                </div>



                <div className="
                  text-lg
                ">
                  {event.place}
                </div>



                {
                  event.hour &&
                  <div className="
                    mt-1
                    text-lg
                  ">
                    {event.hour}
                  </div>
                }



                {
                  index !== events.length - 1 &&
                  <div className="
                    mt-5
                    w-[1px]
                    h-12
                    bg-[#af9b6a]
                    relative
                  ">

                    <motion.img

                      src="/images/flower-decor.webp"

                      className="
                        absolute
                        w-6
                        left-1/2
                        -translate-x-1/2
                      "

                      style={{
                        y: flowerY,
                        rotate: flowerRotate
                      }}

                    />

                  </div>
                }


              </div>

            ))
          }


        </div>


      </div>


    </motion.section>

  )

}