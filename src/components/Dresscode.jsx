export default function DressCode({ config }) {
  return (
    <div className="dresscode-section">
      <h2 className="dresscode-title">Дресс-код</h2>
      <p className="dresscode-sub">{config.title}</p>
      <div className="color-swatches">
        {config.swatches.map(s => (
          <div key={s.name} className="swatch">
            <div className="swatch-circle" style={{ background: s.color }} />
            <span className="swatch-name">{s.name}</span>
          </div>
        ))}
      </div>
      <p className="dresscode-note">{config.note}</p>
    </div>
  )
}