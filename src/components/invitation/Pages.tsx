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
        snap-proximity
        overscroll-contain
      "
    >


      <section
        className="
          relative
          w-full
          h-[100dvh]
          snap-start
          touch-pan-y
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
          touch-pan-y
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
        h-full
        snap-start
        touch-pan-y
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
  touch-pan-y
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
  touch-pan-y
  overflow-hidden
  "
>

  <Footer />

</section>
    </div>

  )

}