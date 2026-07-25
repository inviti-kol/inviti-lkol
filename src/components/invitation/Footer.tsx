"use client"

import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Music2 } from "lucide-react"


export default function Footer() {


  return (

    <footer

      className="
      relative
      w-full
      h-full
      min-h-full
      flex
      items-center
      justify-center
      overflow-hidden
      bg-[#efe6d6]
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
        flex-col
        items-center
        gap-6
        text-center
        "

      >



        <div

          className="
          flex
          flex-col
          items-center
          "

        >
<span

            className="
            text-sm
            text-[#6b5644]
            mt-1
            "

          >

            Made by

          </span>
          <a


            target="_blank"

            className="
            text-2xl
            font-serif
            text-[#3d2020]
            "

          >

            Inviti.Lkol

          </a>



          


        </div>






        <div

          className="
          flex
          gap-5
          "

        >



          
          <a

            href=""

            target="_blank"

            className="
            w-10
            h-10
            rounded-full
            border
            border-[#af9b6a]
            flex
            items-center
            justify-center
            text-[#af9b6a]
            "

          >

            <FaWhatsapp size={20}/>

          </a>





          <a

            href=""

            target="_blank"

            className="
            w-10
            h-10
            rounded-full
            border
            border-[#af9b6a]
            flex
            items-center
            justify-center
            text-[#af9b6a]
            "

          >

            <FaInstagram size={20}/>

          </a>



        </div>



      </div>


    </footer>

  )

}