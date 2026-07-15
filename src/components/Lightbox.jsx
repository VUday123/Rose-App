export default function Lightbox({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); onClose(); }}>
        ✕
      </button>
      <img src={photo.src} alt={photo.title} onClick={(e) => e.stopPropagation()} />
      <div className="lightbox-cap">{photo.title}</div>
    </div>
  );
}
