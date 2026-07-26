"use client"

export default function Closing() {

  const flowers = Array.from({ length: 18 })

  return (

    <section

      className="
      relative
      w-full
      h-full
      min-h-full
      flex
      flex-col
      items-center
      justify-center
      text-center
      overflow-hidden
      bg-[#efe6d6]
      "

      dir="rtl"

    >


      {/* FLORES CAYENDO */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {
          flowers.map((_, i) => (

            <img

              key={i}

              src="/images/flower-decor.webp"

              className="falling-flower"

              style={{

                left:`${Math.random() * 100}%`,

                animationDelay:`${Math.random() * 8}s`,

                animationDuration:`${8 + Math.random() * 8}s`,

                width:`${25 + Math.random() * 35}px`

              }}

            />

          ))
        }


      </div>





      {/* CONTENIDO */}

      <div

        className="
        relative
        z-10
        flex
        flex-col
        items-center
        px-6
        "

      >


        <div className="gold-line"/>



        <h2

          className="
          closing-names
          font-serif
          "

        >

          بهاء & سيرين

        </h2>




        <p

          className="
          closing-text
          font-serif
          "

        >

          يسعدنا مشاركتكم هذه الفرحة

        </p>




        <img

          src="/images/icon6.webp"

          alt=""

          className="
          closing-icon
          "

        />




        <div className="gold-line mt-6"/>


      </div>


    </section>

  )

}