export default function InfoGrid({ config }) {
  const { event } = config

  const cells = [
    { icon: '◎', label: 'Церемония',  value: '17:00' },
    { icon: '◈', label: 'Место',      value: event.venue },
    { icon: '◉', label: 'Банкет',     value: '18:30 · Ya-cafe 3' },
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