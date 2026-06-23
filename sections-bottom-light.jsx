/* global React, Reveal, CountUp, Pill, Arrow, Check, Plus, SectionHead */
// M31, Bottom sections: Process, Cases, Testimonials, Founder, Fit, FAQ, CTA, Footer

const { useState } = React;

function Process() {
  const steps = [
    {
      n: '01', t: 'Strategy & Funnel Fit', dur: 'Days 1–3',
      blurb: 'We map your offer, define your ICP in detail, and choose the funnel that fits (VSL, webinar, or low-ticket), plus the messaging direction for your ads.',
      bullets: ['Offer + ICP breakdown', 'Funnel-type decision', 'Ad messaging direction']
    },
    {
      n: '02', t: 'Build', dur: 'Days 3–14',
      blurb: 'We build the entire funnel in parallel: pages, VSL or webinar assets, checkout or application logic, ad creative, and every email sequence.',
      bullets: ['Full funnel pages', 'Static + video creative', 'Email + follow-up flows']
    },
    {
      n: '03', t: 'Launch & Traffic', dur: 'Days 14–21',
      blurb: 'Tracking goes in, ads go live on Meta and Google, and the first registrations or booked calls start coming through while we watch the data closely.',
      bullets: ['Pixel + conversion tracking', 'Meta + Google live', 'First calls / registrations']
    },
    {
      n: '04', t: 'Optimize & Scale', dur: 'Weeks 4+',
      blurb: 'We iterate creative, run CRO across the funnel, and scale ad spend with confidence as the numbers prove themselves out.',
      bullets: ['Funnel-wide CRO', 'Fresh creative angles', 'Ad spend scaled confidently']
    },
  ];
  return (
    <section id="process" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead
          num="04" kicker="PROCESS · 21 DAYS TO LIVE"
          title={<>From kickoff to live in <span className="italic-disp" style={{ color: 'var(--accent)' }}>21 days.</span></>}
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
      headline: 'Evolve, #1 on Skool: 3.5x ROAS and 500+ customers acquired.',
      founderName: 'Spencer Pavlov',
      founderImage: 'uploads/spencer-pavlov-opt.jpg',
      bullets: [
        [(
          <span style={{ display: 'block', letterSpacing: '-0.03em' }}>
            <span style={{ fontSize: '1.15em', fontWeight: 600 }}>500+</span>
            <span style={{ display: 'block', fontSize: '0.4em', fontWeight: 500, color: 'var(--ink-2)', letterSpacing: '-0.01em', lineHeight: 1.4, marginTop: 12 }}>
              new customers added at <span style={{ color: 'var(--accent)', fontWeight: 600 }}>3.54&times; ROAS</span>
            </span>
          </span>
        ), ''],
      ],
      quote: 'Just want to say you\'ve done a fire ass job. Like the value you\'re providing is crazy.',
      quoteAttrib: 'Spencer Pavlov, Founder of Evolve (#1 on Skool)',
      situation: 'Spencer Pavlov is the founder of Evolve, a Skool community for e-commerce brand owners. He had two offers: Origins at $99/month and his flagship Evolve community at $1,500/month. His content was performing well organically, but he wasn\'t running any systematic paid acquisition. The problem was obvious: you can\'t point cold Meta traffic directly at a $1,500/month community and expect it to convert. Mateo spotted Spencer\'s ads, identified the opportunity, and reached out with a solution.',
      insight: 'Spencer already had a natural low-ticket product hiding in plain sight, his winning Meta ad templates. These were real ads that had already proven themselves in the market, which made them genuinely valuable to the e-commerce audience he was already speaking to. Packaging 13 templates at $13 created an irresistible no-brainer offer: one dollar per template. The price point wasn\'t arbitrary, it was a framing device that made saying no feel irrational.',
      whatWeBuilt: [
        { stage: 'Front-end', desc: 'A $13 offer: 13 winning Meta ad templates. The product naturally attracted e-commerce brand owners and beginners looking to improve their Meta ad performance, which was exactly Spencer\'s ideal customer for Origins and Evolve.' },
        { stage: 'Order bumps', desc: 'Two order bumps at checkout: a winning copy AI prompt for static ads (~$16) and a bundle of BFCM promotional templates (~$11). Both low enough that buyers already in purchasing mode didn\'t hesitate, significantly increasing AOV and allowing ad spend to be recouped on the front end alone.' },
        { stage: 'Post-purchase ascension', desc: 'After checkout, buyers landed on a thank you page with a VSL introducing Origins and Evolve. They were simultaneously added to an email list sending a nurture sequence pitching both communities, moving buyers from a $13 template purchase to a $99/mo or $1,500/mo membership.' },
      ],
      results: 'The funnel was live in under a month. First sales came in within the first three weeks. Running at ~$100/day in ad spend, the system consistently acquired new customers daily while maintaining a 3.54x ROAS, including backend revenue from Origins and Evolve attributed through Meta. Over 500 low-ticket customers acquired. The funnel was self-liquidating: front-end and order bump revenue covered daily ad spend, making every backend community sale pure profit.',
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
        [(
          <span style={{ display: 'block', letterSpacing: '-0.03em' }}>
            <span style={{ fontSize: '1.15em', fontWeight: 600 }}>$96K</span>
            <span style={{ display: 'block', fontSize: '0.4em', fontWeight: 500, color: 'var(--ink-2)', letterSpacing: '-0.01em', lineHeight: 1.4, marginTop: 12 }}>
              in added profit via <span style={{ color: 'var(--accent)', fontWeight: 600 }}>email marketing</span>
            </span>
          </span>
        ), ''],
      ],
      quote: 'Mateo fully understands email marketing. He is a master of email.',
      quoteAttrib: 'Oleksiy Kononov, Handstand Coach & Creator',
      situation: 'Oleksiy Kononov is a handstand coach and gymnast who sells mobility and handstand training programs online. He had built a solid low-ticket product business, buyers acquired through Meta ads on the front end, but the relationship with those buyers largely ended at the point of purchase. He had around 10,000 email subscribers, roughly 6,000 active, sitting almost entirely dormant. A warm list of people who had already bought, already trusted him, and were already interested in his training. It just wasn\'t being spoken to.',
      insight: 'Buyers are the best customers. Someone who has already paid $27 for a mobility challenge is far more likely to spend $100–200 on a comprehensive full set than a cold prospect is to buy anything at all. The list didn\'t need more nurturing, it needed structured, well-timed promotional campaigns that gave existing buyers a compelling reason to take the next step.',
      whatWeBuilt: [
        { stage: 'Promo system', desc: 'A recurring email promo structure built around Oleksiy\'s three core Full Sets (Full Body Mobility, Handstand Full Set, and Happy Back Full Set), each normally priced $100–200. Rather than passive email selling, we ran structured 2–5 day promotional launches with 1–3 emails per day.' },
        { stage: 'Sequence engineering', desc: 'Each sequence was built to open with the value proposition, build desire through the middle days, and close hard on scarcity and deadline in the final 24 hours, with 30–50% time-limited discounts creating genuine urgency.' },
        { stage: 'Timing strategy', desc: 'Promos were timed around natural buying moments: end of month, seasonal hooks, or whenever the list had had enough time to breathe since the last send. Frequency was calibrated to avoid list fatigue while maximising revenue per send.' },
      ],
      results: 'Over a few months of running promotional campaigns to his active buyer list, the system generated $96,000 in revenue, from an asset Oleksiy already owned. No additional ad spend, no new product creation, no new audience required. The full sets were the natural next step for buyers who had already experienced his front-end products and wanted to go deeper. The promo structure consistently converted because the audience was warm, the offer was relevant, and the urgency was real.',
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
        [(
          <span style={{ display: 'block', letterSpacing: '-0.03em' }}>
            <span style={{ fontSize: '1.0em', fontWeight: 600 }}>$50K&ndash;500K<span style={{ fontSize: '0.5em', color: 'var(--ink-3)' }}>/mo</span></span>
            <span style={{ display: 'block', fontSize: '0.4em', fontWeight: 500, color: 'var(--ink-2)', letterSpacing: '-0.01em', lineHeight: 1.4, marginTop: 12 }}>
              booked calls with <span style={{ color: 'var(--accent)', fontWeight: 600 }}>ecom brands</span> doing
            </span>
          </span>
        ), ''],
      ],
      quote: 'FYI: Kateryna was a great lead. Doing $500k/mo right now… went well, got an audit + pitch scheduled for Monday.',
      quoteAttrib: 'Derek Stroh, Founder of Escend Media',
      situation: 'Derek Stroh runs Escend Media, an email marketing agency for e-commerce brands. His challenge wasn\'t product-market fit, it was lead quality. The standard approach of running lead gen ads attracts anyone who clicks. He needed a system that filtered for serious, high-revenue operators before they ever got on a call, so he wasn\'t wasting time with brands too small to afford his retainer.',
      insight: 'The sales page copy could do the qualifying work. By building messaging around "the proven abandoned cart flow that recovered $124,344 in 30 days" and framing results in language only relevant to brands already doing real volume, the page naturally repelled early-stage operators and pulled in the right ICP. The $5 price tag maximised buyer volume, but the messaging ensured only the right buyers felt it was for them.',
      whatWeBuilt: [
        { stage: 'Front-end', desc: 'A $5 done-for-you abandoned cart email sequence, four emails a serious Shopify brand could plug in immediately. Low price to maximise volume; high-specificity copy to filter for quality.' },
        { stage: 'Order bump', desc: 'An 8-figure email checklist Derek had already built was added at checkout, a natural complement requiring zero additional production cost, lifting AOV with a single click.' },
        { stage: 'Post-purchase qualification', desc: 'After checkout, buyers completed a short survey. Anyone spending $10K+/mo on Meta was automatically routed to a VSL and book-a-call page for a free strategy session with Derek. Lower-spend buyers were not shown the calendar, keeping his pipeline filtered and his time protected.' },
      ],
      results: 'The campaign ran in two phases: ~$300–400 to validate the offer, then ~$600 to begin scaling. CPA dropped to $38 CAD per buyer as the system found its rhythm. The funnel booked calls with two high-quality brands, one at $50K/mo and one at $500K/mo. The $500K/mo lead (Kateryna) went well enough that Derek scheduled both an audit and a pitch call the same week. The campaign was paused before it could fully optimise, the trajectory pointed to a cost per booked call well under $100 CAD had it continued.',
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
                          <span style={{ color: 'var(--accent)' }}>{c.brand}</span>
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
  if (hex === 'var(--accent)') hex = '#2A6FDB';
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function FunnelTypes() {
  const funnels = [
    {
      n: '01',
      color: 'var(--accent)',
      name: 'VSL Book-a-Call Funnel',
      bestFor: 'High-ticket services closed on a sales call, $5k–$50k+ engagements.',
      steps: [
        { label: 'Paid traffic', sub: 'Meta + Google' },
        { label: 'Video sales letter', sub: 'Qualifies + sells the call' },
        { label: 'Application', sub: 'Filters for real buyers' },
        { label: 'Booked call', sub: 'You close', primary: true },
      ],
      note: 'The default for done-for-you services and consulting. Your calendar fills with prospects who are pre-sold and pre-qualified.',
    },
    {
      n: '02',
      color: '#A6720F',
      name: 'Webinar Funnel',
      bestFor: 'Offers that need education or proof before the buying decision.',
      steps: [
        { label: 'Paid traffic', sub: 'Meta + Google' },
        { label: 'Registration', sub: 'Reminder sequence' },
        { label: 'Webinar', sub: 'Live or automated' },
        { label: 'Offer or call', sub: 'Convert on the spot', primary: true },
      ],
      note: 'Best when your prospect needs to understand a method or see results before they will commit to a high-ticket offer.',
    },
    {
      n: '03',
      color: '#179A52',
      name: 'Low-Ticket Funnel',
      bestFor: 'When you want your ads to pay for themselves before the high-ticket sale.',
      steps: [
        { label: 'Paid traffic', sub: 'Meta + Google' },
        { label: '$5–50 product', sub: '+ order bumps' },
        { label: 'Break even on ads', sub: 'Day one' },
        { label: 'Ascend to high-ticket', sub: 'Near-100% margin', primary: true },
      ],
      note: 'A self-liquidating front end. The same buyers ascend into your core offer, the system behind the Evolve case study above.',
    },
  ];
  return (
    <section style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead
          num="02" kicker="CHOOSE YOUR FUNNEL"
          title={<>Three funnels. <span className="italic-disp" style={{ color: 'var(--accent)' }}>The one that fits your offer.</span></>}
        />
        <Reveal>
          <p style={{ maxWidth: '64ch', marginTop: -24, marginBottom: 'clamp(40px, 5vw, 64px)', fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.65, color: 'var(--ink-2)' }}>
            Most agencies sell one funnel and bend every business to fit it. We don&rsquo;t. The funnel that wins depends on your offer, your price point, and how your buyers decide. Here are the three we build, and when each one is right.
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="funnel-grid">
          {funnels.map((f, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card" style={{
                padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 20,
                background: `linear-gradient(180deg, ${hexToRgba(f.color, 0.06)} 0%, transparent 55%)`,
                borderColor: hexToRgba(f.color, 0.22),
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: f.color, letterSpacing: '0.12em', padding: '4px 10px', border: `1px solid ${hexToRgba(f.color, 0.4)}`, borderRadius: 999 }}>FUNNEL {f.n}</span>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: f.color, boxShadow: `0 0 0 4px ${hexToRgba(f.color, 0.16)}` }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.1 }}>{f.name}</h3>
                  <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.5, color: 'var(--ink-3)' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.12em', color: f.color }}>BEST FOR: </span>
                    {f.bestFor}
                  </p>
                </div>
                {/* Vertical path */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 4 }}>
                  {f.steps.map((s, j) => (
                    <div key={j}>
                      <div style={{
                        background: s.primary ? f.color : hexToRgba(f.color, 0.08),
                        border: s.primary ? 'none' : `1px solid ${hexToRgba(f.color, 0.25)}`,
                        borderRadius: 10, padding: '10px 14px',
                      }}>
                        <div style={{ fontSize: 13.5, fontWeight: 600, color: s.primary ? '#FFFFFF' : 'var(--ink)', lineHeight: 1.2 }}>{s.label}</div>
                        {s.sub && <div style={{ fontSize: 10.5, marginTop: 3, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.04em', color: s.primary ? 'rgba(255,255,255,0.8)' : 'var(--ink-3)' }}>{s.sub}</div>}
                      </div>
                      {j < f.steps.length - 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M7 1 V 13 M7 13 L3 9 M7 13 L11 9" stroke={hexToRgba(f.color, 0.5)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--line)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-2)' }}>{f.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p style={{ marginTop: 'clamp(36px, 4vw, 56px)', textAlign: 'center', fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Not sure which one fits? <span style={{ color: 'var(--ink)' }}>That&rsquo;s the first thing we figure out together</span>, mapped to your offer, not our template.
          </p>
        </Reveal>
        <style>{`@media (max-width: 900px) { .funnel-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: 'They put me on a VSL book-a-call funnel instead of the webinar I assumed I needed. Booked calls doubled in the first month.', n: 'James T.', r: 'Business coach', m: '$45K MRR' },
    { q: 'The webinar funnel they built finally made my method click for cold prospects. Registrations actually convert now.', n: 'Priya A.', r: 'Career consultant', m: '$62K MRR' },
    { q: 'Ads, creative, funnel, follow-up, all handled in-house. I just show up to the calls that land on my calendar.', n: 'Marcus V.', r: 'Sales training consultant', m: '$88K MRR' },
    { q: 'I’d burned money on agencies that only build. M31 builds the funnel AND runs the traffic. Completely different game.', n: 'Rachel D.', r: 'Executive coach', m: '$37K MRR' },
    { q: 'Cost per booked call dropped 40% once their creative team took over the ads. Same offer, far better numbers.', n: 'Tom H.', r: 'B2B consultant', m: '$55K MRR' },
    { q: 'They mapped my offer to the right funnel instead of forcing their template on me. That’s exactly why it works.', n: 'Aanya S.', r: 'Health & mindset coach', m: '$41K MRR' },
  ];
  return (
    <section style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead
          num="05" kicker="CLIENT RESULTS"
          title={<>What clients say <span className="italic-disp" style={{ color: 'var(--accent)' }}>after we build.</span></>}
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
  const calRef = React.useRef(null);
  React.useEffect(() => {
    const el = calRef.current;
    if (!el) return;
    const url = 'https://calendly.com/mateo-m31/quick-call';
    let cancelled = false;
    let tries = 0;
    function init() {
      if (cancelled || !calRef.current) return;
      if (calRef.current.querySelector('iframe')) return;
      if (window.Calendly && window.Calendly.initInlineWidget) {
        calRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({ url, parentElement: calRef.current });
        return;
      }
      if (tries++ < 40) setTimeout(init, 150);
    }
    init();
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="book">
      <div className="container">
        <SectionHead num="07" kicker="BOOK A CALL" title={<>Book a call <span className="italic-disp" style={{ color: 'var(--accent)' }}>with me.</span></>} />
        <div className="founder-grid">
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{
                aspectRatio: '4 / 5', borderRadius: 20, maxWidth: 400,
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
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: '36ch' }}>
                Grab a free 30-minute strategy call. We&rsquo;ll map your offer to the right funnel and the ads to fill it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              ref={calRef}
              className="calendly-inline-widget"
              data-url="https://calendly.com/mateo-m31/quick-call"
              style={{ minWidth: 280, height: 680, border: '1px solid var(--line)', borderRadius: 18, overflow: 'hidden' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, height: '100%', padding: 32, textAlign: 'center', background: 'linear-gradient(135deg, #F6F7F9 0%, #EAEFF7 100%)' }}>
                <div style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.5, maxWidth: '32ch' }}>
                  Grab a free 30-minute strategy call. We&rsquo;ll map your offer to the right funnel.
                </div>
                <a href="https://calendly.com/mateo-m31/quick-call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a strategy call <Arrow /></a>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`
          .founder-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 48; align-items: start; }
          @media (max-width: 900px) { .founder-grid { grid-template-columns: 1fr !important; gap: 32px; } }
        `}</style>
      </div>
    </section>
  );
}

function Fit() {
  const fit = [
    'You sell a service with a client worth $15k+ in lifetime value',
    'You have a proven offer that already closes, you need more pipeline, not product-market fit',
    'You can invest at least $100/day in ad spend to feed the funnel',
    'You sell on a call, through a webinar, or want a low-ticket front end feeding a high-ticket offer',
    'You can handle more qualified conversations than you get today',
  ];
  const notFit = [
    'Client LTV is under $15k, the math rarely works on paid traffic',
    'No proven offer yet, we scale what works, we don\'t validate from zero',
    'Not ready to spend on ads consistently for at least 90 days',
    'Looking for SEO, organic content, or brand work as the primary lever',
    'Expecting results with zero input, the build needs your offer expertise',
  ];
  return (
    <section id="fit" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead num="07" kicker="IS THIS FOR ME?" title={<>Built for high-LTV offers, <span className="italic-disp" style={{ color: 'var(--accent)' }}>not for everyone.</span></>} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="fit-grid">
          {/* This is for you */}
          <Reveal>
            <div className="card" style={{ padding: 36, height: '100%', borderColor: 'rgba(23,154,82,0.30)', background: 'linear-gradient(180deg, rgba(23,154,82,0.06) 0%, transparent 55%)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#179A52', letterSpacing: '0.12em', marginBottom: 24 }}>THIS IS FOR YOU IF</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {fit.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.5, color: 'var(--ink)', alignItems: 'flex-start' }}>
                    <span style={{ color: '#179A52', flexShrink: 0, marginTop: 3 }}><Check size={15} /></span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* This isn't for you */}
          <Reveal delay={80}>
            <div className="card" style={{ padding: 36, height: '100%' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--warn)', letterSpacing: '0.12em', marginBottom: 24 }}>THIS ISN&rsquo;T FOR YOU IF</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {notFit.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.5, color: 'var(--ink-3)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--warn)', flexShrink: 0, marginTop: 3, display: 'inline-flex' }}>
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div style={{ marginTop: 'clamp(36px, 4vw, 56px)', display: 'flex', justifyContent: 'center' }}>
            <a href="#cta" className="btn btn-primary">Book a strategy call <Arrow size={14} /></a>
          </div>
        </Reveal>
        <style>{`@media (max-width: 800px) { .fit-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "How do I know which funnel is right for my business?", a: "That's the first thing we figure out together. In the strategy phase we map your offer, price point, and how your buyers make decisions, then recommend a VSL, webinar, or low-ticket funnel. We don't sell one funnel and force every business into it, the funnel follows your offer, not the other way around." },
    { q: "Do you run the ads, or just build the funnel?", a: "Both. Creative, media buying, and optimisation are handled in-house alongside the build. A funnel with no traffic is just a website, we own the whole loop from ad to booked call, so there's no finger-pointing between an 'ads guy' and a 'funnel guy' when something needs fixing." },
    { q: "What client LTV do I need for this to work?", a: "Roughly $15k or more in lifetime value per client. Above that, paid traffic into a well-built funnel has the margin to be profitable and scalable. Below it, the numbers get tight fast, we'll tell you honestly on the call if we don't think the math works for your offer." },
    { q: "How fast will I see results?", a: "We aim to have your funnel live within 21 days of kickoff. First booked calls or webinar registrations typically follow within the first weeks of traffic, then we optimise creative and scale ad spend from there as the data comes in." },
    { q: "What platforms and tech do you build on?", a: "Ads run on Meta and Google. Funnels are built in GoHighLevel or ClickFunnels (whichever you prefer) with full pixel and conversion tracking wired in. Communication runs through a dedicated Slack or Discord channel so you always know what's happening." },
    { q: "I already have a funnel, can you improve it instead of rebuilding?", a: "Often, yes. If the foundation is sound we'll audit it, fix the leaks, and take over the traffic. If it's working against you, we'll tell you straight and rebuild only what needs it. Either way, you get an honest assessment before any work starts." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="container">
        <SectionHead num="08" kicker="OBJECTIONS ANSWERED" title={<>Every question <span className="italic-disp" style={{ color: 'var(--accent)' }}>addressed honestly.</span></>} />
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
                  <div style={{ maxHeight: isOpen ? 440 : 0, overflow: 'hidden', transition: 'max-height .35s cubic-bezier(.2,.7,.2,1)' }}>
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
  const calRef = React.useRef(null);
  React.useEffect(() => {
    const el = calRef.current;
    if (!el) return;
    const url = 'https://calendly.com/mateo-m31/quick-call';
    let cancelled = false;
    let tries = 0;
    function init() {
      if (cancelled || !calRef.current) return;
      if (calRef.current.querySelector('iframe')) return;
      if (window.Calendly && window.Calendly.initInlineWidget) {
        calRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({ url, parentElement: calRef.current });
        return;
      }
      // widget.js (loaded from the page head) may not be ready yet, poll briefly.
      if (tries++ < 40) setTimeout(init, 150);
    }
    init();
    return () => { cancelled = true; };
  }, []);
  return (
    <section id="cta" style={{ paddingBottom: 60 }}>
      <div className="container">
        <Reveal>
          {/* Calendly inline widget. data-url lets Calendly's widget.js auto-init; the child
              below is the fallback shown until the scheduler iframe replaces it. */}
          <div
            ref={calRef}
            className="calendly-inline-widget"
            data-url="https://calendly.com/mateo-m31/quick-call"
            style={{ minWidth: 320, height: 700 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, height: '100%', padding: 32, textAlign: 'center', border: '1px solid var(--line-2)', borderRadius: 18, background: 'linear-gradient(135deg, #F6F7F9 0%, #EAEFF7 100%)' }}>
              <div style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.5, maxWidth: '32ch' }}>
                Grab a free 30-minute strategy call. We&rsquo;ll map your offer to the right funnel.
              </div>
              <a href="https://calendly.com/mateo-m31/quick-call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a strategy call <Arrow /></a>
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
              Done-for-you VSL, webinar, and low-ticket funnels, built and powered by ads we run in-house. For businesses with a client worth $15k or more.
            </p>
          </div>
          {[
            { t: 'COMPANY', l: ['About', 'Case Studies', 'Contact'] },
            { t: 'SERVICE', l: ['What We Do', 'Funnels', 'Process', 'FAQ'] },
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
          <span>© 2024–2026 MARKETING31 · ADS + FUNNELS FOR HIGH-LTV OFFERS</span>
          <span>● ALL SYSTEMS NORMAL</span>
        </div>
        <style>{`@media (max-width: 800px) { .foot-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </div>
    </footer>
  );
}

function FunnelShowcase() {
  const funnels = [
    { id: 'kart',     title: 'Ultimate Kart Academy',      tag: 'VSL FUNNEL' },
    { id: 'easya-a',  title: '13 Winning Ad Templates',    tag: 'LOW-TICKET FUNNEL' },
    { id: 'easya-b',  title: 'Evolve Private Mentorship',  tag: 'APPLICATION FUNNEL' },
    { id: 'escend-a', title: '7-Figure Abandoned Cart',    tag: 'LOW-TICKET FUNNEL' },
    { id: 'escend-b', title: 'Escend Post-Purchase Upsell', tag: 'UPSELL PAGE' },
    { id: 'hernan',   title: 'Rapid Launch & Scale',        tag: 'VSL FUNNEL', concept: true },
    { id: 'nick',     title: 'The Unicorn System',         tag: 'VSL FUNNEL', concept: true },
    { id: 'rod',      title: 'Multifamily Virtual Bootcamp', tag: 'EVENT FUNNEL', concept: true },
    { id: 'dragan',   title: 'Scale Your Business Webinar',  tag: 'WEBINAR FUNNEL', concept: true },
    { id: 'ghost-a',  title: 'Premium Ghostwriting Blueprint', tag: 'LEAD MAGNET', concept: true },
  ];
  const firstConcept = funnels.findIndex((f) => f.concept);
  const [open, setOpen] = useState(null);

  React.useEffect(() => {
    if (open === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open]);

  return (
    <section id="funnels">
      <div className="container">
        <SectionHead
          num="04" kicker="FUNNELS WE'VE BUILT"
          title={<>Real funnels, <span className="italic-disp" style={{ color: 'var(--accent)' }}>live in the wild.</span></>}
        />
        <Reveal>
          <p style={{ maxWidth: '60ch', marginTop: -24, marginBottom: 'clamp(36px, 4vw, 56px)', fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.65, color: 'var(--ink-2)' }}>
            A sample of pages we&rsquo;ve designed, built, and run traffic to. Tap any one to view the full page.
          </p>
        </Reveal>

        <div className="funnel-grid-show">
          {funnels.map((f, i) => (
            <React.Fragment key={f.id}>
              {i === firstConcept && (
                <div className="funnel-sep" style={{ gridColumn: '1 / -1' }}>
                  <Reveal>
                    <div className="funnel-sep-inner">
                      <span className="funnel-sep-rule" />
                      <span className="funnel-sep-label">DESIGN CONCEPTS &mdash; BUILT IN FIGMA, NOT YET LIVE</span>
                      <span className="funnel-sep-rule" />
                    </div>
                  </Reveal>
                </div>
              )}
              <Reveal delay={(i % 3) * 70}>
                <button className="funnel-tile" onClick={() => setOpen(i)} aria-label={'View ' + f.title}>
                  <div className="funnel-frame">
                    <div className="funnel-screen">
                      <img src={'assets/funnels/' + f.id + '-thumb.jpg'} alt={f.title} loading="lazy" />
                      <span className="funnel-fade" />
                      <span className="funnel-expand">View full page</span>
                      {f.concept && <span className="funnel-badge">FIGMA CONCEPT</span>}
                    </div>
                  </div>
                  <div className="funnel-meta">
                    <span className="funnel-tag">{f.tag}</span>
                    <span className="funnel-title">{f.title}</span>
                  </div>
                </button>
              </Reveal>
            </React.Fragment>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="funnel-lightbox" onClick={() => setOpen(null)}>
          <button className="funnel-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
          <div className="funnel-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: 14 }}>
              {funnels[open].concept ? 'FIGMA DESIGN CONCEPT' : funnels[open].tag} &middot; {funnels[open].title.toUpperCase()}
            </div>
            <img src={'assets/funnels/' + funnels[open].id + '-full.jpg'} alt={funnels[open].title} />
          </div>
        </div>
      )}

      <style>{`
        .funnel-grid-show {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: clamp(14px, 1.6vw, 22px);
        }
        .funnel-tile {
          display: flex; flex-direction: column; gap: 14px;
          background: none; border: 0; padding: 0; text-align: left; width: 100%;
        }
        .funnel-frame {
          background: #fff;
          border: 1px solid var(--line-2);
          border-radius: 22px;
          padding: 7px;
          box-shadow: 0 8px 26px rgba(11,13,16,0.08);
          transition: transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s, border-color .3s;
        }
        .funnel-tile:hover .funnel-frame { transform: translateY(-4px); box-shadow: 0 18px 44px rgba(11,13,16,0.14); border-color: var(--accent); }
        .funnel-screen {
          position: relative; border-radius: 15px; overflow: hidden;
          aspect-ratio: 9 / 16; background: #f2f3f5;
        }
        .funnel-screen img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .funnel-fade {
          position: absolute; left: 0; right: 0; bottom: 0; height: 45%;
          background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 100%);
          pointer-events: none;
        }
        .funnel-expand {
          position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.06em;
          color: #fff; background: var(--accent);
          padding: 7px 14px; border-radius: 999px; white-space: nowrap;
          opacity: 0; transition: opacity .3s, transform .3s; box-shadow: 0 6px 16px rgba(11,13,16,0.2);
        }
        .funnel-tile:hover .funnel-expand { opacity: 1; transform: translateX(-50%) translateY(-2px); }
        .funnel-meta { display: flex; flex-direction: column; gap: 5px; }
        .funnel-tag { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.12em; color: var(--accent); }
        .funnel-title { font-size: 14px; font-weight: 500; letter-spacing: -0.01em; color: var(--ink); }
        .funnel-badge {
          position: absolute; top: 10px; left: 10px;
          font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.1em;
          color: var(--ink); background: rgba(255,255,255,0.92);
          border: 1px solid var(--line-2);
          padding: 4px 8px; border-radius: 6px;
          -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px);
        }
        .funnel-sep { margin: clamp(20px, 2.6vw, 36px) 0 clamp(6px, 1vw, 14px); }
        .funnel-sep-inner { display: flex; align-items: center; gap: 18px; }
        .funnel-sep-rule { flex: 1; height: 1px; background: var(--line); }
        .funnel-sep-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 0.12em;
          color: var(--ink-3); white-space: nowrap;
        }
        @media (max-width: 680px) { .funnel-sep-label { white-space: normal; text-align: center; } }

        .funnel-lightbox {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(7,8,10,0.82);
          -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
          overflow-y: auto; overscroll-behavior: contain;
          padding: clamp(24px, 5vw, 56px) 16px 64px;
        }
        .funnel-lightbox-inner { max-width: 400px; margin: 0 auto; }
        .funnel-lightbox-inner img {
          width: 100%; display: block; border-radius: 14px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5); background: #fff;
        }
        .funnel-close {
          position: fixed; top: 16px; right: 16px; z-index: 1001;
          width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.2);
          -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
          transition: background .2s;
        }
        .funnel-close:hover { background: rgba(255,255,255,0.22); }

        @media (max-width: 1080px) { .funnel-grid-show { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 680px)  { .funnel-grid-show { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { Process, Cases, Testimonials, FunnelTypes, Founder, Fit, FAQ, FinalCTA, Footer, FunnelShowcase, StaticAds });

function StaticAds() {
  const ads = [
    { id: 'nicead',       title: '$2M/mo on Meta ads' },
    { id: 'win-129k',     title: '$129K winning static' },
    { id: 'discord',      title: '4.22 ROAS proof' },
    { id: 'spencerx',     title: 'X post · 13 winning ads' },
    { id: 'shaunx',       title: 'X post · drag-and-drop' },
    { id: 'email',        title: 'Email · templates cooking' },
    { id: 'founderletter',title: 'Founder letter' },
    { id: 'notepad',      title: 'Notepad · how it works' },
    { id: 'proven13',     title: '13 proven templates' },
  ].map((a) => ({ ...a, base: 'assets/creatives/' + a.id, tag: 'STATIC AD' }));

  const conceptAds = [
    { id: 'rh1',   title: 'Rich Habits · SpaceX & OpenAI' },
    { id: 'rh2',   title: 'Rich Habits · wealth wisdom' },
    { id: 'rh3',   title: 'Rich Habits · #1 podcast' },
    { id: 'vf1',   title: 'Vestfundr · live webinar' },
    { id: 'vf2',   title: 'Vestfundr · start with $1,500' },
    { id: 'vf3',   title: 'Vestfundr · wealth blueprint' },
    { id: 'nick1', title: 'Sell systems, not prompts' },
    { id: 'nick2', title: 'No excuses · master AI' },
    { id: 'nick3', title: 'Reclaim 40 hours/week' },
    { id: 'nate1', title: 'AIS+ · lock in $99/mo' },
    { id: 'nate2', title: 'AIS+ · the last invite' },
    { id: 'nate3', title: 'AIS+ · price going up' },
    { id: 'ian1',  title: 'Spent $487 → $1,089' },
    { id: 'ian2',  title: 'What $1,000/day looks like' },
    { id: 'ian3',  title: '$1,000/day low-ticket funnel' },
    { id: 'ian4',  title: '$1,000/day from ads' },
    { id: 'cp1',   title: 'CoinPicks · $8M engine' },
    { id: 'cp2',   title: 'CoinPicks · stop guessing' },
    { id: 'cp3',   title: 'CoinPicks · 3-step story' },
    { id: 'cp4',   title: 'CoinPicks · research checklist' },
    { id: 'cp5',   title: 'CoinPicks · exact process' },
    { id: 'pvw1',  title: 'Stuck at $100K–$1M?' },
    { id: 'pvw2',  title: 'The modern way to scale' },
    { id: 'pvw3',  title: '$1M pipeline workshop' },
  ].map((a) => ({ ...a, base: 'assets/creatives/concept/' + a.id, tag: 'CONCEPT' }));

  const [open, setOpen] = useState(null);

  React.useEffect(() => {
    if (open === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open]);

  const Tile = (a, i) => (
    <button key={i} className="cr-tile" onClick={() => setOpen(a)} aria-label={'View ' + a.title} aria-hidden={a._dup}>
      <div className="cr-thumb">
        <img src={a.base + '-thumb.jpg'} alt={a.title} loading="lazy" />
        <span className="cr-zoom">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6"/><path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </span>
      </div>
    </button>
  );

  return (
    <section id="creatives" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead
          num="05" kicker="STATIC ADS WE'VE RUN"
          title={<>Creative that <span className="italic-disp" style={{ color: 'var(--accent)' }}>stops the scroll.</span></>}
        />
        <Reveal>
          <p style={{ maxWidth: '60ch', marginTop: -24, marginBottom: 'clamp(36px, 4vw, 56px)', fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: 1.65, color: 'var(--ink-2)' }}>
            A selection of static ad creative we&rsquo;ve written, designed, and run for clients. Tap any one to view it full size.
          </p>
        </Reveal>
      </div>

      <div className="cr-marquee">
        <div className="cr-track">
          {[...ads, ...ads].map((a, i) => Tile({ ...a, _dup: i >= ads.length }, i))}
        </div>
      </div>

      <div className="container">
        <div className="funnel-sep" style={{ marginTop: 'clamp(32px, 4vw, 56px)' }}>
          <div className="funnel-sep-inner">
            <span className="funnel-sep-rule" />
            <span className="funnel-sep-label">ALSO DESIGNED &mdash; CONCEPTS WE NEVER RAN</span>
            <span className="funnel-sep-rule" />
          </div>
        </div>
      </div>

      <div className="cr-marquee" style={{ marginTop: 'clamp(20px, 2.4vw, 32px)' }}>
        <div className="cr-track cr-track--rev">
          {[...conceptAds, ...conceptAds].map((a, i) => Tile({ ...a, _dup: i >= conceptAds.length }, 'c' + i))}
        </div>
      </div>

      {open !== null && (
        <div className="funnel-lightbox" onClick={() => setOpen(null)}>
          <button className="funnel-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
          <div className="cr-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: 14 }}>
              {open.tag} &middot; {open.title.toUpperCase()}
            </div>
            <img src={open.base + '-full.jpg'} alt={open.title} />
          </div>
        </div>
      )}

      <style>{`
        .cr-marquee { position: relative; overflow: hidden; }
        .cr-marquee::before, .cr-marquee::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: clamp(24px, 6vw, 90px); z-index: 2; pointer-events: none;
        }
        .cr-marquee::before { left: 0; background: linear-gradient(90deg, var(--bg-2), rgba(246,247,249,0)); }
        .cr-marquee::after  { right: 0; background: linear-gradient(270deg, var(--bg-2), rgba(246,247,249,0)); }
        .cr-track {
          display: flex; gap: clamp(14px, 1.6vw, 22px); width: max-content;
          padding: 6px var(--pad-x);
          animation: crMarquee 55s linear infinite;
        }
        .cr-track--rev { animation: crMarqueeRev 80s linear infinite; }
        .cr-marquee:hover .cr-track { animation-play-state: paused; }
        @keyframes crMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes crMarqueeRev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .cr-tile { flex: 0 0 auto; width: clamp(210px, 22vw, 290px); background: none; border: 0; padding: 0; cursor: pointer; }
        .cr-thumb {
          position: relative; aspect-ratio: 1 / 1; overflow: hidden;
          border-radius: 14px; border: 1px solid var(--line);
          background: #fff;
          box-shadow: 0 6px 20px rgba(11,13,16,0.06);
          transition: transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s, border-color .3s;
        }
        .cr-tile:hover .cr-thumb { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(11,13,16,0.14); border-color: var(--accent); }
        .cr-thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .cr-zoom {
          position: absolute; bottom: 10px; right: 10px;
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(11,13,16,0.55); color: #fff;
          -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px);
          opacity: 0; transform: scale(0.8); transition: opacity .25s, transform .25s;
        }
        .cr-tile:hover .cr-zoom { opacity: 1; transform: scale(1); }
        @media (prefers-reduced-motion: reduce) { .cr-track { animation: none; flex-wrap: wrap; } }
        .cr-lightbox-inner { max-width: 540px; margin: 0 auto; }
        .cr-lightbox-inner img {
          width: 100%; display: block; border-radius: 16px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5); background: #fff;
        }
      `}</style>
    </section>
  );
}
