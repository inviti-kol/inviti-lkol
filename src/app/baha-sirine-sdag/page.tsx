import BookInvitation from "@/components/Sdag/BookInvitation"
import "@/style/Sdag.css";
export default async function Invitation({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  return (
    <BookInvitation />
  )
}