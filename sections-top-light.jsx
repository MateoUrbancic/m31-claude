/* global React, Reveal, CountUp, Pill, Arrow, Check, SectionHead */
// M31, Top sections: Nav, Hero, Marquee, Stats, Services

const { useState, useRef, useEffect } = React;

function Nav({ accent }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="mark">M</span>
          <span>Marketing<span style={{ color: 'var(--accent)' }}>31</span></span>
        </a>
        <div className="nav-links">
          <a href="#services">What We Do</a>
          <a href="#process">Process</a>
          <a href="#cases">Results</a>
          <a href="#fit">Is This For Me?</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#cta" className="btn btn-primary btn-sm nav-cta">
          Book a call <Arrow size={14} />
        </a>
      </div>
    </nav>);

}

function Hero({ headline }) {
  return (
    <section id="top" style={{ paddingTop: 'clamp(140px, 16vw, 220px)', paddingBottom: 'clamp(60px, 7vw, 100px)' }}>
      <div className="glow" style={{ width: 720, height: 720, top: -200, left: '50%', transform: 'translateX(-50%)', opacity: 0.22 }} />

      <div className="container" style={{ position: 'relative' }}>


        <Reveal delay={80}>
          <h1 style={{ textAlign: 'center', maxWidth: '22ch', margin: '0 auto', fontSize: 'clamp(42px, 6.5vw, 80px)', lineHeight: 1.15 }}>
            {headline.split('|').map((part, i) =>
            i === 1 ?
            <span key={i} className="italic-disp" style={{ color: 'var(--accent)' }}>{part}</span> :
            <span key={i}>{part}</span>
            )}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p style={{
            textAlign: 'center', maxWidth: 660, margin: '32px auto 0',
            fontSize: 'clamp(16px, 1.4vw, 19px)', color: 'var(--ink-2)', lineHeight: 1.55
          }}>We&rsquo;ll analyze your business, pick and build one of the three funnels we specialize in, then create and run the ads that fill your calendar with qualified, ready-to-buy calls every single week. You close the calls. We handle everything else.
          </p>
        </Reveal>

        <Reveal delay={240} style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <a href="#cta" className="btn btn-primary">Book a strategy call <Arrow /></a>
          <a href="#cases" className="btn btn-ghost">See client results</a>
        </Reveal>

        <Reveal delay={320} style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 28, flexWrap: 'wrap', color: 'var(--ink-3)', fontSize: 13 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}><Check size={12} /></span> VSL, webinar &amp; low-ticket funnels</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}><Check size={12} /></span> Ads + creative managed in-house</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}><Check size={12} /></span> Built for $15k+ client LTV</span>
        </Reveal>
      </div>
    </section>);

}

function VSLBackground() {
  // Funnel diagram as chart background
  return (
    <svg
      viewBox="0 0 1080 608"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.45 }}>
      
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </pattern>
        <linearGradient id="funnelg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A9EFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4A9EFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="1080" height="608" fill="url(#grid)" />

      {/* Funnel layers */}
      <polygon points="140,100 940,100 820,220 260,220" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.3)" strokeWidth="1" />
      <polygon points="260,240 820,240 720,340 360,340" fill="rgba(74,158,255,0.16)" stroke="rgba(74,158,255,0.35)" strokeWidth="1" />
      <polygon points="360,360 720,360 640,450 440,450" fill="rgba(74,158,255,0.22)" stroke="rgba(74,158,255,0.4)" strokeWidth="1" />
      <polygon points="440,470 640,470 580,540 500,540" fill="rgba(74,158,255,0.32)" stroke="rgba(74,158,255,0.5)" strokeWidth="1" />

      {/* Labels */}
      <text x="540" y="168" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="13" fontFamily="monospace" letterSpacing="2">META ADS · COLD TRAFFIC</text>
      <text x="540" y="296" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="13" fontFamily="monospace" letterSpacing="2">LOW-TICKET PURCHASE + ORDER BUMPS</text>
      <text x="540" y="410" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="12" fontFamily="monospace" letterSpacing="2">WEBINAR / BOOK-A-CALL</text>
      <text x="540" y="508" textAnchor="middle" fill="rgba(74,158,255,0.8)" fontSize="12" fontFamily="monospace" letterSpacing="2">HIGH-TICKET CLOSE · 100% PROFIT</text>
    </svg>);

}

function ClientLogos() {
  const logos = [
    { src: 'assets/logos/escend.png',   alt: 'Escend Media',   h: 50 },
    { src: 'assets/logos/evolve.png',    alt: 'Evolve',          h: 30 },
    { src: 'assets/logos/oleksiy.png',   alt: 'Oleksiy Kononov', h: 42 },
    { src: 'assets/logos/accurate.png',  alt: 'Accurate English', h: 30 },
    { src: 'assets/logos/kart.png',      alt: 'Kart Academy',    h: 62 },
    { src: 'assets/logos/anabolic.png',  alt: 'Anabolic Beatz',  h: 60 },
  ];
  return (
    <section style={{ paddingTop: 'clamp(24px, 3vw, 48px)', paddingBottom: 'clamp(40px, 5vw, 72px)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 3vw, 44px)' }}>
            <span className="eyebrow"><span className="dot" />THE BUSINESSES WE'VE BUILT FOR</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="client-logos" style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
            gap: 'clamp(36px, 6vw, 88px)'
          }}>
            {logos.map((l, i) => (
              <img key={i} src={l.src} alt={l.alt} style={{ height: l.h, width: 'auto' }} />
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        .client-logos img { opacity: 0.5; transition: opacity .3s ease, transform .3s ease; }
        .client-logos:hover img { opacity: 0.32; }
        .client-logos img:hover { opacity: 0.92; transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

function MarqueeRow() {
  const items = [
  'VSL BOOK-A-CALL FUNNELS', 'WEBINAR FUNNELS', 'LOW-TICKET FUNNELS', 'META + GOOGLE ADS MANAGED',
  'AD CREATIVE · STATIC + VIDEO', '$15K+ CLIENT LTV', 'FULL FUNNEL BUILD', 'EMAIL FOLLOW-UP SEQUENCES',
  'EVOLVE · #1 ON SKOOL', '3.5X ROAS', 'QUALIFIED PIPELINE ON DEMAND'];

  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((it, i) =>
        <div key={i} className="marquee-item">
            <span>{it}</span>
            <span className="dot" />
          </div>
        )}
      </div>
    </div>);

}

function Stats() {
  const items = [
  { num: 3.5, suffix: 'x', prefix: '', lbl: 'ROAS · Evolve (Skool #1)', dec: 1 },
  { num: 500, suffix: '+', prefix: '', lbl: 'Low-ticket customers acquired' },
  { num: 1, suffix: '', prefix: 'Day ', lbl: 'Break-even on Meta Ads' },
  { num: 100, suffix: '%', prefix: '', lbl: 'Profit on back-end sales' }];

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="grid grid-4" style={{ gap: 0 }}>
          {items.map((s, i) =>
          <Reveal key={i} delay={i * 80} className="stat" style={{
            padding: '36px 28px',
            borderTop: '1px solid var(--line)',
            borderRight: i < items.length - 1 ? '1px solid var(--line)' : 'none'
          }}>
              <div className="num">
                {s.prefix && <span style={{ color: 'var(--ink-3)', fontSize: '0.55em' }}>{s.prefix}</span>}
                <CountUp to={s.num} suffix={s.suffix} decimals={s.dec || 0} />
              </div>
              <div className="lbl">{s.lbl}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function Services() {
  const items = [
  {
    tag: 'FUNNELS',
    title: 'Funnel design & build',
    blurb: 'We architect and build the entire funnel (VSL, webinar, or low-ticket), including every page, the checkout or application logic, and the booking flow.',
    bullets: ['VSL & application funnels', 'Webinar registration + replay', 'Low-ticket checkout + upsells']
  },
  {
    tag: 'ADS',
    title: 'Paid traffic management',
    blurb: 'We run your Meta and Google ads end-to-end, audience strategy, daily optimisation, and scaling spend as the funnel proves itself out.',
    bullets: ['Meta + Google media buying', 'Daily optimisation', 'Confident spend scaling']
  },
  {
    tag: 'CREATIVE',
    title: 'Ad creative production',
    blurb: 'Static and video creative produced in-house, written, designed, scripted, and edited to hook your ideal client and stop the scroll.',
    bullets: ['Static ad design + copy', 'Video scripts + editing', 'ICP-driven angle strategy']
  },
  {
    tag: 'EMAIL',
    title: 'Email & follow-up',
    blurb: 'Every sequence written for you, webinar reminders, no-show follow-up, booked-call nurture, and post-purchase ascension that moves buyers up.',
    bullets: ['Webinar reminder + replay flows', 'Booked-call follow-up', 'Ascension sequences']
  },
  {
    tag: 'STRATEGY',
    title: 'Offer & funnel architecture',
    blurb: 'Before anything is built, we map your offer and ICP to the funnel that actually fits, so you’re not forcing a webinar where a VSL would convert better.',
    bullets: ['Offer + ICP breakdown', 'Funnel-type selection', 'Messaging direction']
  },
  {
    tag: 'TRACKING',
    title: 'Tracking & optimisation',
    blurb: 'Full conversion tracking and ongoing CRO across every page, so decisions are driven by data, not guesses, and the funnel keeps getting cheaper to scale.',
    bullets: ['Pixel + conversion tracking', 'Funnel-wide CRO', 'Reporting you can actually read']
  }];

  return (
    <section id="services">
      <div className="container">
        <SectionHead num="03" kicker="WHAT WE DO" title={<>Everything your funnel needs, <span className="italic-disp" style={{ color: 'var(--accent)' }}>done for you.</span></>} />
        <div className="grid grid-3">
          {items.map((it, i) =>
          <Reveal key={i} delay={i % 2 * 80}>
              <div className="card" style={{ padding: 32, height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  color: 'var(--accent)', letterSpacing: '0.12em',
                  padding: '4px 10px', border: '1px solid rgba(74,158,255,0.3)',
                  borderRadius: 999, background: 'rgba(74,158,255,0.04)'
                }}>{it.tag}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)' }}>0{i + 1}</span>
                </div>
                <h3 style={{ marginTop: 8, fontSize: 'clamp(20px, 2vw, 26px)' }}>{it.title}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.55 }}>{it.blurb}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--line)' }}>
                  {it.bullets.map((b, j) =>
                <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                      <span style={{ color: 'var(--accent)', display: 'inline-flex' }}><Check size={14} /></span>
                      {b}
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { Nav, Hero, ClientLogos, MarqueeRow, Stats, Services });