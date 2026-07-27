"use client"

import {
  MapPin,
  Clock,
  BookOpen,
  PenLine,
} from "lucide-react"

export default function Plan() {
  return (
    <section
      className="
        relative
        w-full
        h-full
        overflow-hiden
      "
      dir="rtl"
    >
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/images/plan.jpg')",
        }}
      />

      <div
        className="
          absolute
          inset-0
          bg-[#efe6d6]/60
        "
      />

      <div
  className="
    relative
    z-10
    flex
    items-center
    justify-center
    h-full
    px-6
  "
>
        <div
 className="
  w-full
  max-w-md
  px-6
 "
>
          <div
            className="
              flex
              justify-center
            "
          >
            <div
              className="
                w-20
                h-20
                rounded-full
                border-2
                border-[#b89a63]
                bg-[#efe6d6]
                flex
                items-center
                justify-center
                text-[#b89a63]
              "
            >
              <div className="relative">
                <BookOpen size={34} />

                <PenLine
                  size={16}
                  className="
                    absolute
                    -right-3
                    -bottom-2
                  "
                />
              </div>
            </div>
          </div>

          <p
            className="
              text-center
              text-sm
              tracking-[4px]
              text-[#a78958]
            "
          >
            20 / 12 / 2026
          </p>

          <h2
            className="
              mt-4
              text-center
              text-4xl
              font-serif
              text-[#3d2020]
            "
          >
            عقد القران
          </h2>

          <div
            className="
              w-24
              h-px
              bg-[#b89a63]
              mx-auto
              my-6
            "
          />

                    <div
            className="
              space-y-6
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                text-[#5a4030]
              "
            >
              <Clock
                size={20}
                className="text-[#b89a63]"
              />

              <span
                className="
                  text-lg
                  font-serif
                "
              >
                بعد صلاة العصر
              </span>
            </div>

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                text-[#5a4030]
              "
            >
              <MapPin
                size={20}
                className="text-[#b89a63]"
              />

              <span
                className="
                  text-lg
                  font-serif
                "
              >
                بقاعة أفراح
              </span>
            </div>
          </div>

          <div
            className="
              w-20
              h-px
              bg-[#b89a63]
              mx-auto
              my-8
            "
          />

          <a
            href="https://maps.google.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2
              w-full
              rounded-full
              border
              border-[#b89a63]
              py-3
              text-[#b89a63]
              transition
              hover:bg-[#b89a63]
              hover:text-white
            "
          >
            <MapPin size={18} />

            <span>
              الموقع
            </span>
          </a>

          <div
            className="
              mt-10
              text-center
            "
          >
            <p
              className="
                text-[#7a6048]
                leading-8
              "
            >
              نسعد بحضوركم وتشريفكم لنا
              <br />
              في هذا اليوم المبارك
            </p>
          </div>

                  </div>
      </div>
    </section>
  )
}