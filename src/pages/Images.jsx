import { useState } from "react";
import { photos } from "../data/photos.js";
import Lightbox from "../components/Lightbox.jsx";

export default function Images() {
  const [active, setActive] = useState(null);

  return (
    <div className="page-fade section section-cream" style={{ paddingTop: "4rem" }}>
      <span className="eyebrow">Gallery</span>
      <div className="gallery-intro">
        <h2 style={{ color: "var(--wine)", fontSize: "clamp(2.2rem,5vw,3.2rem)" }}>Roses, in bloom</h2>
        <p style={{ color: "#4a2f3a", marginTop: "0.8rem", fontWeight: 300, lineHeight: 1.7 }}>
          A small collection across colors and settings — click any photo for a closer look.
        </p>
      </div>

      <div className="gallery">
        {photos.map((p, i) => (
          <div className="gallery-item" key={i} onClick={() => setActive(p)}>
            <img loading="lazy" src={p.src} alt={p.title} />
            <div className="gallery-caption">
              <div className="tag">{p.tag}</div>
              <h4>{p.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <Lightbox photo={active} onClose={() => setActive(null)} />
    </div>
  );
}
