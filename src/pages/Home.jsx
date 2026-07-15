import { heroImage, homeImages } from "../data/photos.js";
import { statStrip } from "../data/content.js";

export default function Home({ setPage }) {
  return (
    <div className="page-fade">
      <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(52,16,31,0.55), rgba(52,16,31,0.78)), url('${heroImage}')` }}>
        <div className="hero-inner">
          <span className="eyebrow">Genus Rosa · Family Rosaceae</span>
          <h1>
            The Rose
            <em>an old bloom, still the world's favorite</em>
          </h1>
          <p>
            Thirty-five million years in the fossil record and still the flower people reach for
            first — to say love, to mark a loss, to fill a room with scent. Explore where it came
            from, what its colors mean, and a gallery of it in bloom.
          </p>
          <button className="hero-cta" onClick={() => setPage("about")}>
            Read the story →
          </button>
        </div>
      </section>

      <div className="stat-strip">
        {statStrip.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>

      <section className="section section-cream">
        <div className="two-col">
          <div className="text-block">
            <span className="eyebrow">A quick introduction</span>
            <h2>More than a bouquet flower</h2>
            <p>
              The rose belongs to Rosaceae, a plant family that also gives us apples, cherries,
              and strawberries — which is why a rose hip, the small fruit left behind after the
              petals drop, looks a little like tiny fruit. Roses grow wild across the temperate
              Northern Hemisphere, and people have been shaping them into garden varieties for
              roughly five thousand years, starting in China.
            </p>
            <p>
              What looks like a thorn is technically a prickle, and the sharp scent that makes
              roses so prized in perfume comes from tiny glands tucked into the petals themselves.
            </p>
            <div className="mini-row">
              <div className="mini-card">
                <img loading="lazy" src={homeImages.gardenBloom} alt="Garden rose bloom" />
                <span>Garden bloom</span>
              </div>
              <div className="mini-card">
                <img loading="lazy" src={homeImages.mixedBouquet} alt="Mixed rose bouquet" />
                <span>Mixed bouquet</span>
              </div>
              <div className="mini-card">
                <img loading="lazy" src={homeImages.closeDetail} alt="Rose close detail" />
                <span>Close detail</span>
              </div>
            </div>
          </div>
          <div className="img-block">
            <img src={homeImages.introBlock} alt="Red rose" />
          </div>
        </div>
      </section>

      <section className="section section-wine">
        <div className="two-col reverse">
          <div className="img-block">
            <img src={homeImages.wineBlock} alt="Rose garden" />
          </div>
          <div className="text-block">
            <span className="eyebrow">Around the world</span>
            <h2>A flower with a passport</h2>
            <p>
              Roses were first cultivated in Chinese imperial gardens, spread through Persia and
              the Mediterranean, and became England's national flower after the 15th-century Wars
              of the Roses. In 1986, the United States named it the country's official floral
              emblem, and today it's the state flower of Iowa, North Dakota, Georgia, New York,
              and the District of Columbia.
            </p>
            <button className="hero-cta" style={{ marginTop: "1rem" }} onClick={() => setPage("about")}>
              See the full history →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
