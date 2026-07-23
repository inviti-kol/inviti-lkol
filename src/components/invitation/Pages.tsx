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
        w-full
        h-full
        overflow-y-auto
        snap-y
        snap-mandatory
      "

    >


      <section

        className="
          relative
          w-full
          min-h-full
          snap-start
          overflow-hidden
          flex
          flex-col
          items-center
          text-center
          px-7
          py-0
          text-[#3d2020]
        "

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





      <section

        className="
          relative
          w-full
          min-h-full
          snap-start
          overflow-hidden
        "

      >


        <Countdown />


        <ScrollHint />


      </section>





      <section

        className="
          relative
          w-full
          min-h-full
          snap-start
        "

      >


        <Plan />


        <ScrollHint />


      </section>


    </div>

  )

}