import type { Metadata } from "next"
import BookInvitation from "@/components/Sdag/BookInvitation"
import "@/style/Sdag.css"

export const metadata: Metadata = {
  title: "دعوة عقد القران بهاء وسيرين",
  description: "يسرنا دعوتكم لمشاركتنا فرحتنا.",

  openGraph: {
    title: "دعوة عقد القران بهاء وسيرين",
    description: "يسرنا دعوتكم لمشاركتنا فرحتنا.",
    url: "https://inviti-lkol.netlify.app/baha-sirine-sdag",
    siteName: "InvitiKol",
    images: [
  {
    url: "https://inviti-lkol.netlify.app/images/b_s.png",
    width: 1200,
    height: 630,
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
    images: ["https://inviti-lkol.netlify.app/images/b_s.png"],
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