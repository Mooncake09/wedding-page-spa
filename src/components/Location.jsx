import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Location({ config }) {
  const { venues, directions } = config
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const venue = venues[active]

  useEffect(() => {
    if (!lightbox) return
    const handleKey = e => { if (e.key === 'Escape') setLightbox(null) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightbox])

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

        {/* Фото */}
        <div className="venue-photos">
          {venue.photos.map(photo => (
            <div
              key={photo.label}
              className="venue-photo-wrap"
              onClick={() => photo.src && setLightbox(photo)}
            >
              {photo.src ? (
                <img src={photo.src} alt={photo.label} />
              ) : (
                <div className="venue-photo-placeholder">
                  <span>{photo.label}</span>
                </div>
              )}
              {photo.src && (
                <div className="photo-overlay">
                  <span className="photo-overlay-icon">⊕</span>
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
            <a
              className="map-link"
              href={venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Открыть в Яндекс картах →
            </a>
          </div>
          <div className="venue-directions">
            <div className="directions-label">Как добраться</div>
            <div className="directions-text">{directions}</div>
          </div>
        </div>
      </div>

      {/* Лайтбокс рендерится прямо в body через портал */}
      {lightbox && createPortal(
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label} />
            <p className="lightbox-label">{lightbox.label}</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}