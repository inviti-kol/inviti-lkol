"use client"

import { useState } from "react"

export default function Home() {

  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#1a0f12] text-white flex items-center justify-center px-6">

      <section className="max-w-3xl text-center">

        <h1 className="text-5xl md:text-6xl font-serif">
          InvitiKol
        </h1>

        <p className="mt-4 text-[#d9b98c] text-xl" dir="rtl">
          دعوات رقمية بتصميم خاص لكل مناسبة
        </p>


        <div className="mt-8 border border-[#d9b98c]/40 rounded-3xl p-8 bg-white/5">

          <p className="text-2xl leading-loose" dir="rtl">
            هل تبحث عن دعوة إلكترونية مميزة تجمع بين الأناقة والإبداع؟
            <br />
            نصمم لك دعوة رقمية خاصة تناسب جميع مناسباتك وتخلّد أجمل لحظاتك.
          </p>

<div
            className="mt-6 text-lg text-gray-200 space-y-2"
            dir="rtl"
          >
            <p>حفلات الزفاف</p>
            <p>أعياد الميلاد</p>
            <p>المناسبات العائلية</p>
            <p>كل أنواع الاحتفالات</p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 px-8 py-3 rounded-full bg-[#d9b98c] text-[#1a0f12]"
          >
            اطلب دعوتك الآن
          </button>

        </div>


        {open && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

            <div className="bg-[#1a0f12] border border-[#d9b98c]/40 rounded-3xl p-8 w-80">

              <h2 className="text-xl mb-6" dir="rtl">
                تواصل معنا
              </h2>


              <a
                href="https://instagram.com/اسم_الحساب"
                target="_blank"
                className="block mb-4 py-3 rounded-full bg-white/10"
              >
                Instagram
              </a>


              <a
                href="https://wa.me/رقمك"
                target="_blank"
                className="block py-3 rounded-full bg-white/10"
              >
                WhatsApp
              </a>


              <button
                onClick={() => setOpen(false)}
                className="mt-6 text-sm text-gray-400"
              >
                إغلاق
              </button>

            </div>

          </div>
        )}

      </section>

    </main>
  )
}