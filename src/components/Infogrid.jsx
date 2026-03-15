export default function InfoGrid({ config }) {
  const { event } = config

  const cells = [
    { icon: '◎', label: 'Церемония',  value: '17:00 · ' + event.venue },
    { icon: '◈', label: 'Фуршет',      value: '18:00· Ya-cafe 3' },
    { icon: '◉', label: 'Банкет',     value: '19:00 · Ya-cafe 3' },
    { icon: '◌', label: 'Дресс-код',  value: event.dressCode },
  ]

  return (
    <div className="info-grid">
      {cells.map(cell => (
        <div key={cell.label} className="info-cell">
          <div className="info-icon">{cell.icon}</div>
          <div className="info-label">{cell.label}</div>
          <div className="info-value">{cell.value}</div>
        </div>
      ))}
    </div>
  )
}