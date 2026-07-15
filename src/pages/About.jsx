import { bloomLanguage, colorMeanings } from "../data/content.js";

export default function About() {
  return (
    <div className="page-fade">
      <section className="section section-cream" style={{ paddingTop: "4rem" }}>
        <span className="eyebrow">About the rose</span>
        <h2 style={{ fontSize: "clamp(2.2rem,5vw,3.2rem)", color: "var(--wine)", maxWidth: "760px" }}>
          From wild hedgerow to hybrid tea
        </h2>
        <hr className="divider" />
        <div className="two-col" style={{ marginTop: "2rem" }}>
          <div className="text-block">
            <p>
              Cultivation likely began around five thousand years ago in Chinese gardens, where
              the philosopher Confucius is said to have recorded roses growing at the imperial
              palace. From there the flower moved west through Persia, where it was distilled
              into rosewater and perfume, and eventually into the gardens of ancient Rome and
              medieval Europe.
            </p>
            <p>
              The most significant turning point came in 1867, when the breeder Jean-Baptiste
              André Guillot introduced the first hybrid tea rose — a cross that gave the flower
              longer stems, repeat blooming, and the large, layered shape most people now picture
              when they hear the word "rose." Nearly every modern garden rose descends from that
              lineage.
            </p>
          </div>
          <div className="text-block">
            <p>
              Botanists group roses into three broad categories: <strong>wild or species roses</strong>,
              unaltered and typically five-petaled; <strong>old garden roses</strong>, cultivated
              before 1867 and prized for fragrance; and <strong>modern roses</strong> — hybrid
              teas, floribundas, and grandifloras — bred for repeat blooming and dense, layered
              petals.
            </p>
            <ul className="botany-list">
              <li>
                Each bloom carries both male structures (stamens, tipped with pollen) and female
                structures (carpels), so a single flower can self-pollinate or be cross-pollinated
                by insects and hummingbirds.
              </li>
              <li>
                What people call a rose's thorns are technically prickles — outgrowths of the
                stem's outer layer, not true thorns.
              </li>
              <li>
                After the petals fall, many roses form a small fruit called a hip, which is
                unusually rich in vitamin C.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-wine">
        <span className="eyebrow">The language of roses</span>
        <h2 style={{ color: "var(--cream)", fontSize: "clamp(2rem,4.5vw,2.8rem)" }}>
          What the number of stems is said to mean
        </h2>
        <p style={{ maxWidth: "620px", color: "rgba(251,245,239,0.75)", marginTop: "1rem", fontWeight: 300, lineHeight: 1.7 }}>
          Florists have long used the count of a bouquet to carry its own message — a tradition
          sometimes called the language of flowers.
        </p>
        <ul className="bloom-list">
          {bloomLanguage.map((b) => (
            <li className="bloom-item" key={b.count}>
              <div className="bloom-count">
                {b.count}
                <small>{b.label}</small>
              </div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section-cream">
        <span className="eyebrow">Symbolism by color</span>
        <h2 style={{ color: "var(--wine)", fontSize: "clamp(2rem,4.5vw,2.8rem)" }}>
          Every shade says something different
        </h2>
        <div className="color-grid">
          {colorMeanings.map((c) => (
            <div className="color-card" key={c.name}>
              <div className="swatch" style={{ background: c.color }}></div>
              <h4>{c.name}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
