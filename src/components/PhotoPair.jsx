export default function PhotoPair({ photos }) {
  return (
    <div className="photo-pair">
      {photos.map(photo => (
        <div key={photo.label} className="photo-pair-item">
          <img src={photo.src} alt={photo.label} />
        </div>
      ))}
    </div>
  )
}