"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Pages from "./Pages"
import { Volume2, VolumeX } from "lucide-react"


export default function BookInvitation() {

  const [open, setOpen] = useState(false)
  const [pagesVisible, setPagesVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false)

    }, 400)


    return () => clearTimeout(timer)

  }, [])
  useEffect(() => {

  function handleVisibility() {

    if (!audioRef.current) return

    if (document.hidden) {

      audioRef.current.pause()

    } else if (open && !muted) {

      audioRef.current.play().catch(() => {})

    }

  }

  document.addEventListener("visibilitychange", handleVisibility)

  return () => {

    document.removeEventListener("visibilitychange", handleVisibility)

  }

}, [open, muted])
  function openBook() {

    if (open) return

    setOpen(true)
audioRef.current?.play()
    setTimeout(() => {
      setPagesVisible(true)
    }, 500)

  }

  return (

    <main

      className="
        min-h-dvh
        w-full
        flex
        items-center
        justify-center
        bg-[#1a0f12]
        px-4
        py-8
        overflow-visible
      "

    >

      <div

        className="
          relative
          rounded-[36px]
          bg-[#faf7f1]
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          border
          border-[#e7dcc5]
          p-4
          md:p-6
        "

      >
{open && (
  <button
    onClick={(e) => {
      e.stopPropagation()

      setMuted((value) => {
        const next = !value

        if (audioRef.current) {
          audioRef.current.muted = next
        }

        return next
      })
    }}
    className="
      absolute
      top-10%
      right-10%
      z-[200]
      w-11
      h-11
      rounded-full
      bg-white/90
      border
      border-[#d8c49a]
      shadow-lg
      flex
      items-center
      justify-center
      text-[#7d5d2d]
      transition
      hover:scale-105
    "
  >
    {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
  </button>
)}
        <div



onClick={() => {
  if (!loading) openBook()
}}  

  className="
    relative

    w-[330px]
    h-[620px]

    sm:w-[360px]
    sm:h-[650px]

    md:w-[420px]
    md:h-[700px]

    cursor-pointer
    select-none
    mx-auto
  "

  style={{
    perspective: "2200px"
  }}

>
<AnimatePresence>

{
loading && (

<motion.div

className="
absolute
inset-0
z-[100]
rounded-xl
bg-[#faf7f1]
flex
flex-col
items-center
justify-center
"

initial={{
opacity:1
}}

exit={{
opacity:0
}}

transition={{
duration:0.6
}}

>

<div
className="
w-12
h-12
rounded-full
border-4
border-[#d8c49a]
border-t-[#7d5d2d]
animate-spin
"
/>


<p
className="
mt-8
text-3xl
text-[#4d2d1c]
font-serif
"
>
لحظة واحدة
</p>


<p
className="
mt-2
text-[#8b6d46]
text-sm
"
>
جاري تجهيز الدعوة
</p>


</motion.div>

)

}

</AnimatePresence>
          <AnimatePresence>

            {
              pagesVisible && (

                <motion.div

                  className="
                    absolute
                    inset-0
                    z-10
                    overflow-hidden
                    rounded-xl
                  "

                  initial={{
                    opacity: 0
                  }}

                  animate={{
                    opacity: 1
                  }}

                  transition={{
                    duration: 0.8
                  }}

                >

                  <Pages />

                </motion.div>

              )
            }

          </AnimatePresence>





          {/* LEFT COVER */}

          <motion.div

            className="
              absolute
              left-0
              top-0
              w-1/2
              h-full
              rounded-l-xl
              bg-cover
              bg-center
              shadow-2xl
              origin-left
              z-30
            "

            style={{

              backgroundImage: "url('/images/left.jpg')",

              transformStyle: "preserve-3d",

              backfaceVisibility: "hidden"

            }}

            animate={{

              rotateY: open ? -95 : 0

            }}

            transition={{

              duration: 1.4,

              ease: [0.77, 0, 0.18, 1]

            }}

          />





          {/* RIGHT COVER */}

          <motion.div

            className="
              absolute
              right-0
              top-0
              w-1/2
              h-full
              rounded-r-xl
              bg-cover
              bg-center
              shadow-2xl
              origin-right
              z-40
            "

            style={{

              backgroundImage: "url('/images/right.jpg')",

              transformStyle: "preserve-3d",

              backfaceVisibility: "hidden"

            }}

            animate={{

              rotateY: open ? 95 : 0

            }}

            transition={{

              duration: 1.4,

              ease: [0.77, 0, 0.18, 1]

            }}

          >

            {/* SEAL */}

            <motion.img

              src="/images/seal.webp"

              alt="seal"

              className="
                absolute
                w-24
                h-24
                left-0
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                z-50
                pointer-events-none
              "

              animate={

                open

                  ? {

                      scale: 0.6,

                      opacity: 0

                    }

                  : {

                      scale: 1,

                      opacity: 1

                    }

              }

              transition={{

                duration: 0.7,

                ease: "easeInOut"

              }}

            />

          </motion.div>

        </div>

      </div>
<audio
  ref={audioRef}
  loop
  playsInline
  muted={muted}
>
  <source
    src="/music/music.mp3"
    type="audio/mpeg"
  />
</audio>

    </main>

  )

}