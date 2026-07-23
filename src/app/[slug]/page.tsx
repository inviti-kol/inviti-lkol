export default async function Invitation({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  return (
    <main>
      <h1>Invitación de boda</h1>
      <p>Pareja: {slug}</p>
    </main>
  )
}