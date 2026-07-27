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



     



        {/* MENSAJE INICIAL */}

<p className="closing-message mb-8">

  يسعدنا مشاركتكم

  <br />

  فرحتنا في هذا اليوم المبارك

</p>



{/* LINEA SUPERIOR NOMBRES */}

<div
  className="
    w-24
    h-px
    bg-[#b89a63]
    mb-6
  "
/>



{/* NOMBRES */}

<h2 className="closing-names">

  بهاء

</h2>


<p className="closing-names">

  ♥

</p>


<h2 className="closing-names">

  سيرين

</h2>



{/* LINEA INFERIOR NOMBRES */}

<div
  className="
    w-24
    h-px
    bg-[#b89a63]
    mt-6
    mb-8
  "
/>



{/* MENSAJE FINAL */}

<p className="closing-message">

  نسأل الله أن يديم المحبة

  <br />

  ويجمعنا دائماً على الخير

</p>




        



      </div>


    </section>

  )

}