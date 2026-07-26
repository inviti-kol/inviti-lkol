"use client"

export default function Loader() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-[#1a0f12] px-4">

      <div
        className="
          w-[330px]
          h-[620px]
          sm:w-[360px]
          sm:h-[650px]
          md:w-[420px]
          md:h-[700px]
          rounded-[28px]
          bg-[#faf7f1]
          border border-[#e7dcc5]
          shadow-[0_30px_100px_rgba(0,0,0,.35)]
          flex flex-col
          items-center
          justify-center
          relative
          overflow-hidden
        "
      >

        <img
          src="/images/seal.webp"
          alt=""
          className="w-24 mb-10 opacity-95"
        />

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

      </div>

    </main>
  )
}