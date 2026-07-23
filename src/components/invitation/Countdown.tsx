"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"


export default function Countdown() {


  // Cambia aquí la fecha del evento
  const weddingDate = new Date("2026-09-20T18:00:00").getTime()


  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })


  useEffect(() => {


    function updateCountdown() {

      const now = new Date().getTime()

      const distance = weddingDate - now


      if (distance <= 0) {

        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })

        return

      }


      setTime({

        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24))
          /
          (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance % (1000 * 60 * 60))
          /
          (1000 * 60)
        ),

        seconds: Math.floor(
          (distance % (1000 * 60))
          /
          1000
        )

      })

    }


    updateCountdown()


    const timer = setInterval(
      updateCountdown,
      1000
    )


    return () => clearInterval(timer)


  }, [])



  const boxes = [

    {
      value: time.seconds,
      label: "ثانية"
    },

    {
      value: time.minutes,
      label: "دقيقة"
    },

    {
      value: time.hours,
      label: "ساعة"
    },

    {
      value: time.days,
      label: "يوم"
    }

  ]



  return (

    <motion.div


      className="
        relative
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        text-center
        font-serif
        text-[#3d2020]
        px-7
        py-12
        bg-cover
        bg-center
        min-h-[600px]
      "


      style={{
        backgroundImage:"url('/images/countdown-bg.jpg')"
      }}


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


      {/* capa transparente */}

      <div

        className="
          absolute
          inset-0
          bg-[#efe6d6]/40
        "

      />



      {/* contenido */}

      <div

        className="
          relative
          z-10
          flex
          flex-col
          items-center
        "

      >


        <h2

          className="
            text-3xl
            mb-3
          "

        >

          العد التنازلي

        </h2>



        <p

          className="
            text-xl
            mb-8
          "

        >

          لحظات تفصلنا عن اللقاء

        </p>




        <div

          className="
            flex
            gap-5
            justify-center
          "

        >


          {
            boxes.map((item,index)=>(

              <div

                key={index}

                className="
                  flex
                  flex-col
                  items-center
                "

              >


                <div

                  className="
                    cd-box
                    relative
                    w-16
                    h-16
                    rounded-full
                    border
                    border-[#3d2020]
                    flex
                    flex-col
                    justify-center
                    items-center
                    text-center
                    overflow-hidden
                    text-[#3d2020]
                    font-serif
                  "

                >


                  {/* brillo del reloj */}

                  <div

                    className="
                      absolute
                      inset-0
                      pointer-events-none
                    "

                    style={{
                      background:
                      "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 60%)"
                    }}

                  />



                  <span

                    className="
                      relative
                      z-10
                      text-2xl
                    "

                  >

                    {String(item.value).padStart(2,"0")}

                  </span>


                </div>



                <span

                  className="
                    mt-2
                    text-base
                  "

                >

                  {item.label}

                </span>



              </div>

            ))
          }


        </div>


      </div>


    </motion.div>

  )

}