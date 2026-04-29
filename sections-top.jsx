/* global React, Reveal, CountUp, Pill, Arrow, Check, SectionHead */
// M31 — Top sections: Nav, Hero, Marquee, Stats, Services

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
          <a href="#services">What We Build</a>
          <a href="#process">Process</a>
          <a href="#cases">Results</a>
          <a href="#fit">Is This For Me?</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="https://calendly.com/mateo-m31/quick-call" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm nav-cta">
          Book a call <Arrow size={14} />
        </a>
      </div>
    </nav>
  );
}

function Hero({ headline }) {
  return (
    <section id="top" style={{ paddingTop: 'clamp(140px, 16vw, 220px)', paddingBottom: 'clamp(60px, 7vw, 100px)' }}>
      <div className="glow" style={{ width: 720, height: 720, top: -200, left: '50%', transform: 'translateX(-50%)', opacity: 0.16 }} />

      <div className="container" style={{ position: 'relative' }}>


        <Reveal delay={80}>
          <h1 style={{ textAlign: 'center', maxWidth: '22ch', margin: '0 auto', fontSize: 'clamp(42px, 6.5vw, 80px)', lineHeight: 1.15 }}>
            {headline.split('|').map((part, i) =>
              i === 1
                ? <span key={i} className="italic-disp" style={{ color: 'var(--accent)' }}>{part}</span>
                : <span key={i}>{part}</span>
            )}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p style={{
            textAlign: 'center', maxWidth: 640, margin: '32px auto 0',
            fontSize: 'clamp(16px, 1.4vw, 19px)', color: 'var(--ink-2)', lineHeight: 1.55
          }}>
            We build done-for-you low-ticket ascension funnels for coaches &amp; other B2B service businesses doing $30K+ per month — so you can liquidate your Meta Ads on day one and turn low-ticket buyers into high-ticket clients at close to 100% profit.
          </p>
        </Reveal>

        <Reveal delay={240} style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <a href="https://calendly.com/mateo-m31/quick-call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a strategy call <Arrow /></a>
          <a href="#cases" className="btn btn-ghost">See client results</a>
        </Reveal>

        <Reveal delay={320} style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 28, flexWrap: 'wrap', color: 'var(--ink-3)', fontSize: 13 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}><Check size={12} /></span> Break even day one</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}><Check size={12} /></span> Test before you build</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--accent)' }}><Check size={12} /></span> 100% profit on the back end</span>
        </Reveal>

        {/* VSL */}
        <Reveal delay={400} style={{ marginTop: 72 }}>
          <div style={{
            maxWidth: 1080, margin: '0 auto',
            border: '1px solid var(--line-2)',
            borderRadius: 22, overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(74,158,255,0.06)',
          }}>
            <div id="vidalytics_embed_3EtxWJrQAsHugKqW" style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VSLBackground() {
  // Funnel diagram as chart background
  return (
    <svg
      viewBox="0 0 1080 608"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.45 }}
    >
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
    </svg>
  );
}

function MarqueeRow() {
  const items = [
    'EVOLVE · #1 ON SKOOL', 'META ADS LIQUIDATED DAY ONE', '3.5X ROAS', '500+ CUSTOMERS ACQUIRED',
    '$1,500/MO FLAGSHIP ASCENSION', 'TEST BEFORE YOU BUILD', 'COACHES & CONSULTANTS',
    '$30K–$100K/MO BUSINESSES', '100% PROFIT BACKEND', 'DFY LOW-TICKET FUNNELS'
  ];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((it, i) => (
          <div key={i} className="marquee-item">
            <span>{it}</span>
            <span className="dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const items = [
    { num: 3.5, suffix: 'x', prefix: '', lbl: 'ROAS — Evolve (Skool #1)', dec: 1 },
    { num: 500, suffix: '+', prefix: '', lbl: 'Low-ticket customers acquired' },
    { num: 1, suffix: '', prefix: 'Day ', lbl: 'Break-even on Meta Ads' },
    { num: 100, suffix: '%', prefix: '', lbl: 'Profit on back-end sales' },
  ];
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="grid grid-4" style={{ gap: 0 }}>
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="stat" style={{
              padding: '36px 28px',
              borderTop: '1px solid var(--line)',
              borderRight: i < items.length - 1 ? '1px solid var(--line)' : 'none',
            }}>
              <div className="num">
                {s.prefix && <span style={{ color: 'var(--ink-3)', fontSize: '0.55em' }}>{s.prefix}</span>}
                <CountUp to={s.num} suffix={s.suffix} decimals={s.dec || 0} />
              </div>
              <div className="lbl">{s.lbl}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      tag: 'FUNNEL',
      title: 'Full funnel build',
      blurb: 'We build every page of your low-ticket ascension system — sales page, checkout with order bumps, and the post-purchase upsell page that routes buyers into your webinar or book-a-call.',
      bullets: ['Low-ticket sales page', 'Checkout + order bumps', 'Post-checkout upsell / VSL page'],
    },
    {
      tag: 'ADS',
      title: 'Ad creative production',
      blurb: 'We write the copy and produce the creative end-to-end — static ads designed to hook your ICP and video ads scripted, directed, and edited to our spec.',
      bullets: ['Static ad copy + design', 'Video scripts + editing', 'ICP-targeted angle strategy'],
    },
    {
      tag: 'EMAIL',
      title: 'Email sequences',
      blurb: 'We write every email — abandoned cart recovery and post-purchase sequences that ascend low-ticket buyers into your high-ticket webinar or sales call.',
      bullets: ['Abandoned cart flow', 'Post-purchase ascension emails', 'Written in your voice'],
    },
    {
      tag: 'STRATEGY',
      title: 'Offer architecture & MVP testing',
      blurb: 'Before a single product is built, we test three low-ticket concepts on real cold traffic. The winner is chosen by purchase data, not opinion — so you never build something no one wants.',
      bullets: ['3 product concepts generated', 'MVP test on cold traffic', 'Data-driven winner selection'],
    },
  ];
  return (
    <section id="services">
      <div className="container">
        <SectionHead num="01" kicker="WHAT WE BUILD" title={<>Everything, <span className="italic-disp" style={{ color: 'var(--accent)' }}>done for you.</span></>} />
        <div className="grid grid-2">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 2) * 80}>
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
                <h3 style={{ marginTop: 8 }}>{it.title}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.55, maxWidth: '40ch' }}>{it.blurb}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--line)' }}>
                  {it.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                      <span style={{ color: 'var(--accent)', display: 'inline-flex' }}><Check size={14} /></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, MarqueeRow, Stats, Services });
