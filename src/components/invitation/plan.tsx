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
      date:"13 / 7 / 2026",
      title:"عقد القران",
      place:"جامع ابن عرفة",
      hour:"بعد صلاة العصر",
      map: "https://maps.google.com/?q=33.870778,10.100361",
      icon:"contract",
      side:"right",
    },

    {
      date:"14 / 7 / 2026",
      title:"مأدبة العشاء",
      place:"بقاعة افراح",
      hour:"5:00 PM",
      icon:"food",
      side:"left",
    },

    {
      date:"14 / 7 / 2026",
      title:"مأدبة العشاء",
      place:"بقاعة افراح",
      hour:"5:00 PM",
      icon:"food",
      side:"right",
    },

    {
      date:"14 / 7 / 2026",
      title:"حنة العريس",
      place:"بقاعة افراح",
      hour:"8:00 PM",
      icon:"henna",
      side:"left",
    },

    {
      date:"15 / 7 / 2026",
      title:"حفل الزفاف",
      place:"فضاء عنتر دار الزمان",
      hour:"9:00 PM",
      icon:"wedding",
      side:"right",
    },

  ]



  function EventIcon({type}:{type:string}){


    if(type==="contract"){

      return (

        <div className="relative">

          <BookOpen size={20}/>

          <PenLine
            size={10}
            className="
            absolute
            -right-2
            -bottom-1
            "
          />

        </div>

      )

    }


    if(type==="food")
      return <Utensils size={20}/>


    if(type==="henna")
      return <Heart size={20}/>


    return <Sparkles size={20}/>

  }




  return (

  <section
  className="
    relative
    w-full
    min-h-full
    overflow-hidden
  "
  dir="rtl"
>
  <div
  className="
    absolute
    inset-0
    bg-cover
    bg-top
  "
  style={{
    backgroundImage:"url('/images/plan.jpg')",
    backgroundSize:"100% auto"
  }}
/>



      <div

        className="
        absolute
        inset-0
        bg-[#efe6d6]/55
        "

      />




      <div
className="
relative
z-10
px-5
py-10
pb-24
min-h-[900px]
"
>



        <h2

          className="
          text-center
          text-3xl
          font-serif
          text-[#3d2020]
          "

        >

          برنامج الحفل

        </h2>




        <div

          className="
          w-36
          h-px
          bg-[#af9b6a]
          mx-auto
          mt-4
          mb-8
          "

        />





        <div className="relative">



          <div

            className="
            absolute
            right-1/2
            top-0
            bottom-0
            w-px
            bg-[#af9b6a]
            translate-x-1/2
            "

          />





          <div className="space-y-0">


          {
            events.map((event,index)=>(


              <div

                key={index}

                className="
                relative
                grid
                grid-cols-[1fr_35px_1fr]
                items-start
                "

              >





                {
                  event.side==="left" ? (

                    <div

                      className="
                      text-left
                      pr-2
                      "

                    >

                      <p

                        className="
                        text-sm
                        text-[#7a6048]
                        "

                      >

                        {event.date}

                      </p>



                      <h3

                        className="
                        text-lg
                        font-serif
                        text-[#3d2020]
                        "

                      >

                        {event.title}

                      </h3>




                      <p

                        className="
                        text-sm
                        text-[#5a4030]
                        "

                      >

                        {event.place}

                      </p>




                      <div

                        className="
                        flex
                        justify-start
                        items-center
                        gap-1
                        text-xs
                        text-[#6b5644]
                        mt-1
                        "

                      >

                        <Clock size={12}/>

                        {event.hour}

                      </div>




                      <a
  href={event.map}
  target="_blank"
  rel="noopener noreferrer"

                        className="
                        flex
                        items-center
                        gap-1
                        text-xs
                        text-[#af9b6a]
                        mt-2
                        "

                      >

                        <MapPin size={12}/>

                        الموقع

                      </a>


                    </div>


                  ) : (

                    <div></div>

                  )

                }







                <div

                  className="
                  flex
                  justify-center
                  "

                >

                  <div

                    className="
                    w-8
                    h-8
                    rounded-full
                    border
                    border-[#af9b6a]
                    bg-[#efe6d6]
                    text-[#af9b6a]
                    flex
                    items-center
                    justify-center
                    z-10
                    "

                  >

                    <EventIcon type={event.icon}/>


                  </div>


                </div>








                {
                  event.side==="right" ? (

                    <div

                      className="
                      text-right
                      pl-2
                      "

                    >


                      <p

                        className="
                        text-sm
                        text-[#7a6048]
                        "

                      >

                        {event.date}

                      </p>




                      <h3

                        className="
                        text-lg
                        font-serif
                        text-[#3d2020]
                        "

                      >

                        {event.title}

                      </h3>





                      <p

                        className="
                        text-sm
                        text-[#5a4030]
                        "

                      >

                        {event.place}

                      </p>





                      <div

                        className="
                        flex
                        justify-end
                        items-center
                        gap-1
                        text-xs
                        text-[#6b5644]
                        mt-1
                        "

                      >

                        <Clock size={12}/>

                        {event.hour}

                      </div>





                      <a
  href={event.map}
  target="_blank"
  rel="noopener noreferrer"

                        className="
                        flex
                        justify-end
                        items-center
                        gap-1
                        text-xs
                        text-[#af9b6a]
                        mt-2
                        "

                      >

                        <MapPin size={12}/>

                        الموقع

                      </a>


                    </div>


                  ) : (

                    <div></div>

                  )

                }



              </div>


            ))
          }


          </div>


        </div>


      </div>


    </section>

  )

}