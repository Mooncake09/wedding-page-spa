export default function DressCode({ config }) {
  return (
    <div className="dresscode-section">
      <h2 className="dresscode-title">Дресс-код</h2>
      <p className="dresscode-sub">{config.title}</p>
      <p className="dresscode-note">{config.note}</p>
    </div>
  )
}