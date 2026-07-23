"use client"

import { useState } from "react"
import { Sparkles, X } from "lucide-react"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Home() {

  const [open, setOpen] = useState(false)

  return (
    <main className="
      min-h-screen
      bg-[#1a0f12]
      text-white
      flex
      items-center
      justify-center
      px-6
    ">

      <section className="
        max-w-3xl
        text-center
      ">


        <div className="flex justify-center mb-6">

          <Sparkles
            size={45}
            className="text-[#d9b98c]"
          />

        </div>


        <h1 className="
          text-6xl
          font-serif
          tracking-widest
        ">
          InvitiKol
        </h1>



        <p
          className="
            mt-5
            text-[#d9b98c]
            text-2xl
            font-serif
          "
          dir="rtl"
        >
          دعوات رقمية بتصميم خاص لكل مناسبة
        </p>




        <div className="
          mt-10
          border
          border-[#d9b98c]/40
          rounded-[2rem]
          p-10
          bg-white/5
          backdrop-blur
          shadow-xl
        ">



          <div
            className="
              text-center
              font-serif
            "
            dir="rtl"
          >


            <p
              className="
                text-3xl
                leading-[2.2]
                tracking-wide
                text-[#f1dfc1]
              "
            >
              هل تبحث عن دعوة إلكترونية مميزة تجمع بين الأناقة والإبداع؟
            </p>



            <div className="
              w-28
              h-[1px]
              bg-[#d9b98c]
              mx-auto
              my-6
            "/>



            <p
              className="
                text-xl
                leading-[2.3]
                text-[#d9c7a8]
              "
            >
              نصمم لك دعوة رقمية خاصة تناسب جميع مناسباتك
              <br />
              وتخلّد أجمل لحظاتك بأسلوب راقٍ وفريد.
            </p>


          </div>





          <div
            className="
              mt-10
              text-lg
              text-[#eee0c8]
              space-y-4
              font-serif
            "
            dir="rtl"
          >

            <p>✦ حفلات الزفاف</p>
            <p>✦ أعياد الميلاد</p>
            <p>✦ المناسبات العائلية</p>
            <p>✦ جميع أنواع الاحتفالات</p>

          </div>




          <button
            onClick={() => setOpen(true)}
            className="
              mt-10
              px-10
              py-4
              rounded-full
              bg-[#d9b98c]
              text-[#1a0f12]
              font-serif
              text-lg
              hover:scale-105
              transition
            "
          >
            اطلب دعوتك الآن
          </button>



        </div>





        {open && (

          <div className="
            fixed
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            px-5
          ">


            <div className="
              bg-[#1a0f12]
              border
              border-[#d9b98c]/40
              rounded-[2rem]
              p-8
              w-full
              max-w-sm
              relative
            ">


              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  top-5
                  right-5
                  text-gray-400
                "
              >

                <X size={22}/>

              </button>




              <h2
                className="
                  text-2xl
                  font-serif
                  mb-8
                "
                dir="rtl"
              >
                تواصل معنا
              </h2>





              <a
                href="https://instagram.com/اسم_الحساب"
                target="_blank"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  py-4
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  transition
                "
              >

                <FaInstagram size={22}/>
                Instagram

              </a>





              <a
                href="https://wa.me/رقمك"
                target="_blank"
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-3
                  py-4
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  transition
                "
              >

                <FaWhatsapp size={22}/>
                WhatsApp

              </a>



            </div>


          </div>

        )}


      </section>


    </main>
  )
}