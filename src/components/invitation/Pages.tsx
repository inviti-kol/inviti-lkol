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
import Footer from "./Footer"
import Closing from "./closing"

export default function Pages() {

  return (

    <div
      className="
        absolute
        inset-0
        w-full
        h-full
        overflow-y-auto
        snap-y
        snap-mandatory
      "
      style={{
        WebkitOverflowScrolling: "auto"
      }}
    >


      <section
        className="
          relative
          w-full
          h-[100dvh]
          snap-start
          snap-stop-always
          overflow-hidden
          flex
          flex-col
          items-center
          text-center
          text-[#3d2020]
        "
      >

        <Background />


        <div
          className="
            relative
            z-10
            w-full
            h-full
            flex
            flex-col
            items-center
            justify-center
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
          h-[100dvh]
          snap-start
          snap-stop-always
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
          h-[100dvh]
          snap-start
          snap-stop-always
          overflow-hidden
        "
      >

        <Plan />

        <ScrollHint />

      </section>




      <section
        className="
          relative
          w-full
          h-[100dvh]
          snap-start
          snap-stop-always
          overflow-hidden
        "
      >

        <Closing />

        <ScrollHint />

      </section>




      <section
        className="
          relative
          w-full
          h-[100dvh]
          snap-start
          snap-stop-always
          overflow-hidden
        "
      >

        <Footer />

      </section>


    </div>

  )

}