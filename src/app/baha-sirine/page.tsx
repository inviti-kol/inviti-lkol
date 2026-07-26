import BookInvitation from "@/components/invitation/BookInvitation"
import "@/style/invitation.css";
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