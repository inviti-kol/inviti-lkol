"use client"

import Plan from "./plan"


export default function Plan2(){

return (

<section
className="
relative
w-full
h-full
bg-cover
bg-center
px-6
py-10
"

dir="rtl"
>


<div className="
absolute
inset-0
bg-[#efe6d6]/60
"/>


<div className="
relative
z-10
mt-10
space-y-12
">


<Item
date="14 / 7 / 2026"
title="مأدبة العشاء"
place="بقاعة افراح"
hour="5:00 PM"
/>


<Item
date="14 / 7 / 2026"
title="حنة العريس"
place="بقاعة افراح"
hour="8:00 PM"
/>


<Item
date="14 / 7 / 2026"
title="حنة العروس"
place="بقاعة افراح"
hour="8:00 PM"
/>


</div>


</section>

)

}



function Item({date,title,place,hour}:any){

return (

<div className="
border-r
border-[#af9b6a]
pr-5
text-right
">


<p className="text-sm text-[#7a6048]">
{date}
</p>


<h3 className="
text-xl
font-serif
text-[#3d2020]
">
{title}
</h3>


<p className="text-[#5a4030]">
{place}
</p>


<p className="
text-sm
text-[#6b5644]
mt-2
">
{hour}
</p>


</div>

)

}