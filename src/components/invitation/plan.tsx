"use client"

import { useEffect, useRef, useState } from "react"


export default function Plan() {


  const planRef = useRef<HTMLDivElement>(null)


  const [flowerStyle, setFlowerStyle] = useState({
    y: 0,
    rotate: 0
  })



  useEffect(() => {


    function handleScroll() {


      if (!planRef.current) return



      const rect = planRef.current.getBoundingClientRect()


      const windowHeight = window.innerHeight



      const progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height)



      const value = Math.min(
        Math.max(progress, 0),
        1
      )



      setFlowerStyle({

        y: value * 250,

        rotate: value * 134

      })


    }



    window.addEventListener(
      "scroll",
      handleScroll
    )



    handleScroll()



    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      )

    }


  }, [])



  return (


    <section

      ref={planRef}

      className="
        relative
        min-h-[900px]
        bg-cover
        bg-center
        py-20
        px-6
        overflow-hidden
      "

      style={{
        backgroundImage:
          "url('/images/plan.jpg')",
      }}

      dir="rtl"

    >



      <div className="
        absolute
        inset-0
        bg-[#efe6d6]/40
      " />




      <div className="
        relative
        z-10
        max-w-md
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
          relative
          h-[600px]
          mt-16
        ">



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




          <img

            src="/images/flower-decor.webp"

            alt=""

            className="
              absolute
              left-1/2
              top-0
              w-14
              -translate-x-1/2
              z-30
              pointer-events-none
            "

            style={{

              transform:
                `translateY(${flowerStyle.y}px) rotate(${flowerStyle.rotate}deg)`

            }}

          />




        </div>



      </div>



    </section>


  )

}