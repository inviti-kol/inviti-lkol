import BookInvitation from "@/components/invitation-v2/BookInvitation"
import "@/style/invitation2.css";
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