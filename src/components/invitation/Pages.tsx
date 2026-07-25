"use client"

import Basmala from "./Basmala"
import Verse from "./Verse"
import Families from "./Families"
import CouplesName from "./CoupleNames"
import InvitationText from "./invitation"
import Countdown from "./Countdown"
import ScrollHint from "./ScrollHint"
import Background from "./Background"
import Plan from "./plan"


export default function Pages() {


  return (


    <div

      className="
        absolute
        inset-0
        overflow-y-auto
        snap-y
        snap-mandatory
        scroll-smooth
      "

    >





      {/* INTRO */}


      <section

        className="
          relative
          min-h-full
          snap-start
          overflow-hidden
          flex
          flex-col
          items-center
          text-center
          px-7
          pt-10
          pb-16
          text-[#3d2020]
        "

        dir="rtl"

      >


        <Background />



        <div

          className="
            relative
            z-10
            flex
            flex-col
            items-center
            w-full
          "

        >


          <Basmala />


          <Verse />


          <InvitationText />


          <Families />


          <CouplesName />


        </div>



        <ScrollHint />


      </section>








      {/* COUNTDOWN */}


      <section
  className="
    relative
    h-full
    min-h-full
    snap-start
    overflow-hidden
  "

        dir="rtl"

      >


        <Countdown />


        <ScrollHint />


      </section>









      {/* PROGRAMME */}


      <section

        className="
          relative
          min-h-full
          snap-start
        "

        dir="rtl"

      >


        <Plan />


        <ScrollHint />


      </section>





    </div>


  )

}