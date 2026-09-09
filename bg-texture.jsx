/* global React */
// M31 — Hero background texture: faint performance-marketing motifs framing the headline.
// Lives ONLY inside the hero (above the fold), positioned in the side margins around the text.

function BgTexture() {
  const Spark = ({ w = 44, h = 17 }) => (
    <svg width={w} height={h} viewBox="0 0 46 18" fill="none">
      <path d="M1 15 L9 11 L15 13 L23 6 L31 9 L39 3 L45 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39 3 L45 5 L45 17 L1 17 Z" fill="currentColor" opacity="0.12" />
    </svg>
  );
  const Bars = ({ w = 38, h = 20 }) => (
    <svg width={w} height={h} viewBox="0 0 40 22" fill="none">
      {[3, 9, 6, 13, 10, 17].map((bh, i) => (
        <rect key={i} x={i * 7} y={22 - bh} width="4.5" height={bh} rx="1" fill="currentColor" />
      ))}
    </svg>
  );
  const TrendUp = ({ w = 28, h = 28 }) => (
    <svg width={w} height={h} viewBox="0 0 30 30" fill="none">
      <path d="M4 22 L12 14 L17 18 L26 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 7 L26 7 L26 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const Funnel = ({ w = 24, h = 24 }) => (
    <svg width={w} height={h} viewBox="0 0 26 26" fill="none">
      <path d="M2 4 H24 L16 13 V22 L10 19 V13 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
  const Cursor = ({ w = 20, h = 20 }) => (
    <svg width={w} height={h} viewBox="0 0 22 22" fill="none">
      <path d="M4 3 L18 9 L11 11 L9 18 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );

  // c: 'a' accent (blue), 'g' green, undefined = ink. Placed in side margins.
  const items = [
    // Left column
    { x: 6,  y: 11, t: '$129K',      s: 18, r: -8, c: 'a', o: 1 },
    { x: 9,  y: 27, g: 'spark',      r: -3, c: 'g', o: 1 },
    { x: 4,  y: 44, t: 'ROAS',       s: 14, r: 5,  c: 'g', o: 0.9 },
    { x: 10, y: 60, g: 'bars',       r: 0,  c: 'a', o: 0.95 },
    { x: 5,  y: 77, t: 'META ADS',   s: 12, r: -5, o: 0.85 },
    { x: 12, y: 90, g: 'cursor',     r: 6,  o: 0.85 },
    // Right column
    { x: 94, y: 13, t: 'CTR',        s: 13, r: -6, o: 0.85 },
    { x: 91, y: 29, g: 'trend',      r: -4, c: 'g', o: 1 },
    { x: 96, y: 46, t: '$96K',       s: 18, r: 4,  c: 'a', o: 1 },
    { x: 90, y: 62, g: 'funnel',     r: 6,  o: 0.9 },
    { x: 95, y: 79, t: '3.5x',       s: 16, r: -5, c: 'g', o: 1 },
    { x: 88, y: 92, t: 'CPA \u2193', s: 13, r: 4,  o: 0.85 },
  ];

  const glyph = (g) => ({ spark: <Spark />, bars: <Bars />, trend: <TrendUp />, funnel: <Funnel />, cursor: <Cursor /> }[g] || null);
  const base = { a: 0.13, g: 0.13 };  // faded; ink default below
  const cls = { a: ' is-accent', g: ' is-green' };

  return (
    <div className="bg-texture" aria-hidden="true">
      {items.map((it, i) => (
        <span
          key={i}
          className={'bg-tex-item' + (it.c ? cls[it.c] : '')}
          style={{
            left: it.x + '%',
            top: it.y + '%',
            transform: 'translate(-50%, -50%) rotate(' + it.r + 'deg)',
            fontSize: it.s ? it.s + 'px' : undefined,
            opacity: (it.c ? base[it.c] : 0.09) * it.o,
          }}
        >
          {it.g ? glyph(it.g) : it.t}
        </span>
      ))}
    </div>
  );
}

Object.assign(window, { BgTexture });
