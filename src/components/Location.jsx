export default function Location({ config }) {
  const { name, address, directions, mapsUrl, mapsEmbed, photos } = config

  return (
    <div className="location-section">
      <div className="loc-title-wrap">
        <h2 className="section-title">Место проведения</h2>
      </div>

      {/* Карта — если есть embed-ссылка, показываем iframe, иначе плейсхолдер */}
      <div className="map-container">
        {mapsEmbed ? (
          <iframe
            src={mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={name}
          />
        ) : (
          <div className="map-placeholder">
            <span>Карта загружается...</span>
          </div>
        )}
      </div>

      {/* Фото локации */}
      {photos.length > 0 && (
        <div className="venue-photos">
          {photos.map(photo => (
            <div key={photo.label} className="venue-photo-wrap">
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
      )}

      {/* Карточка с адресом */}
      <div className="venue-card">
        <div className="venue-info">
          <div className="venue-name">{name}</div>
          <div className="venue-addr">{address}</div>
          
            className="map-link"
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
          <a>
            Открыть в Google Maps →
          </a>
        </div>
        <div className="venue-directions">
          <div className="directions-label">Как добраться</div>
          <div className="directions-text">{directions}</div>
        </div>
      </div>
    </div>
  )
}