"use client"

import { motion } from "framer-motion"

export default function Plan() {

  const events = [
    {
      date: "13 / 7 / 2026",
      title: "عقد القران",
      place: "بقاعة افراح",
      hour: "16:00",
    },
    {
      date: "14 / 7 / 2026",
      title: "مأدبة العشاء العريس",
      place: "بقاعة افراح",
      hour: "17:00",
    },
    {
      date: "14 / 7 / 2026",
      title: "مأدبة العشاء العروس",
      place: "بقاعة افراح",
      hour: "17:00",
    },
    {
      date: "14 / 7 / 2026",
      title: "حنة العريس",
      place: "بقاعة افراح",
      hour: "20:00",
    },
    {
      date: "14 / 7 / 2026",
      title: "حنة العروس",
      place: "بقاعة افراح",
      hour: "20:00",
    },
    {
      date: "15 / 7 / 2026",
      title: "حفل الزفاف",
      place: "بقاعة افراح",
      hour: "21:00",
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


      <div
        className="
          absolute
          inset-0
          bg-[#efe6d6]/40
        "
      />


      <div
        className="
          relative
          z-10
          max-w-3xl
          mx-auto
        "
      >


        <h2
          className="
            text-center
            text-4xl
            text-[#3d2020]
            font-serif
          "
        >
          برنامج حفل الزفاف
        </h2>


        <div
          className="
            w-40
            h-px
            bg-[#af9b6a]
            mx-auto
            mt-5
            mb-16
          "
        />



        <div className="relative">


          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              w-px
              bg-[#af9b6a]
              -translate-x-1/2
            "
          />



          <div
            className="
              flex
              flex-col
              gap-16
            "
          >


            {
              events.map((event,index)=>(

                <motion.div

                  key={index}

                  initial={{
                    opacity:0,
                    y:30
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    duration:0.7
                  }}

                  viewport={{
                    once:true
                  }}

                  className="
                    grid
                    grid-cols-[1fr_50px_1fr]
                    items-center
                  "

                >



                  <div
                    className="
                      text-right
                    "
                  >

                    <h3
                      className="
                        text-2xl
                        text-[#3d2020]
                        font-serif
                      "
                    >
                      {event.title}
                    </h3>


                    {
                      event.place &&
                      <p
                        className="
                          mt-2
                          text-lg
                          text-[#5a4030]
                        "
                      >
                        {event.place}
                      </p>
                    }


                  </div>



                  <div
                    className="
                      flex
                      justify-center
                      relative
                      z-10
                    "
                  >

                    <img
                      src="/images/flower-decor.webp"
                      alt=""
                      className="
                        w-7
                        h-7
                        object-contain
                      "
                    />

                  </div>



                  <div
                    className="
                      text-left
                    "
                  >

                    <p
                      className="
                        text-xl
                        text-[#3d2020]
                        font-serif
                      "
                    >
                      {event.date}
                    </p>


                    {
                      event.hour &&
                      <p
                        className="
                          mt-1
                          text-[#6b5644]
                        "
                      >
                        {event.hour}
                      </p>
                    }


                  </div>



                </motion.div>

              ))
            }


          </div>


        </div>


      </div>


    </section>

  )
}