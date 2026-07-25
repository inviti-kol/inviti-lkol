"use client"

export default function Closing() {

  return (

    <section

      className="
      closing-section
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
      "

      dir="rtl"

    >


      <div

        className="
        absolute
        inset-0
        bg-cover
        bg-center
        scale-110
        "

        style={{
          backgroundImage:"url('/images/plan.jpg')"
        }}

      />




      <div

        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#efe6d6]/40
        via-[#efe6d6]/60
        to-[#efe6d6]/80
        "

      />





      {/* FLORES CAYENDO */}

       <div className="falling-flowers">

  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />
  <img src="/images/flower-decor.webp" alt="" />


      </div>





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






        <div

          className="
          gold-line
          mt-6
          "

        />



      </div>



    </section>

  )

}