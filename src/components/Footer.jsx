export default function Footer({ config }) {
  const { person1, person2 } = config.couple
  const { dateDisplay } = config.event
  const { name } = config.location

  return (
    <footer className="footer">
      {person1} &amp; {person2} · {dateDisplay} · {name}
    </footer>
  )
}