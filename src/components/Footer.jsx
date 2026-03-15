export default function Footer({ config }) {
  const { person1, person2 } = config.couple
  const { dateDisplay } = config.event
  const { name } = config.location.venues[0]

  return (
    <footer className="footer">
      <p>{person1} &amp; {person2} · {dateDisplay} · {name}</p>
      <a
        className="footer-credit"
        href="https://www.flaticon.com/authors/iconmarketpk"
        title="свадьба иконки"
        target="_blank"
        rel="noreferrer"
      >
        Свадьба иконки от IconMarketPK - Flaticon
      </a>
    </footer>
  )
}