import type { Metadata } from "next"
import BookInvitation from "@/components/Sdag/BookInvitation"
import "@/style/Sdag.css"

export const metadata: Metadata = {
  title: "دعوة عقد القران بهاء وسيرين",
  description:
    "يسرنا دعوتكم لحضور عقد قران بهاء وسيرين ومشاركتنا هذه المناسبة السعيدة، حضوركم يزيد فرحتنا ويشرفنا.",

  openGraph: {
    title: "دعوة عقد القران بهاء وسيرين",
    description:
      "يسرنا دعوتكم لحضور عقد قران بهاء وسيرين ومشاركتنا هذه المناسبة السعيدة، حضوركم يزيد فرحتنا ويشرفنا.",
    siteName: "InvitiKol",
    locale: "ar",
    type: "website",
    images: [
      {
        url: "/images/bs_2.png?=v1",
        width: 1200,
        height: 630,
        alt: "دعوة عقد القران بهاء وسيرين",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "دعوة عقد القران بهاء وسيرين",
    description:
      "يسرنا دعوتكم لحضور عقد قران بهاء وسيرين ومشاركتنا هذه المناسبة السعيدة، حضوركم يزيد فرحتنا ويشرفنا.",
    images: [
      "/images/bs_2.png?=v1",
    ],
  },
}

export default async function Invitation({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  await params

  return <BookInvitation />
}