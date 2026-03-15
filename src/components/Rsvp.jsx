export default function Rsvp({ config }) {
  return (
    <div className="rsvp-section">
      <div className="rsvp-title">Вы с нами?</div>
      {/* <p className="rsvp-sub">Ответить через форму</p> */}
      <p className="rsvp-deadline">
        Пожалуйста, подтвердите своё присутствие до <em>{config.deadline}</em>, нажав на кнопку ниже. Нам не терпится знать, кто разделит с нами этот день!
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