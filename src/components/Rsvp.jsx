export default function Rsvp({ config }) {
  return (
    <div className="rsvp-section">
      <div className="rsvp-title">Подтвердите присутствие</div>
      <p className="rsvp-sub">Ответить через форму</p>
      <p className="rsvp-deadline">
        Просим подтвердить до <em>{config.deadline}</em>
      </p>
      <div className="rsvp-btn-wrap">
        <a className="rsvp-google-btn" href={config.googleFormUrl} target="_blank" rel="noreferrer">
          Заполнить форму
        </a>
        <p className="rsvp-note">Ссылка ведёт на Google Forms — займёт меньше минуты</p>
      </div>
    </div>
  )
}