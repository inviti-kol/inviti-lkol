export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a0f12] text-white flex items-center justify-center px-6">

      <section className="max-w-3xl text-center">

        <div className="mb-8">
          <div className="text-5xl mb-4">
            ✦
          </div>

          <h1 className="text-5xl md:text-6xl font-serif tracking-wide">
            InvitiKol
          </h1>

          <p className="mt-4 text-[#d9b98c] text-lg">
            دعوات زفاف رقمية بتصميم خاص
          </p>
        </div>


        <div className="border border-[#d9b98c]/40 rounded-3xl p-8 backdrop-blur-sm bg-white/5">

          <p
            className="text-2xl leading-loose font-serif"
            dir="rtl"
          >
            هل تبحث عن دعوة زفاف إلكترونية تجمع بين الأناقة والتميز؟
            <br />
            نصمم لك دعوة رقمية خاصة تعكس أجمل لحظاتك.
          </p>


          <p
            className="mt-6 text-lg text-gray-200"
            dir="rtl"
          >
            تواصل معنا لإنشاء دعوتك الخاصة
          </p>


          <button className="mt-8 px-8 py-3 rounded-full bg-[#d9b98c] text-[#1a0f12] font-medium hover:scale-105 transition">
            اطلب دعوتك الآن
          </button>

        </div>


        <p className="mt-8 text-sm text-gray-400">
          Wedding Digital Invitations
        </p>

      </section>

    </main>
  )
}