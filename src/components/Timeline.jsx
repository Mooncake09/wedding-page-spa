export default function Timeline({ events }) {
  return (
    <>
      <div className="section" style={{ paddingBottom: 0 }}>
        <h2 className="section-title">Программа дня</h2>
      </div>
      <div className="timeline">
        {events.map((ev, i) => (
          <div key={i} className={`t-event ${i % 2 === 0 ? 't-event--left' : 't-event--right'}`}>
            <div className="t-content">
              <div className="t-time">{ev.time}</div>
              <div className="t-name">{ev.title}</div>
              <div className="t-desc">{ev.desc}</div>
            </div>
            <div className="t-dot" />
          </div>
        ))}
      </div>
    </>
  )
}