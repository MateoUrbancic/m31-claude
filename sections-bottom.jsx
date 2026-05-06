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
          title={<>The launch process that <span className="italic-disp" style={{ color: 'var(--accent)' }}>guarantees success.</span></>}
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
  const [open, setOpen] = useState(null);
  
  const cases = [
    {
      tag: 'COMMUNITY · SKOOL',
      brand: 'Evolve',
      headline: 'Evolve, #1 on Skool — 3.5x ROAS and 500+ customers acquired.',
      founderName: 'Spencer Pavlov',
      founderImage: 'uploads/spencer-pavlov.jpg',
      bullets: [
        ['3.54x', 'Return on Ad Spend'],
        ['500+', 'Low-ticket customers'],
        ['$99/mo', 'Origins ascension'],
        ['$1,500/mo', 'Evolve flagship ascension'],
      ],
      quote: 'Just want to say you\'ve done a fire ass job. Like the value you\'re providing is crazy.',
      quoteAttrib: 'Spencer Pavlov, Founder — Evolve (#1 on Skool)',
      situation: 'Spencer Pavlov is the founder of Evolve, a Skool community for e-commerce brand owners. He had two offers: Origins at $99/month and his flagship Evolve community at $1,500/month. His content was performing well organically — but he wasn\'t running any systematic paid acquisition. The problem was obvious: you can\'t point cold Meta traffic directly at a $1,500/month community and expect it to convert. Mateo spotted Spencer\'s ads, identified the opportunity, and reached out with a solution.',
      insight: 'Spencer already had a natural low-ticket product hiding in plain sight — his winning Meta ad templates. These were real ads that had already proven themselves in the market, which made them genuinely valuable to the e-commerce audience he was already speaking to. Packaging 13 templates at $13 created an irresistible no-brainer offer: one dollar per template. The price point wasn\'t arbitrary — it was a framing device that made saying no feel irrational.',
      whatWeBuilt: [
        { stage: 'Front-end', desc: 'A $13 offer — 13 winning Meta ad templates. The product naturally attracted e-commerce brand owners and beginners looking to improve their Meta ad performance, which was exactly Spencer\'s ideal customer for Origins and Evolve.' },
        { stage: 'Order bumps', desc: 'Two order bumps at checkout: a winning copy AI prompt for static ads (~$16) and a bundle of BFCM promotional templates (~$11). Both low enough that buyers already in purchasing mode didn\'t hesitate — significantly increasing AOV and allowing ad spend to be recouped on the front end alone.' },
        { stage: 'Post-purchase ascension', desc: 'After checkout, buyers landed on a thank you page with a VSL introducing Origins and Evolve. They were simultaneously added to an email list sending a nurture sequence pitching both communities — moving buyers from a $13 template purchase to a $99/mo or $1,500/mo membership.' },
      ],
      results: 'The funnel was live in under a month. First sales came in within the first three weeks. Running at ~$100/day in ad spend, the system consistently acquired new customers daily while maintaining a 3.54x ROAS — including backend revenue from Origins and Evolve attributed through Meta. Over 500 low-ticket customers acquired. The funnel was self-liquidating: front-end and order bump revenue covered daily ad spend, making every backend community sale pure profit.',
      proofImages: ['uploads/Spencer.png', 'uploads/Spencer 2.png'],
      salesPageImage: 'uploads/Screenshot_3.png',
    },
    {
      tag: 'CREATOR · FITNESS',
      brand: 'Oleksiy Kononov',
      headline: '$96K in pure profit added via email promotions towards a list of low-ticket customers.',
      founderName: 'Oleksiy Kononov',
      founderImage: 'uploads/pasted-1778078090694-0.png',
      bullets: [
        ['$96K', 'Revenue generated'],
        ['10K', 'Subscriber list'],
        ['3–5 days', 'Promo launch length'],
        ['30–50%', 'Promo discount structure'],
      ],
      quote: 'Mateo fully understands email marketing. He is a master of email.',
      quoteAttrib: 'Oleksiy Kononov, Handstand Coach & Creator',
      situation: 'Oleksiy Kononov is a handstand coach and gymnast who sells mobility and handstand training programs online. He had built a solid low-ticket product business — buyers acquired through Meta ads on the front end — but the relationship with those buyers largely ended at the point of purchase. He had around 10,000 email subscribers, roughly 6,000 active, sitting almost entirely dormant. A warm list of people who had already bought, already trusted him, and were already interested in his training. It just wasn\'t being spoken to.',
      insight: 'Buyers are the best customers. Someone who has already paid $27 for a mobility challenge is far more likely to spend $100–200 on a comprehensive full set than a cold prospect is to buy anything at all. The list didn\'t need more nurturing — it needed structured, well-timed promotional campaigns that gave existing buyers a compelling reason to take the next step.',
      whatWeBuilt: [
        { stage: 'Promo system', desc: 'A recurring email promo structure built around Oleksiy\'s three core Full Sets — Full Body Mobility, Handstand Full Set, and Happy Back Full Set — each normally priced $100–200. Rather than passive email selling, we ran structured 2–5 day promotional launches with 1–3 emails per day.' },
        { stage: 'Sequence engineering', desc: 'Each sequence was built to open with the value proposition, build desire through the middle days, and close hard on scarcity and deadline in the final 24 hours — with 30–50% time-limited discounts creating genuine urgency.' },
        { stage: 'Timing strategy', desc: 'Promos were timed around natural buying moments — end of month, seasonal hooks, or whenever the list had had enough time to breathe since the last send. Frequency was calibrated to avoid list fatigue while maximising revenue per send.' },
      ],
      results: 'Over a few months of running promotional campaigns to his active buyer list, the system generated $96,000 in revenue — from an asset Oleksiy already owned. No additional ad spend, no new product creation, no new audience required. The full sets were the natural next step for buyers who had already experienced his front-end products and wanted to go deeper. The promo structure consistently converted because the audience was warm, the offer was relevant, and the urgency was real.',
      proofImages: [],
      salesPageImage: null,
      testimonialVideo: 'https://www.youtube.com/embed/lzFSLUPeYQs',
    },
    {
      tag: 'AGENCY · EMAIL MARKETING',
      brand: 'Escend Media',
      headline: 'A $5 low-ticket product sold to book calls with brands doing $50K/month and more.',
      founderName: 'Derek Stroh',
      founderImage: 'uploads/derek-stroh.jpg',
      bullets: [
        ['$5', 'Front-end product price'],
        ['$38 CAD', 'Cost per buyer at optimisation'],
        ['$500K/mo', 'Largest brand booked'],
        ['$50K/mo', 'Second brand booked'],
      ],
      quote: 'FYI: Kateryna was a great lead. Doing $500k/mo right now… went well, got an audit + pitch scheduled for Monday.',
      quoteAttrib: 'Derek Stroh, Founder — Escend Media',
      situation: 'Derek Stroh runs Escend Media, an email marketing agency for e-commerce brands. His challenge wasn\'t product-market fit — it was lead quality. The standard approach of running lead gen ads attracts anyone who clicks. He needed a system that filtered for serious, high-revenue operators before they ever got on a call — so he wasn\'t wasting time with brands too small to afford his retainer.',
      insight: 'The sales page copy could do the qualifying work. By building messaging around "the proven abandoned cart flow that recovered $124,344 in 30 days" and framing results in language only relevant to brands already doing real volume, the page naturally repelled early-stage operators and pulled in the right ICP. The $5 price tag maximised buyer volume — but the messaging ensured only the right buyers felt it was for them.',
      whatWeBuilt: [
        { stage: 'Front-end', desc: 'A $5 done-for-you abandoned cart email sequence — four emails a serious Shopify brand could plug in immediately. Low price to maximise volume; high-specificity copy to filter for quality.' },
        { stage: 'Order bump', desc: 'An 8-figure email checklist Derek had already built was added at checkout — a natural complement requiring zero additional production cost, lifting AOV with a single click.' },
        { stage: 'Post-purchase qualification', desc: 'After checkout, buyers completed a short survey. Anyone spending $10K+/mo on Meta was automatically routed to a VSL and book-a-call page for a free strategy session with Derek. Lower-spend buyers were not shown the calendar — keeping his pipeline filtered and his time protected.' },
      ],
      results: 'The campaign ran in two phases: ~$300–400 to validate the offer, then ~$600 to begin scaling. CPA dropped to $38 CAD per buyer as the system found its rhythm. The funnel booked calls with two high-quality brands — one at $50K/mo and one at $500K/mo. The $500K/mo lead (Kateryna) went well enough that Derek scheduled both an audit and a pitch call the same week. The campaign was paused before it could fully optimise — the trajectory pointed to a cost per booked call well under $100 CAD had it continued.',
      proofImages: ['uploads/Derek Screenshot.png'],
      salesPageImage: 'uploads/screencapture-go-escend-media-home-page-563516-8245-9146-920396-2026-01-12-19_45_29.png',
    },
  ];
  
  return (
    <section id="cases">
      <div className="container">
        <SectionHead
          num="03" kicker="CASE STUDIES · REAL RESULTS"
          title={<>Proof the <span className="italic-disp" style={{ color: 'var(--accent)' }}>system works.</span></>}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <div className="card" style={{ padding: 0, overflow: 'hidden', transition: 'all .3s ease' }}>
                  {/* Front view with image and headline */}
                  <div style={{ display: 'grid', gridTemplateColumns: c.founderImage ? '1fr 1fr' : '1fr', gap: 0, minHeight: 300, alignItems: 'stretch' }}>
                    {/* Left side: headline and metrics */}
                    <div style={{ padding: 36, display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'space-between' }}>
                      <div>
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em'
                        }}>{c.tag}</span>
                        <h3 style={{ fontSize: 'clamp(24px, 2.6vw, 36px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.15, marginTop: 16, maxWidth: '28ch' }}>
                          <span style={{ color: '#FFD700' }}>{c.brand}</span>
                        </h3>
                        <p style={{ fontSize: 16, color: 'var(--ink-2)', marginTop: 12, lineHeight: 1.5, maxWidth: '36ch' }}>
                          {c.headline}
                        </p>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                        {c.bullets.map(([n, l], j) => (
                          <div key={j}>
                            <div style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1 }}>
                              <span className="tnum" style={{ color: j === 1 || j === 2 ? 'var(--accent)' : 'var(--ink)' }}>{n}</span>
                            </div>
                            <div style={{ marginTop: 8, fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Right side: founder image */}
                    {c.founderImage && (
                      <div style={{ position: 'relative', overflow: 'hidden', borderLeft: '1px solid var(--line)' }}>
                        <img src={c.founderImage} alt={c.founderName} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: c.founderImage && c.founderImage.includes('1778078090694') ? 'center center' : 'center 35%' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)' }}>
                          <div style={{ fontSize: 15, fontWeight: 500, color: 'white', letterSpacing: '-0.01em' }}>{c.founderName}</div>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>Founder</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              {open === i && (
                <Reveal>
                  <div className="card" style={{ padding: 36, marginTop: -1, borderTopLeftRadius: 0, borderTopRightRadius: 0, display: 'flex', flexDirection: 'column', gap: 40 }}>

                    {/* Situation + Insight */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="case-expand">
                      <div>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 12 }}>THE SITUATION</div>
                        <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)' }}>{c.situation}</p>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 12 }}>THE INSIGHT</div>
                        <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)' }}>{c.insight}</p>
                      </div>
                    </div>

                    {/* What we built */}
                    <div style={{ paddingTop: 32, borderTop: '1px solid var(--line)' }}>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 20 }}>WHAT WE BUILT</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {c.whatWeBuilt.map((w, j) => (
                          <div key={j} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '18px 0', borderTop: '1px solid var(--line)', alignItems: 'baseline' }}>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{w.stage}</div>
                            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>{w.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sales page screenshot + results side by side */}
                    <div style={{ paddingTop: 32, borderTop: '1px solid var(--line)', display: 'grid', gridTemplateColumns: (c.salesPageImage || c.testimonialVideo) ? '260px 1fr' : '1fr', gap: 40, alignItems: 'start' }} className="case-results-grid">
                      {c.salesPageImage && (
                        <div>
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 12 }}>SALES PAGE</div>
                          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--line-2)', maxHeight: 340, overflowY: 'auto' }}>
                            <img src={c.salesPageImage} alt="Sales page" style={{ width: '100%', display: 'block' }} />
                          </div>
                        </div>
                      )}
                      {!c.salesPageImage && c.testimonialVideo && (
                        <div>
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 12 }}>VIDEO TESTIMONIAL</div>
                          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--line-2)', aspectRatio: '9/16', position: 'relative' }}>
                            <iframe
                              src={c.testimonialVideo}
                              title="Video testimonial"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
                            />
                          </div>
                        </div>
                      )}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                        <div>
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 12 }}>THE RESULTS</div>
                          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)' }}>{c.results}</p>
                        </div>

                        {/* Quote */}
                        <div style={{ paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 16 }}>DIRECT FEEDBACK</div>
                          <blockquote style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 20, margin: 0 }}>
                            <p style={{ fontSize: 16, lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"{c.quote}"</p>
                            <footer style={{ marginTop: 10, fontSize: 12, color: 'var(--ink-3)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em' }}>{c.quoteAttrib}</footer>
                          </blockquote>
                        </div>

                        {/* Discord proof screenshots */}
                        {c.proofImages && c.proofImages.length > 0 && (
                          <div>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.12em', marginBottom: 12 }}>UNPROMPTED MESSAGES</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                              {c.proofImages.map((img, k) => (
                                <div key={k} style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line-2)' }}>
                                  <img src={img} alt="Client message" style={{ width: '100%', display: 'block' }} />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </Reveal>
              )}
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 800px) {
            .case-expand { grid-template-columns: 1fr !important; }
            .case-results-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// Flowchart helpers
function FlowStage({ num, label, color, tagline, children }) {
  return (
    <div style={{
      borderRadius: 16,
      background: `linear-gradient(180deg, ${hexToRgba(color, 0.08)} 0%, ${hexToRgba(color, 0.02)} 100%)`,
      border: `1px solid ${hexToRgba(color, 0.22)}`,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      position: 'relative',
      minHeight: 320,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color, letterSpacing: '0.14em',
            border: `1px solid ${hexToRgba(color, 0.4)}`, padding: '3px 8px', borderRadius: 4
          }}>{num}</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color, letterSpacing: '0.14em', fontWeight: 600 }}>{label}</div>
        </div>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.4, marginBottom: 4 }}>{tagline}</div>
      {children}
    </div>
  );
}

function FlowNode({ color, label, sub, primary, small }) {
  return (
    <div style={{
      background: primary ? color : hexToRgba(color, 0.12),
      border: primary ? 'none' : `1px solid ${hexToRgba(color, 0.4)}`,
      borderRadius: 10,
      padding: small ? '8px 10px' : '10px 14px',
      width: '100%',
      transition: 'transform .2s ease',
    }}>
      <div style={{
        fontSize: small ? 11 : 13,
        fontWeight: 600,
        color: primary ? '#051020' : color,
        letterSpacing: '-0.01em',
        lineHeight: 1.2
      }}>{label}</div>
      {sub && <div style={{
        fontSize: 10,
        color: primary ? 'rgba(5,16,32,0.65)' : 'var(--ink-3)',
        marginTop: 3,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: '0.04em'
      }}>{sub}</div>}
    </div>
  );
}

function FlowDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', opacity: 0.5 }}>
      <div style={{ flex: 1, height: 1, background: 'var(--line-2)' }}></div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: 'var(--ink-4)', letterSpacing: '0.14em' }}>+ AOV BOOST</div>
      <div style={{ flex: 1, height: 1, background: 'var(--line-2)' }}></div>
    </div>
  );
}

function FlowBranch() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
        <path d="M30 0 V 8 M 30 8 H 6 V 18 M 30 8 H 54 V 18" stroke="var(--line-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

function FlowBranchNode({ label, color, sub, tag, tagColor, dark }) {
  return (
    <div style={{
      background: dark ? hexToRgba(color, 0.1) : color,
      border: dark ? `1px solid ${hexToRgba(color, 0.3)}` : 'none',
      borderRadius: 10,
      padding: '10px 12px',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
        fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: tagColor,
        background: 'var(--bg-2)', padding: '1px 6px', borderRadius: 3, letterSpacing: '0.12em'
      }}>{tag}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: dark ? color : 'white', lineHeight: 1.3 }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: dark ? 'var(--ink-3)' : 'rgba(255,255,255,0.8)', marginTop: 2, fontFamily: 'monospace' }}>{sub}</div>}
    </div>
  );
}

function FlowMetric({ value, unit, note, color }) {
  return (
    <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: `1px dashed ${hexToRgba(color, 0.25)}`, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <div style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', fontWeight: 500, color, letterSpacing: '-0.04em', lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}>{value}</div>
          <div style={{ fontSize: 10, color, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.12em', fontWeight: 600 }}>{unit}</div>
        </div>
        <div style={{ fontSize: 10, color: 'var(--ink-4)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', marginTop: 4 }}>{note}</div>
      </div>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="flow-connector" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
        <path d="M2 2 L10 10 L2 18" stroke="var(--ink-4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    </div>
  );
}

function hexToRgba(hex, alpha) {
  // Handles var(--accent) by mapping to known accent
  if (hex === 'var(--accent)') hex = '#4A9EFF';
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function WhyLowTicket() {
  return (
    <section style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead
          num="04" kicker="THE FRAMEWORK"
          title={<>Why a <span className="italic-disp" style={{ color: 'var(--accent)' }}>low-ticket funnel?</span></>}
        />
        <Reveal>
          <div style={{ maxWidth: '68ch', marginBottom: 48, marginTop: -24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.65, color: 'var(--ink-2)' }}>
              Running ads for your business is risky — especially if you use the wrong system.
            </p>
            <p style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.65, color: 'var(--ink-2)' }}>
              With a book-a-call system, you're likely spending $150 or more to book calls with people that aren't guaranteed to convert. With webinars, you're paying $5 per sign up for people that aren't guaranteed to show up — or let alone buy your offer at the end of it.
            </p>
            <p style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.65, color: 'var(--ink-2)' }}>
              But with a low-ticket funnel, you're selling a low-ticket product, getting customers for it and immediately breaking even on your ad spend. This allows you to upsell these same people on the backend at <span style={{ color: 'var(--ink)', fontWeight: 500 }}>100% profit</span> and <span style={{ color: 'var(--ink)', fontWeight: 500 }}>100% risk-free.</span>
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 'clamp(40px, 5vw, 72px)' }} className="why-grid">
            <div style={{ padding: 28, border: '1px solid rgba(255,92,61,0.2)', borderRadius: 16, background: 'rgba(255,92,61,0.04)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--warn)', letterSpacing: '0.12em' }}>BOOK-A-CALL</div>
              <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500, letterSpacing: '-0.04em', color: 'var(--warn)' }}>$150+</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-3)' }}>Per call booked — with people who aren't guaranteed to convert.</p>
            </div>
            <div style={{ padding: 28, border: '1px solid rgba(255,92,61,0.2)', borderRadius: 16, background: 'rgba(255,92,61,0.04)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--warn)', letterSpacing: '0.12em' }}>WEBINAR</div>
              <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500, letterSpacing: '-0.04em', color: 'var(--warn)' }}>$5+</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-3)' }}>Per sign-up for people not guaranteed to show up or buy at the end.</p>
            </div>
            <div style={{ padding: 28, border: '1px solid rgba(74,158,255,0.3)', borderRadius: 16, background: 'rgba(74,158,255,0.05)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--accent)', letterSpacing: '0.12em' }}>LOW-TICKET FUNNEL</div>
              <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500, letterSpacing: '-0.04em', color: 'var(--accent)' }}>Day 1</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-2)' }}>Break even immediately. Upsell the same customers on the backend at 100% profit, 100% risk-free.</p>
            </div>
          </div>
          <style>{`@media (max-width: 800px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>
        </Reveal>

        {/* Flowchart — premium redesign */}
        <Reveal>
          <div style={{ marginTop: 64, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.16em' }}>FIG.01 — THE SYSTEM</div>
                <h3 style={{ fontSize: 'clamp(22px, 2.2vw, 30px)', fontWeight: 500, letterSpacing: '-0.03em', marginTop: 8, lineHeight: 1.15 }}>
                  How a single visitor becomes <span className="italic-disp" style={{ color: 'var(--accent)' }}>pure profit.</span>
                </h3>
              </div>
              <div style={{ display: 'flex', gap: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.12em', color: 'var(--ink-4)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }}></span>STAGE 01</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFD24D' }}></span>STAGE 02</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#5BFF8F' }}></span>STAGE 03</span>
              </div>
            </div>

            <div className="flow-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 24px 1fr 24px 1fr', gap: 0, position: 'relative', alignItems: 'stretch' }}>
              {/* Stage 01 — Get Buyers */}
              <FlowStage num="01" label="GET BUYERS" color="var(--accent)" tagline="Cold traffic in.">
                <FlowNode color="var(--accent)" label="Sales Page" sub="Low-ticket offer · $27–97" primary />
                <FlowMetric value="$2.40" unit="CPM" note="Cold Meta traffic" color="var(--accent)" />
              </FlowStage>

              {/* Connector 1 → 2 */}
              <FlowConnector />

              {/* Stage 02 — Break Even */}
              <FlowStage num="02" label="BREAK EVEN ON ADS" color="#FFD24D" tagline="Recoup spend instantly.">
                <FlowNode color="var(--accent)" label="Checkout" sub="Card details captured" primary />
                <FlowDivider />
                <FlowNode color="#FFD24D" label="Order Bump #1" sub="+$47 AOV lift" small />
                <FlowNode color="#FFD24D" label="Order Bump #2" sub="+$97 AOV lift" small />
                <FlowMetric value="100%" unit="ROAS" note="Day 01 · break even" color="#FFD24D" />
              </FlowStage>

              {/* Connector 2 → 3 */}
              <FlowConnector />

              {/* Stage 03 — Pure Profit */}
              <FlowStage num="03" label="100% PROFIT" color="#5BFF8F" tagline="Backend takes over.">
                <FlowNode color="var(--accent)" label="Post-Purchase VSL" sub="Webinar · Book-a-call" primary />
                <FlowBranch />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%' }}>
                  <FlowBranchNode label="Sales Call" color="#FF6A3D" tag="YES" tagColor="#5BFF8F" />
                  <FlowBranchNode label="Remarketing" color="#5BFF8F" sub="Email · SMS" tag="NO" tagColor="var(--ink-4)" dark />
                </div>
                <FlowMetric value="∞" unit="MARGIN" note="High-ticket backend" color="#5BFF8F" />
              </FlowStage>
            </div>

            <style>{`
              @media (max-width: 900px) {
                .flow-wrap { grid-template-columns: 1fr !important; }
                .flow-connector { transform: rotate(90deg); margin: 12px auto !important; }
              }
            `}</style>
          </div>
        </Reveal>

        <div className="grid grid-2" style={{ gap: 24 }}>
        </div>
      </div>
    </section>
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

Object.assign(window, { Process, Cases, Testimonials, WhyLowTicket, Founder, Fit, FAQ, FinalCTA, Footer });
