"use client"

import {
  MapPin,
  Clock,
  BookOpen,
  PenLine,
  Utensils,
  Heart,
  Sparkles,
} from "lucide-react"


export default function Plan() {


  const events = [

    {
      date: "13 / 7 / 2026",
      title: "عقد القران",
      place: "جامع ابن عرفة",
      hour: "بعد صلاة العصر",
      map: "https://maps.app.goo.gl/w25q9GZ45A3RSAiQA",
      icon: "contract",
    },

    {
      date: "14 / 7 / 2026",
      title: "مأدبة العشاء العريس",
      place: "بقاعة افراح",
      hour: "5:00 PM",
      map: "https://maps.app.goo.gl/w25q9GZ45A3RSAiQA",
      icon: "food",
    },

    {
      date: "14 / 7 / 2026",
      title: "مأدبة العشاء العروس",
      place: "بقاعة افراح",
      hour: "5:00 PM",
      map: "https://maps.app.goo.gl/w25q9GZ45A3RSAiQA",
      icon: "food",
    },

    {
      date: "14 / 7 / 2026",
      title: "حنة العريس",
      place: "بقاعة افراح",
      hour: "8:00 PM",
      map: "https://maps.app.goo.gl/w25q9GZ45A3RSAiQA",
      icon: "henna",
    },

    {
      date: "14 / 7 / 2026",
      title: "حنة العروس",
      place: "بقاعة افراح",
      hour: "8:00 PM",
      map: "https://maps.app.goo.gl/w25q9GZ45A3RSAiQA",
      icon: "henna",
    },

    {
      date: "15 / 7 / 2026",
      title: "حفل الزفاف",
      place: "",
      hour: "",
      map: "https://maps.app.goo.gl/w25q9GZ45A3RSAiQA",
      icon: "wedding",
    },

  ]



  return (

    <section

      className="
      relative
      h-full
      bg-cover
      bg-center
      py-14
      px-6
      overflow-hidden
      "

      style={{
        backgroundImage:"url('/images/plan.jpg')"
      }}

      dir="rtl"

    >


      <div
        className="
        absolute
        inset-0
        bg-[#efe6d6]/50
        "
      />



      <div

        className="
        relative
        z-10
        max-w-4xl
        mx-auto
        "

      >


        <h2

          className="
          text-center
          text-3xl
          text-[#3d2020]
          font-serif
          "

        >

          برنامج حفل الزفاف

        </h2>



        <div

          className="
          w-40
          h-px
          bg-[#af9b6a]
          mx-auto
          mt-5
          mb-12
          "

        />




        <div className="relative">


          <div

            className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            bg-[#af9b6a]
            -translate-x-1/2
            "

          />




          <div className="space-y-10">


            {
              events.map((event,index)=>(


                <div

                  key={index}

                  className="
                  grid
                  grid-cols-[1fr_56px_1fr]
                  items-center
                  "

                >



                  <div className="text-left">

                    <p

                      className="
                      text-lg
                      text-[#3d2020]
                      font-serif
                      "

                    >

                      {event.date}

                    </p>

                  </div>





                  <div

                    className="
                    flex
                    justify-center
                    "

                  >


                    <div

                      className="
                      w-10
                      h-10
                      rounded-full
                      border
                      border-[#af9b6a]
                      bg-[#efe6d6]
                      flex
                      items-center
                      justify-center
                      z-10
                      "

                    >



                    {
                      event.icon === "contract" &&

                      <div className="relative">

                        <BookOpen
                          size={24}
                          className="text-[#af9b6a]"
                        />

                        <PenLine
                          size={12}
                          className="
                          absolute
                          -right-2
                          -bottom-1
                          text-[#af9b6a]
                          "
                        />

                      </div>

                    }



                    {
                      event.icon === "food" &&

                      <Utensils

                        size={23}

                        className="text-[#af9b6a]"

                      />

                    }



                    {
                      event.icon === "henna" &&

                      <Heart

                        size={23}

                        className="text-[#af9b6a]"

                      />

                    }



                    {
                      event.icon === "wedding" &&

                      <Sparkles

                        size={23}

                        className="text-[#af9b6a]"

                      />

                    }



                    </div>



                  </div>







                  <div className="text-right">



                    <h3

                      className="
                      text-xl
                      text-[#3d2020]
                      font-serif
                      "

                    >

                      {event.title}

                    </h3>




                    {
                      event.place &&

                      <p

                        className="
                        mt-2
                        text-lg
                        text-[#5a4030]
                        "

                      >

                        {event.place}

                      </p>

                    }





                    {
                      event.hour &&

                      <p

                        className="
                        mt-1
                        flex
                        justify-end
                        items-center
                        gap-2
                        text-[#6b5644]
                        "

                      >

                        <Clock size={16}/>

                        {event.hour}


                      </p>

                    }





                    <a

                      href={event.map}

                      target="_blank"

                      rel="noopener noreferrer"
                    
                      className="
                      mt-3
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-[#af9b6a]
                      underline
                      "

                    >

                      <MapPin size={16}/>

                      الموقع على الخريطة


                    </a>



                  </div>





                </div>


              ))
            }


          </div>


        </div>



      </div>


    </section>

  )

}