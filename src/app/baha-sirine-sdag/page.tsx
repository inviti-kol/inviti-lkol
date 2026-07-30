import type { Metadata } from "next"
import BookInvitation from "@/components/Sdag/BookInvitation"
import "@/style/Sdag.css"

export const metadata: Metadata = {
  title: "دعوة عقد القران بهاء وسيرين",
  description: "يسرنا دعوتكم لمشاركتنا فرحتنا.",

  openGraph: {
    title: "دعوة زفاف بهاء وسيرين",
    description: "يسرنا دعوتكم لمشاركتنا فرحتنا.",
    url: "https://inviti-lkol.netlify.app/baha-sirine-sdag",
    siteName: "InvitiKol",
    images: [
      {
        url: "https://inviti-lkol.netlify.app/images/bs.svg", // o b&s.svg si no lo renombras
        width: 512,
        height: 512,
        alt: "B&S",
      },
    ],
    locale: "ar",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "دعوة عقد القران بهاء وسيرين",
    description: "يسرنا دعوتكم لمشاركتنا فرحتنا.",
    images: ["https://inviti-lkol.netlify.app/images/bs.svg"],
  },
}

export default async function Invitation({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  return <BookInvitation />
}