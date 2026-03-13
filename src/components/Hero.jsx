export default function Hero({ config }) {
  const { person1, person2 } = config.couple
  const { dateDisplay } = config.event

  return (
    <div className="hero">
      <p className="invite-label">с радостью приглашают вас на свою свадьбу</p>
      <div className="names">
        {person1}
        <span className="ampersand">&amp;</span>
        {person2}
      </div>
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-orn">❧</span>
        <div className="divider-line" />
      </div>
      <p className="date-block">
        <span className="date-hi">{dateDisplay}</span>
      </p>
    </div>
  )
}