"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Pages from "./Pages"

export default function BookInvitation() {
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [pagesVisible, setPagesVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  function openInvitation() {
    if (loading || open) return

    setOpen(true)

    setTimeout(() => {
      setPagesVisible(true)
    }, 300)
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
        overflow-hidden
      "
    >
      <div
        className="
          relative
          w-[330px]
          h-[620px]

          sm:w-[360px]
          sm:h-[650px]

          md:w-[420px]
          md:h-[700px]

          overflow-hidden
          rounded-[43px]

          border-15
          border-[#e7dcc5]
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
        
          "
      >
        <AnimatePresence>
          {loading && (
            <motion.div
              className="
                absolute
                inset-0
                z-[300]
                rounded-[28px]
                bg-[#faf7f1]
                flex
                flex-col
                items-center
                justify-center
              "
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
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
                  text-sm
                  text-[#8b6d46]
                "
              >
                جاري تجهيز الدعوة
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {pagesVisible && (
            <motion.div
              className="
                absolute
                inset-0
                z-10
                rounded-[28px]
                overflow-hidden
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <Pages />
            </motion.div>
          )}
        </AnimatePresence>

        <div
          onClick={openInvitation}
          className="
            absolute
            inset-0
            cursor-pointer
            select-none
          "
        >
                    {/* TOP */}

          <motion.div
            className="
              absolute
              top-0
              left-0
              w-full
              h-full
              -translate-y-60
              overflow-hidden
              z-[70]
            "
            animate={{
              y: open ? "-110%" : "0%",
            }}
            transition={{
              duration: 1.5,
              ease: [0.77, 0, 0.18, 1],
            }}
          >
            <img
              src="/images/top.webp"
              alt=""
              draggable={false}
              className="
                w-full
                h-full
                object-cover
                pointer-events-none
              "
            />
          </motion.div>

          {/* BOTTOM */}

          <motion.div
            className="
              absolute
              left-0
              top-60
              w-full
              h-full
              overflow-hidden
              z-[40]
            "
            animate={{
              y: open ? "110%" : "0%",
            }}
            transition={{
              duration: 1.5,
              ease: [0.77, 0, 0.18, 1],
            }}
          >
            <img
              src="/images/slides.webp"
              alt=""
              draggable={false}
              className="
                w-full
                h-full
                object-cover
                rotate-180
                pointer-events-none
              "
            />
          </motion.div>

                    {/* LEFT */}

          <motion.div
  className="
    absolute
    overflow-hidden
    z-[30]
  "
  style={{
    right: "50%",
    top: "25%",
    width: "120%",
    height: "50%"
  }}
            animate={{
              x: open ? "-115%" : "0%",
            }}
            transition={{
              duration: 1.5,
              ease: [0.77, 0, 0.18, 1],
            }}
          >
            <img
              src="/images/slides.webp"
              alt=""
              draggable={false}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                -rotate-90
                scale-[1.45]
                pointer-events-none
              "
            />
          </motion.div>

          {/* RIGHT */}

                    <motion.div
  className="
    absolute
    overflow-hidden
    z-[30]
  "
  style={{
    left: "50%",
    top: "25%",
    width: "120%",
    height: "50%"
  }}
            animate={{
              x: open ? "115%" : "0%",
            }}
            transition={{
              duration: 1.5,
              ease: [0.77, 0, 0.18, 1],
            }}
          >
            <img
              src="/images/slides.webp"
              alt=""
              draggable={false}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                rotate-90
                scale-[1.45]
                pointer-events-none
              "
            />
          </motion.div>

                    {/* SEAL */}

          <motion.img
            src="/images/seal.webp"
            alt="seal"
            draggable={false}
            className="
              absolute
              left-1/2
              top-1/2
              w-40
              h-40
              -translate-x-1/2
              -translate-y-1/2
              z-[100]
              pointer-events-none
            "
            animate={
              open
                ? {
                    scale: 1.25,
                    opacity: 0,
                  }
                : {
                    scale: 1,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          />

          {/* GLOW */}

          <motion.div
            className="
              absolute
              inset-0
              rounded-[28px]
              pointer-events-none
              z-[5]
            "
            animate={{
              opacity: open ? 0 : 0.15,
            }}
            transition={{
              duration: 1,
            }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,.18), transparent 70%)",
            }}
          />
        </div>
      </div>
    </main>
  )
}