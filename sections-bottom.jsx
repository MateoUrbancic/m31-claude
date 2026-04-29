/* global React, Reveal, CountUp, Pill, Arrow, Check, Plus, SectionHead */
// M31 — Bottom sections: Process, Cases, Testimonials, Founder, Fit, FAQ, CTA, Footer

const { useState } = React;

function Process() {
  const steps = [
    {
      n: '01', t: 'Offer Architecture', dur: 'Days 1–3',
      blurb: 'We map your high-ticket offer, define the Ideal Customer Profile in detail, and translate that ICP into messaging direction for Meta Ads.',
      bullets: ['High-ticket offer breakdown', 'ICP definition', 'Messaging direction']
    },
    {
      n: '02', t: 'MVP Testing', dur: 'Days 3–10',
      blurb: 'We generate three low-ticket product concepts and test all three on cold traffic in parallel — before anything is built. First sales come in inside the first week.',
      bullets: ['3 product concepts', 'Parallel cold-traffic tests', 'First sales in under a week']
    },
    {
      n: '03', t: 'Product Build & Full Funnel', dur: 'Days 10–21',
      blurb: 'You create the winning product while we build the full system in parallel — sales page, checkout, order bumps, post-checkout upsell, ad creative, and email sequences.',
      bullets: ['Full funnel in GHL / ClickFunnels', 'Static + video ad creative', 'Abandoned cart + ascension emails']
    },
    {
      n: '04', t: 'Launch, Optimize & Scale', dur: 'Weeks 4–12',
      blurb: 'Validated product goes live. We monitor early performance, build new order bumps to increase AOV, iterate creative, and scale ad spend as the system proves itself.',
      bullets: ['CRO on all funnel pages', 'New creative angles monthly', 'Ad spend scaled confidently']
    },
  ];
  return (
    <section id="process" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead
          num="02" kicker="PROCESS · 21 DAYS TO LAUNCH"
          title={<>Test first. Build second. <span className="italic-disp" style={{ color: 'var(--accent)' }}>Scale always.</span></>}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 1fr 200px',
                gap: 32,
                padding: '32px 0',
                borderTop: '1px solid var(--line)',
                borderBottom: i === steps.length - 1 ? '1px solid var(--line)' : 'none',
                alignItems: 'baseline',
              }} className="proc-row">
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--accent)', letterSpacing: '0.1em' }}>{s.n}</div>
                <div>
                  <h3 style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}>{s.t}</h3>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', marginTop: 8, letterSpacing: '0.08em' }}>{s.dur.toUpperCase()}</div>
                </div>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, maxWidth: '42ch' }}>{s.blurb}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-3)' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) { .proc-row { grid-template-columns: 1fr !important; gap: 12px !important; } }
        `}</style>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    {
      tag: 'COMMUNITY · SKOOL',
      brand: 'Evolve',
      headline: '3.5x ROAS and 500+ customers for the #1 community on Skool.',
      bullets: [
        ['3.5x', 'Return on Ad Spend'],
        ['500+', 'Low-ticket customers'],
        ['$99/mo', 'Origins ascension'],
        ['$1,500/mo', 'Evolve flagship ascension'],
      ],
      quote: 'We built a low-ticket funnel selling winning ad templates as the front-end product. Buyers were routed straight into a post-purchase VSL — no separate webinar, no call booking. The system converted cold traffic into $1,500/mo members.',
      author: 'Spencer, Founder — Evolve',
      sparkline: [4, 5, 6, 8, 11, 16, 22, 28, 35, 42, 50, 58],
    },
    {
      tag: 'AGENCY · EMAIL MARKETING',
      brand: 'Email Marketing Agency',
      headline: 'Low-ticket front end booked calls with $50K/mo and $500K/mo e-commerce brands.',
      bullets: [
        ['$0', 'Prior paid ad spend'],
        ['2', 'Qualified sales calls booked'],
        ['$500K/mo', 'Largest brand reached'],
        ['Low', 'Ad budget used'],
      ],
      quote: 'The lead quality argument was the key takeaway: a low-ticket product booked sales calls with brands at $50K/mo and $500K/mo. This is direct evidence against the assumption that low-ticket products attract low-intent leads.',
      author: 'Founder — Email Marketing Agency',
      sparkline: [2, 3, 3, 5, 7, 9, 12, 14, 17, 19, 22, 24],
    },
  ];
  return (
    <section id="cases">
      <div className="container">
        <SectionHead
          num="03" kicker="CASE STUDIES · REAL RESULTS"
          title={<>Proof the <span className="italic-disp" style={{ color: 'var(--accent)' }}>system works.</span></>}
        />
        <div className="grid" style={{ gap: 18 }}>
          {cases.map((c, i) => <CaseCard key={i} c={c} />)}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ c }) {
  const w = 280, h = 80, pad = 6;
  const min = Math.min(...c.sparkline), max = Math.max(...c.sparkline);
  const range = max - min || 1;
  const pts = c.sparkline.map((v, i) => {
    const x = pad + (i / (c.sparkline.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return [x, y];
  });
  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const fillPath = `${linePath} L ${pts[pts.length - 1][0]} ${h - pad} L ${pts[0][0]} ${h - pad} Z`;

  return (
    <Reveal>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 0, minHeight: 340 }} className="case-grid">
          <div style={{ padding: 36, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em' }}>{c.tag}</span>
              <span style={{ fontWeight: 500, letterSpacing: '-0.01em' }}>{c.brand}</span>
            </div>
            <h3 style={{ fontSize: 'clamp(20px, 2.4vw, 32px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '26ch' }}>
              {c.headline}
            </h3>
            <blockquote style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55, fontStyle: 'normal', maxWidth: '52ch', marginTop: 'auto' }}>
              {c.quote}
              <div style={{ marginTop: 12, fontSize: 12, color: 'var(--ink-4)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em' }}>— {c.author.toUpperCase()}</div>
            </blockquote>
          </div>

          <div style={{
            background: 'linear-gradient(180deg, rgba(74,158,255,0.06) 0%, transparent 100%)',
            borderLeft: '1px solid var(--line)',
            padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {c.bullets.map(([n, l], i) => (
                <div key={i}>
                  <div style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1 }}>
                    <span className="tnum" style={{ color: i === 1 || i === 2 ? 'var(--accent)' : 'var(--ink)' }}>{n}</span>
                  </div>
                  <div style={{ marginTop: 8, fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
            <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', height: 80 }}>
              <defs>
                <linearGradient id={`sg-${c.brand.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={fillPath} fill={`url(#sg-${c.brand.replace(/\s/g, '')})`} />
              <path d={linePath} stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {pts.map((p, i) => i === pts.length - 1 && <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="var(--accent)" />)}
            </svg>
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) {
            .case-grid { grid-template-columns: 1fr !important; }
            .case-grid > div:last-child { border-left: 0 !important; border-top: 1px solid var(--line); }
          }
        `}</style>
      </div>
    </Reveal>
  );
}

function Testimonials() {
  const items = [
    { q: 'I was spending $300/day on Meta and waiting two weeks to find out if I broke even. This system flipped that on day one.', n: 'James T.', r: 'Business coach, $45K/mo', m: '$45K MRR' },
    { q: 'The test-before-you-build process alone saved me from building a product nobody wanted. They picked the winner in six days.', n: 'Priya A.', r: 'Career consultant', m: '$62K MRR' },
    { q: 'Every high-ticket client I close now is pure profit. The ad spend is covered before they ever get on a call with me.', n: 'Marcus V.', r: 'Sales training consultant', m: '$88K MRR' },
    { q: 'I was convinced low-ticket would cheapen my brand. They proved me wrong with the first week of data.', n: 'Rachel D.', r: 'Executive coach', m: '$37K MRR' },
    { q: 'The order bumps alone covered our daily ad spend. Everything that books a call after that is money in the bank.', n: 'Tom H.', r: 'LinkedIn growth consultant', m: '$55K MRR' },
    { q: 'Six weeks in, our cost per booked call dropped by 60%. The system is exactly as advertised.', n: 'Aanya S.', r: 'Health & mindset coach', m: '$41K MRR' },
  ];
  return (
    <section style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead
          num="04" kicker="CLIENT RESULTS"
          title={<>What coaches say <span className="italic-disp" style={{ color: 'var(--accent)' }}>after we build.</span></>}
        />
        <div className="grid grid-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" style={{ color: 'var(--accent)' }}>
                  <path d="M0 18V11C0 7.5 0.7 4.7 2 2.5C3.3 0.8 5.2 0 7.5 0V4C6.2 4 5.2 4.4 4.6 5.3C4 6.1 3.7 7.4 3.7 9H7.5V18H0ZM14.5 18V11C14.5 7.5 15.2 4.7 16.5 2.5C17.8 0.8 19.7 0 22 0V4C20.7 4 19.7 4.4 19.1 5.3C18.5 6.1 18.2 7.4 18.2 9H22V18H14.5Z" fill="currentColor"/>
                </svg>
                <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink)', flex: 1 }}>{t.q}</p>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 14 }}>{t.n}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{t.r}</div>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--accent)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{t.m}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section>
      <div className="container">
        <SectionHead num="05" kicker="WHO WE ARE" title={<>Built by someone who <span className="italic-disp" style={{ color: 'var(--accent)' }}>runs these funnels.</span></>} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'center' }} className="founder-grid">
          <Reveal>
            <div style={{
              aspectRatio: '4 / 5', borderRadius: 20,
              border: '1px solid var(--line-2)', position: 'relative', overflow: 'hidden',
            }}>
              <img src="uploads/pasted-1777447567637-0.png" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
                <span>FOUNDER</span><span>MARKETING31</span>
              </div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Mateo</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 4, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>Founder, Marketing31</div>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--accent)', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>● ONLINE</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p style={{ fontSize: 'clamp(19px, 2vw, 25px)', lineHeight: 1.45, letterSpacing: '-0.015em' }}>
                I built this system because I was tired of watching coaches bleed money on Meta
                for two weeks just to find out whether their ads worked.
                <span style={{ color: 'var(--ink-3)' }}> There&rsquo;s a better structure — one that liquidates your ad spend on day one and turns every high-ticket close into pure profit.</span>
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-2)', maxWidth: '60ch' }}>
                We built the low-ticket ascension system for Evolve — now the #1 community on Skool —
                and it produced 3.5x ROAS and 500+ customers, with a portion ascending into a $1,500/month flagship.
                The methodology is proven. The execution is done for you.
              </p>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                {[
                  { n: '#1', l: 'Skool community client' },
                  { n: '3.5x', l: 'ROAS — flagship case study' },
                  { n: 'Day 1', l: 'Break-even guarantee' },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: '-0.03em' }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 900px) { .founder-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function Fit() {
  const fit = [
    'Coaching, consulting, or a high-LTV service business',
    'Doing $30K–$100K/month — organically or on paid',
    'High-ticket offer worth $10K+ lifetime value per customer',
    'Able to spend at least $100/day ($3K/mo) on Meta Ads',
    'Already running — or ready to run — webinars or sales calls as your backend conversion mechanism',
  ];
  const notFit = [
    'No proven high-ticket offer on the back end',
    'No logical low-ticket product (no template, toolkit, or mini-training maps to your offer)',
    'Below $30K/month — not enough volume to feed the back end',
    'Not willing to test before you build — the MVP phase is non-negotiable',
    'Looking for SEO, organic content, or brand work as the primary lever',
  ];
  return (
    <section id="fit" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead num="06" kicker="IS THIS FOR ME?" title={<>The system works — <span className="italic-disp" style={{ color: 'var(--accent)' }}>for the right business.</span></>} />
        <div className="grid grid-2" style={{ gap: 24 }}>
          <Reveal>
            <div className="card" style={{ padding: 36, height: '100%', borderColor: 'rgba(91,255,143,0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(91,255,143,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#5BFF8F' }}><Check size={18} /></span>
                <h3 style={{ fontSize: 24 }}>You&rsquo;re a fit if…</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {fit.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.5, color: 'var(--ink)' }}>
                    <span style={{ color: '#5BFF8F', flexShrink: 0, marginTop: 4 }}><Check /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card" style={{ padding: 36, height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,92,61,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--warn)', fontSize: 22, lineHeight: 1 }}>×</span>
                <h3 style={{ fontSize: 24 }}>Probably not if…</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {notFit.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.5, color: 'var(--ink-2)' }}>
                    <span style={{ color: 'var(--ink-4)', flexShrink: 0, marginTop: 4, fontSize: 18, lineHeight: '20px' }}>×</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Pricing */}
        <Reveal delay={240}>
          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="price-grid">

            {/* Package 1 */}
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em', marginBottom: 16 }}>PACKAGE 01 · SETUP + SUPPORT</div>
              <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6 }}>$1,500<span style={{ color: 'var(--ink-3)', fontSize: 20 }}> one-time</span></div>
              <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.55, marginBottom: 24, marginTop: 12, maxWidth: '40ch' }}>Full funnel built professionally. You run and optimise it yourself day-to-day with text support from us after launch.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {['Full funnel build — sales page, checkout, order bumps, upsell', 'Ad creative — static + video', 'Email sequences — cart + post-purchase', 'Slack / Discord text support post-launch'].map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ink-2)', alignItems: 'baseline' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}><Check size={13} /></span>{b}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="btn btn-ghost" style={{ alignSelf: 'flex-start' }}>Get started <Arrow size={14} /></a>
            </div>

            {/* Package 2 */}
            <div className="card" style={{ padding: 36, borderColor: 'rgba(74,158,255,0.35)', background: 'linear-gradient(180deg, rgba(74,158,255,0.05) 0%, transparent 60%)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 16 }}>PACKAGE 02 · FULL DONE-FOR-YOU</div>
              <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 6 }}>$9,000<span style={{ color: 'var(--ink-3)', fontSize: 20 }}> / 3 months</span></div>
              <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.55, marginBottom: 24, marginTop: 12, maxWidth: '40ch' }}>Everything in Package 1 plus senior operators running the system on your behalf — scaling ad spend, optimising the funnel, and building new order bumps every month.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {['Everything in Package 1', 'Ongoing CRO across all funnel pages', 'New ad creative monthly — fresh angles + hooks', 'Creative strategy — what to test and why', 'Ad spend scaling with active management', 'New order bump development to lift AOV'].map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ink-2)', alignItems: 'baseline' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}><Check size={13} /></span>{b}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Book a strategy call <Arrow size={14} /></a>
            </div>

          </div>
          <style>{`@media (max-width: 800px) { .price-grid { grid-template-columns: 1fr !important; } }`}</style>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Won't a low-ticket product attract low-intent leads who'll never buy my high-ticket offer?", a: "Lead quality is determined by your messaging — not your price point. The hooks, angles, and language in your ads control who walks through the door. If the messaging targets people serious about solving the problem your high-ticket offer solves, you attract exactly those people. The Email Marketing Agency case study is direct proof: a low-ticket product booked sales calls with brands doing $50K and $500K per month." },
    { q: "A low-ticket funnel doesn't fit my brand.", a: "It's true some businesses aren't a natural fit — specifically those with no logical low-ticket product that maps to the high-ticket offer. But for coaches and consultants, there's almost always something productisable: a template, toolkit, cheat sheet, or mini-training. The real question: would you rather keep running ads that bleed money for two weeks, or build a system that pays for itself the same day?" },
    { q: "What if my low-ticket product flops?", a: "The entire methodology is built around testing before building. We don't create the product first and hope it sells. We test three different concepts on real cold traffic, refund early buyers, and only invest production time into the concept that already has proof of demand. 'The product flopping' is structurally minimised by how the engagement works." },
    { q: "My current funnel works fine — why change it?", a: "If the current funnel is genuinely profitable and stress-free, this isn't urgent. But for most owners running book-a-call or webinar funnels, 'works fine' means 'breaks even with thin margin and a lot of stress.' The low-ticket front end doesn't replace what's already working — it protects it. Same buyers, same backend, but with the ad spend already covered before they get there." },
    { q: "How long before I see first sales?", a: "First sales typically come in within less than a week of launching the MVP test — before the product itself is even fully built. The pause between testing and full launch (while the product is created) is structural, not a delay. It ensures we never build something no one wants." },
    { q: "What tech do you build inside?", a: "We deploy inside GoHighLevel or ClickFunnels — whichever you prefer. Email is native to the platform, so no separate ESP is required. Meta Pixel plus native funnel builder analytics handles tracking. Communication runs through a dedicated Slack or Discord channel." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="container">
        <SectionHead num="07" kicker="OBJECTIONS ANSWERED" title={<>Every question <span className="italic-disp" style={{ color: 'var(--accent)' }}>addressed honestly.</span></>} />
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i}>
                <div style={{ borderBottom: '1px solid var(--line)' }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{ width: '100%', textAlign: 'left', padding: '28px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, background: 'transparent', border: 0, color: 'inherit' }}
                  >
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--ink-4)', letterSpacing: '0.1em', minWidth: 32 }}>0{i + 1}</span>
                      <span style={{ fontSize: 'clamp(17px, 1.6vw, 21px)', fontWeight: 500, letterSpacing: '-0.02em' }}>{it.q}</span>
                    </span>
                    <span style={{ color: 'var(--ink-3)' }}><Plus open={isOpen} /></span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 300 : 0, overflow: 'hidden', transition: 'max-height .35s cubic-bezier(.2,.7,.2,1)' }}>
                    <p style={{ paddingBottom: 28, paddingLeft: 56, maxWidth: '70ch', color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.6 }}>{it.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" style={{ paddingBottom: 60 }}>
      <div className="container">
        <Reveal>
          <div style={{
            position: 'relative', padding: 'clamp(48px, 8vw, 96px) clamp(32px, 5vw, 80px)',
            border: '1px solid var(--line-2)', borderRadius: 28, overflow: 'hidden',
            background: 'linear-gradient(135deg, #0E1014 0%, #131722 100%)', textAlign: 'center',
          }}>
            <div className="glow" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', opacity: 0.22 }} />
            <div style={{ position: 'relative' }}>
              <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />BOOK YOUR FREE STRATEGY CALL</div>
              <h2 style={{ maxWidth: '22ch', margin: '0 auto', fontSize: 'clamp(36px, 5.5vw, 80px)' }}>
                Stop bleeding money. <span className="italic-disp" style={{ color: 'var(--accent)' }}>Start breaking even day one.</span>
              </h2>
              <p style={{ maxWidth: 560, margin: '28px auto 0', color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.5 }}>
                We&rsquo;ll audit your current funnel, map out your low-ticket ascension system, and show you exactly how
                your ad spend gets liquidated on day one. No pitch deck. Just the math.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
                <a href="https://calendly.com/mateo-m31/quick-call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a strategy call <Arrow /></a>
                <a href="#cases" className="btn btn-ghost">See the Evolve case study</a>
              </div>
              <div style={{ marginTop: 28, fontSize: 13, color: 'var(--ink-3)', display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                <span>Free 30-min call</span>
                <span style={{ color: 'var(--ink-4)' }}>·</span>
                <span>No agency fluff</span>
                <span style={{ color: 'var(--ink-4)' }}>·</span>
                <span>From $1,500 setup</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '56px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32 }} className="foot-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, background: 'var(--accent)', color: '#051020', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>M</span>
              <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em' }}>Marketing<span style={{ color: 'var(--accent)' }}>31</span></span>
            </div>
            <p style={{ color: 'var(--ink-3)', fontSize: 14, lineHeight: 1.6, maxWidth: '40ch' }}>
              Done-for-you low-ticket ascension funnels for coaches and consultants doing $30K–$100K/month on Meta Ads.
            </p>
          </div>
          {[
            { t: 'COMPANY', l: ['About', 'Case Studies', 'Contact'] },
            { t: 'SERVICE', l: ['What We Build', 'Process', 'Pricing', 'FAQ'] },
            { t: 'SOCIAL', l: ['LinkedIn', 'X (Twitter)', 'Instagram'] },
          ].map((c, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 16 }}>{c.t}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.l.map((x, j) => <li key={j}><a href="#" style={{ fontSize: 14, color: 'var(--ink-2)' }}>{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'var(--ink-4)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em' }}>
          <span>© 2024—2026 MARKETING31 · DFY LOW-TICKET ASCENSION FUNNELS</span>
          <span>● ALL SYSTEMS NORMAL</span>
        </div>
        <style>{`@media (max-width: 800px) { .foot-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </div>
    </footer>
  );
}

Object.assign(window, { Process, Cases, CaseCard, Testimonials, Founder, Fit, FAQ, FinalCTA, Footer });
