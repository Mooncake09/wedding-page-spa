import { useState } from 'react'

export default function Location({ config }) {
  const { venues, directions } = config
  const [active, setActive] = useState(0)
  const venue = venues[active]

  return (
    <div className="location-section">
      <div className="loc-title-wrap">
        <h2 className="section-title">Место проведения</h2>
      </div>

      <div className="loc-map-wrap">
        {/* Табы */}
        <div className="loc-tabs">
          {venues.map((v, i) => (
            <button
              key={v.id}
              className={`loc-tab ${active === i ? 'loc-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {v.tab}
            </button>
          ))}
        </div>

        {/* Карта */}
        <div className="map-container">
          {venues.map((v, i) => (
            <iframe
              key={v.id}
              src={v.mapsEmbed}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: 'block',
                position: 'absolute',
                top: 0, left: 0,
                opacity: active === i ? 1 : 0,
                transition: 'opacity 0.35s ease',
                pointerEvents: active === i ? 'auto' : 'none',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={v.name}
            />
          ))}
        </div>

        {/* Фото — высота передаётся на каждый враппер */}
        <div className="venue-photos">
          {venue.photos.map(photo => (
            <div
              key={photo.label}
              className="venue-photo-wrap"
              style={{ height: venue.photoHeight }}
            >
              {photo.src ? (
                <img src={photo.src} alt={photo.label} />
              ) : (
                <div className="venue-photo-placeholder">
                  <span>{photo.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Карточка */}
        <div className="venue-card">
          <div className="venue-info">
            <div className="venue-time">{venue.time}</div>
            <div className="venue-name">{venue.name}</div>
            <div className="venue-addr">{venue.address}</div>

            className="map-link"
            href={venue.mapsUrl}
            target="_blank"
            rel="noreferrer"
            <a>
              Открыть в Яндекс картах →
            </a>
          </div>
          <div className="venue-directions">
            <div className="directions-label">Как добраться</div>
            <div className="directions-text">{directions}</div>
          </div>
        </div>
      </div>
    </div>
  )
}