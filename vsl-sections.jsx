/* global React, Reveal, Arrow, Check, Plus, SectionHead, BgTexture */
// M31 — VSL offer page sections: Nav, Hero (+video), Grind, WhyVsl, ThreeReasons, VslProcess, WhatWeDo, Packages, VslBook, VslFAQ
const { useState, useRef, useEffect } = React;

const Ital = ({ children }) => <span className="italic-disp" style={{ color: 'var(--accent)' }}>{children}</span>;

function VslNav() {
  return (
    <nav className="nav"><div className="nav-inner">
      <a href="#top" className="nav-logo"><span className="mark">M</span><span>Marketing<span style={{ color: 'var(--accent)' }}>31</span></span></a>
      <div className="nav-links">
        <a href="#why">How it works</a><a href="#process">Process</a><a href="#cases">Results</a><a href="#packages">Packages</a><a href="#faq">FAQ</a>
      </div>
      <a href="#top" className="btn btn-primary btn-sm nav-cta">Book a call <Arrow size={14} /></a>
    </div></nav>
  );
}

function VslVideo() {
  return (
    <div className="v-video-wrap">
      <div className="v-video">
        <div id="vidalytics_embed_4C82wuZl8_lIneoQ" style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}></div>
      </div>
    </div>
  );
}

function HeroCalendly() {
  const ref = useRef(null);
  useEffect(() => {
    const url = 'https://calendly.com/mateo-m31/quick-call?hide_event_type_details=1&hide_gdpr_banner=1';
    let cancelled = false, tries = 0;
    function init() {
      if (cancelled || !ref.current) return;
      if (ref.current.querySelector('iframe')) return;
      if (window.Calendly && window.Calendly.initInlineWidget) {
        ref.current.innerHTML = '';
        window.Calendly.initInlineWidget({ url, parentElement: ref.current });
        return;
      }
      if (tries++ < 40) setTimeout(init, 150);
    }
    init();
    return () => { cancelled = true; };
  }, []);
  return <div ref={ref} className="calendly-inline-widget v-hero-cal" data-url="https://calendly.com/mateo-m31/quick-call?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: 320, height: 700 }} />;
}

function VslHero() {
  return (
    <section id="top" className="v-hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <BgTexture />
      <div className="glow" style={{ width: 760, height: 760, top: -240, left: '50%', transform: 'translateX(-50%)', opacity: 0.22 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal><div style={{ textAlign: 'center', marginBottom: 'clamp(18px, 2.2vw, 26px)' }}><span className="eyebrow"><span className="dot" />FOR AGENCIES, COACHES, CONSULTANTS &amp; B2B SERVICE BUSINESSES</span></div></Reveal>
        <Reveal delay={80}>
          <h1 className="v-h1"><b>We'll Build You a VSL Funnel &amp; Guarantee At Least $30K Or You Don't&nbsp;Pay</b></h1>
        </Reveal>
        <Reveal delay={160}><p className="v-sub">And the best part? It takes about <strong>3 hours of your time</strong> in total. Watch the video to see exactly how it works.</p></Reveal>
        <Reveal delay={240}><VslVideo /></Reveal>
        <Reveal delay={300} className="v-hero-cal-wrap">
          <div className="v-hero-cal-head">
            <span className="eyebrow"><span className="dot" />NEXT STEP</span>
            <h2>Book a discovery call <Ital>with me.</Ital></h2>
            <p>30 minutes. We&rsquo;ll look at what you sell, how we&rsquo;d turn it into a cold traffic offer, and what the numbers could look like. No pressure either way.</p>
          </div>
          <HeroCalendly />
        </Reveal>
        <Reveal delay={360} className="v-trust">
          <span><Check size={12} /> Live in about 10 days</span>
          <span><Check size={12} /> About 3 hours of your time</span>
          <span><Check size={12} /> $30K in profit or you don't pay</span>
        </Reveal>
      </div>
    </section>
  );
}

function Grind() {
  const ways = [
    { t: 'Making content every day', d: 'Long hours filming, writing and posting, hoping it turns into warm leads a few months from now.' },
    { t: 'Cold emails and DMs for hours', d: 'Outbound every single day, to people who ghost you anyway.' },
    { t: 'Cold calling', d: 'Dialing strangers just to keep the pipeline from drying up.' },
  ];
  return (
    <section id="grind" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead num="01" kicker="THE GRIND" title={<>Chained to your computer <Ital>just to keep leads coming in?</Ital></>} />
        <Reveal><p className="v-lead">More leads means more sales calls. More sales calls means more clients and more revenue. You know that. But right now, getting those leads probably looks like this:</p></Reveal>
        <div className="v-grind-grid">
          {ways.map((w, i) => (
            <Reveal key={i} delay={i * 80}><div className="card v-grind-card"><div className="v-num">0{i + 1}</div><h3>{w.t}</h3><p>{w.d}</p></div></Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="v-statement">
            <p className="v-statement-lead">These methods work. They just do.</p>
            <div>
              <p>But you're probably at a point in your business where you don't want to grind anymore. You don't want your bandwidth and energy to be the only thing moving your business forward.</p>
              <p className="v-statement-punch">You'd rather put money into ads and let a system bring you new sales calls, <Ital>completely on autopilot.</Ital></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyVsl() {
  const stages = [
    { n: '01', tag: 'THE AD', t: 'Cold traffic sees your ad', d: 'Meta ads put your offer in front of the exact people you want as clients. No content grind, no cold outreach.', mock: 'ad' },
    { n: '02', tag: 'THE VSL PAGE', t: 'They watch a 5 to 10 minute video', d: 'One page, one video, one direct offer: here\u2019s what we do for you, here\u2019s who it\u2019s for, here\u2019s roughly what it costs.', mock: 'vsl' },
    { n: '03', tag: 'THE APPLICATION', t: 'They apply to book a call', d: 'A short qualification form only lets the right people through. Everyone else is filtered out before they touch your calendar.', mock: 'form' },
    { n: '04', tag: 'THE CALL', t: 'A call lands on your calendar', d: 'Pre-sold. They already know what you do, what you charge, and they want it. Reminders keep them excited to show up.', mock: 'cal', hot: true },
  ];
  const Mock = ({ kind }) => {
    if (kind === 'ad') return (
      <div className="v-mock v-mock-ad">
        <div className="v-mock-row"><span className="v-mock-avatar" /><span className="v-mock-bar" style={{ width: '46%' }} /></div>
        <span className="v-mock-bar" style={{ width: '92%' }} /><span className="v-mock-bar" style={{ width: '70%' }} />
        <div className="v-mock-img"><span className="v-mock-play" /></div>
        <div className="v-mock-btn">Watch the video</div>
      </div>
    );
    if (kind === 'vsl') return (
      <div className="v-mock v-mock-vsl">
        <span className="v-mock-bar is-dark" style={{ width: '78%', height: 7 }} /><span className="v-mock-bar" style={{ width: '56%' }} />
        <div className="v-mock-video"><span className="v-mock-play is-big" /><span className="v-mock-time">08:42</span></div>
        <div className="v-mock-btn is-accent">Book a call</div>
      </div>
    );
    if (kind === 'form') return (
      <div className="v-mock v-mock-form">
        <span className="v-mock-bar is-dark" style={{ width: '60%', height: 7 }} />
        <div className="v-mock-field" /><div className="v-mock-field" />
        <div className="v-mock-field is-q"><span className="v-mock-bar" style={{ width: '70%' }} /><span className="v-mock-check"><Check size={9} /></span></div>
        <div className="v-mock-btn is-accent">Apply</div>
      </div>
    );
    return (
      <div className="v-mock v-mock-cal">
        <div className="v-mock-row" style={{ justifyContent: 'space-between' }}><span className="v-mock-bar is-dark" style={{ width: '40%', height: 7 }} /><span className="v-mock-bar" style={{ width: '22%' }} /></div>
        <div className="v-mock-grid">{Array.from({ length: 14 }).map((_, i) => <span key={i} className={'v-mock-cell' + (i === 9 ? ' is-on' : '')} />)}</div>
        <div className="v-mock-slot"><span className="v-mock-dot" />Strategy call &middot; confirmed</div>
      </div>
    );
  };
  const principles = [
    { t: 'It\u2019s automated', d: 'You set it up once. The only thing left to do is refresh your creatives every once in a while.' },
    { t: 'No bait and switch', d: 'No \u201cfree value\u201d or \u201cfree audit\u201d promised just to get people on a call. The offer is the offer.' },
    { t: 'Pre-sold calls', d: 'These people already know what you can do for them, roughly what you charge, and they\u2019re willing to pay for it.' },
  ];
  return (
    <section id="why">
      <div className="container">
        <SectionHead num="01" kicker="THE VSL BOOK-CALL FUNNEL" title={<>How this system <Ital>works.</Ital></>} />
        <Reveal><p className="v-lead">The VSL book-call funnel is the simplest paid ads system there is. A direct offer, a 5 to 10 minute video on one page explaining it, ads that send the right people to that page, and a calendar that fills up with qualified calls. Here&rsquo;s how each piece works.</p></Reveal>
        <div className="v-stages">
          {stages.map((s, i) => (
            <React.Fragment key={i}>
              <Reveal delay={i * 90} className="v-stage-wrap">
                <div className={'v-stage' + (s.hot ? ' is-hot' : '')}>
                  <div className="v-stage-mock"><Mock kind={s.mock} /></div>
                  <div className="v-stage-body">
                    <div className="v-stage-tag"><span>{s.n}</span>{s.tag}</div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </div>
              </Reveal>
              {i < stages.length - 1 && <span className="v-stage-arrow" aria-hidden="true"><Arrow size={18} /></span>}
            </React.Fragment>
          ))}
        </div>
        <div className="v-principles">
          {principles.map((p, i) => (
            <Reveal key={i} delay={i * 80}><div className="v-principle"><span className="v-principle-ic"><Check size={13} /></span><div><h4>{p.t}</h4><p>{p.d}</p></div></div></Reveal>
          ))}
        </div>
        <Reveal delay={200}><p className="v-why-foot">The best part isn&rsquo;t that you book calls. <Ital>It&rsquo;s that the system runs without you.</Ital></p></Reveal>
      </div>
    </section>
  );
}

function ThreeReasons() {
  const reasons = [
    { t: 'The cold traffic offer', d: "You need an offer built to be sold to complete strangers. Most people sell their service the way they sell to referrals or leads from their content. That's a big no. When you run ads, you sell an offer: you change how you position and communicate what you'll do for them. Optimized for cold traffic, or your ads simply won't work." },
    { t: 'The conversion system', d: 'Really good ads that capture the attention of the right people, and a funnel that converts that attention into booked calls. Most people ask ChatGPT to write their ads and VSL script and get generic messaging back that does neither.' },
    { t: 'The pre-call systems', d: "A qualification system that only lets the right people book a call. A pixel feedback loop that tells the ads manager \u201chey, we need more of these people.\u201d And reminders that keep people engaged and excited to actually show up." },
  ];
  return (
    <section id="reasons" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead num="03" kicker="WHY ADS DON'T PRODUCE CALLS" title={<>When ads don't produce qualified calls, <Ital>it's always the same 3 things.</Ital></>} />
        <Reveal><p className="v-lead">Maybe you've run ads before. Maybe you even paid someone to build something like this for you, and it didn't work. Or maybe you've never tried, because you weren't sure it would work for your business. Either way, it comes down to these three.</p></Reveal>
        <div className="v-reasons">
          {reasons.map((r, i) => (
            <Reveal key={i} delay={i * 90}><div className="card v-reason"><div className="v-big">0{i + 1}</div><h3>{r.t}</h3><p>{r.d}</p></div></Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="v-closer">
            <h3>Get these three in order and <Ital>you're 90% there.</Ital></h3>
            <p>You'll get a bunch of calls booked with your ideal clients, and you'll make good money with ads.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VslProcess() {
  const days = Array.from({ length: 10 }, (_, i) => i + 1);
  const bars = [
    { c: [1, 2], r: 1, t: 'Kickoff', s: '60 MIN', you: true, days: 'DAY 1' },
    { c: [1, 3], r: 2, t: 'Cold traffic offer', s: 'US', days: 'DAY 1–2' },
    { c: [2, 4], r: 3, t: 'VSL script', s: 'US', days: 'DAY 2–3' },
    { c: [3, 4], r: 4, t: 'Ad scripts', s: 'US', days: 'DAY 3' },
    { c: [4, 5], r: 1, t: 'Approve', s: '30 MIN', you: true, days: 'DAY 4' },
    { c: [5, 6], r: 1, t: 'Film', s: '~2 HRS', you: true, days: 'DAY 5' },
    { c: [6, 9], r: 1, t: 'Edit VSL', s: 'US · STARTS WHEN FOOTAGE LANDS', days: 'DAY 6–8' },
    { c: [6, 8], r: 2, t: 'Edit ads', s: 'US · IN PARALLEL', days: 'DAY 6–7' },
    { c: [8, 9], r: 2, t: 'Pixel + CAPI', s: 'AD ACCOUNT', days: 'DAY 8' },
    { c: [4, 7], r: 3, t: 'Application page + booking system', s: 'US · WHILE YOU FILM', days: 'DAY 4–6' },
    { c: [5, 8], r: 4, t: 'Pre-call systems', s: 'US · EMAIL + SMS', days: 'DAY 5–7' },
    { c: [9, 10], r: 1, t: 'QA', s: 'FULL TEST', days: 'DAY 9' },
    { c: [9, 10], r: 2, t: 'Review', s: '20 MIN', you: true, days: 'DAY 9' },
    { c: [10, 11], r: 1, t: 'Launch', hot: true, days: 'DAY 10' },
  ];
  return (
    <section id="process">
      <div className="container">
        <SectionHead num="02" kicker="THE PROCESS" title={<>How we build it <Ital>in 10 days or less.</Ital></>} />
        <Reveal><p className="v-lead">You do two things: the onboarding call and the filming. While you film, we build everything else, so the whole system is live in about ten days.</p></Reveal>
        <Reveal delay={80}>
          <div className="v-tl">
            <div className="v-tl-head">
              <div className="v-tl-corner">TIMELINE</div>
              <div className="v-tl-days">{days.map((d) => <div key={d} className={'v-tl-day' + (d === 10 ? ' is-live' : '')}>{d === 10 ? 'LIVE' : 'DAY ' + d}</div>)}</div>
            </div>
            <div className="v-tl-lane">
              <div className="v-tl-who"><b>The build</b><span>ABOUT 10 DAYS</span><span className="v-tl-key"><i className="is-you" />Your part<i className="is-us" />Our part</span></div>
              <div className="v-tl-bars">
                {[...bars].sort((x, y) => x.c[0] - y.c[0] || x.r - y.r).map((b, j) => (
                  <div key={j} className={'v-tl-bar ' + (b.you ? 'is-you' : 'is-us') + (b.hot ? ' is-hot' : '')} style={{ gridColumn: b.c[0] + ' / ' + b.c[1], gridRow: b.r }} data-days={b.days}>
                    <span className="v-tl-txt">{b.t}{b.s && <small>{b.s}</small>}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const groups = [
    { k: 'STRATEGY', t: 'Cold traffic offer', d: 'We rebuild how your service is positioned so a complete stranger says yes. Not the pitch you use for referrals.', items: ['Market + competitor research', 'Offer, promise and guarantee', 'Pricing + call qualification criteria'] },
    { k: 'COPY', t: 'VSL script + ad scripts', d: 'Every word your prospect hears is written by us around that offer. You approve, you never write.', items: ['Full VSL script (teleprompter-ready)', 'Ad scripts for every angle we test', 'Application page + booking copy'] },
    { k: 'PRODUCTION', t: 'Video editing', d: 'You send raw footage. We turn it into a polished VSL and a set of ads ready for Meta.', items: ['VSL edit with captions + b-roll', 'Every ad cut, captioned and formatted', 'Thumbnails + hook variations'] },
    { k: 'FUNNEL', t: 'Pages + booking system', d: 'The path from ad click to booked call, built end to end and tested before anything goes live.', items: ['VSL page + application form', 'Calendar + booking integration', 'Thank-you and confirmation flow'] },
    { k: 'SYSTEMS', t: 'Pre-call systems', d: 'Only the right people book, and the ones who book actually show up.', items: ['Qualification logic on the application', 'Email + SMS reminder sequence', 'Pre-call warm-up content'] },
    { k: 'TRACKING', t: 'Ad account + tracking', d: 'The feedback loop that tells Meta which leads to go find more of.', items: ['Ad account structure + campaigns', 'Meta pixel + conversion API', 'Booked-call event tracking'] },
  ];
  return (
    <section id="what-we-do">
      <div className="container">
        <SectionHead num="03" kicker="WHAT WE DO FOR YOU" title={<>You record the ADS &amp; VSL. <Ital>We do everything else.</Ital></>} />
        <Reveal><p className="v-lead">Here is every piece that goes into your VSL funnel, who does it, and the one thing we need from you.</p></Reveal>
        <div className="v-wwd">
          <div className="v-wwd-col is-us">
            <Reveal>
              <div className="v-wwd-colhead"><span className="v-who">US</span><b>What we do</b><span>SIX WORKSTREAMS · ZERO HOURS OF YOUR TIME</span></div>
            </Reveal>
            <div className="v-wwd-grid">
              {groups.map((g, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="v-wwd-card">
                    <div className="v-wwd-k">{g.k}</div>
                    <h3>{g.t}</h3>
                    <p>{g.d}</p>
                    <ul>{g.items.map((x, j) => <li key={j}><Check size={12} />{x}</li>)}</ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div className="v-wwd-col is-you">
              <div className="v-wwd-colhead"><span className="v-who is-you">YOU</span><b>What you do</b><span>ONE THING · ABOUT 2 HOURS</span></div>
              <div className="v-wwd-you">
                <div className="v-wwd-youitem">
                  <div className="v-wwd-num">1</div>
                  <div><h3>The filming</h3><p>You read the approved VSL and ad scripts off a teleprompter on camera. No improvising, no writing. We tell you exactly how to set up.</p><span className="v-wwd-time">DAY 5–6 · ~2 HRS</span></div>
                </div>
                <div className="v-wwd-done"><Check size={14} />That's it. Everything else on this page is on us.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const build = ['Custom cold traffic offer', 'VSL script + ad scripts', 'Video editing', 'Application page + booking system', 'Pre-call systems', 'Meta pixel + conversion API'];
  const managed = ['Everything in Build & Release', 'We run your ads day to day', 'New creatives whenever they\u2019re needed', 'Ongoing funnel optimization', 'Weekly reporting + a direct line to us'];
  return (
    <section id="packages" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <SectionHead num="04" kicker="TWO WAYS TO WORK TOGETHER" title={<>Pick <Ital>how hands-off</Ital> you want to be.</>} />
        <div className="v-packages">
          <Reveal>
            <div className="card v-pkg">
              <div className="v-pkg-tag">01</div>
              <h3 className="v-pkg-name">Build &amp;<br />Release</h3>
              <p className="v-pkg-one">We build the whole system. You run it.</p>
              <ul className="v-pkg-list">{build.map((x, i) => <li key={i}><Check size={14} />{x}</li>)}</ul>
              <a href="#top" className="btn btn-ghost">Talk about Build &amp; Release <Arrow /></a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card v-pkg is-featured">
              <div className="v-pkg-tag">02 <span className="v-pkg-badge">MOST HANDS-OFF</span></div>
              <h3 className="v-pkg-name">3-Month<br />Engagement</h3>
              <p className="v-pkg-one">We build the whole system. Then we run it for you.</p>
              <ul className="v-pkg-list">{managed.map((x, i) => i === 0 ? <li key={i} className="is-base"><Check size={14} /><b>{x}</b></li> : <li key={i} className="is-plus"><Plus size={14} />{x}</li>)}</ul>
              <a href="#top" className="btn btn-primary">Talk about the 3-month engagement <Arrow /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function VslBook() {
  const calRef = useRef(null);
  useEffect(() => {
    const url = 'https://calendly.com/mateo-m31/quick-call';
    let cancelled = false, tries = 0;
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
  const agenda = [
    "We'll look at what you do for your clients, and how we'd turn that into a cold traffic offer that crushes on paid ads.",
    "We'll break down the numbers you can expect in the first 30, 60 and 90 days.",
    "We'll see which engagement makes sense for you.",
  ];
  return (
    <section id="book">
      <div className="container">
        <SectionHead num="07" kicker="THE NEXT STEP" title={<>Book a call <Ital>with me.</Ital></>} />
        <div className="v-book">
          <Reveal>
            <div>
              <div className="v-photo">
                <img src="uploads/pasted-1777447567637-0.png" alt="Mateo, founder of Marketing31" />
                <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}><span>FOUNDER</span><span>MARKETING31</span></div>
                <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Mateo</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 4, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>Founder, Marketing31</div>
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--accent)', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>● ONLINE</span>
                </div>
              </div>
              <div className="v-side-lbl" style={{ marginTop: 26 }}>ON THE CALL</div>
              <ul className="v-call-list">{agenda.map((a, i) => <li key={i}><span className="v-num">0{i + 1}</span><span>{a}</span></li>)}</ul>
              <div className="v-nopress">There's no sales pressure on this call. If it's a fit, I'll tell you. And if it's not, I'll tell you that too.</div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div ref={calRef} className="calendly-inline-widget v-cal" data-url="https://calendly.com/mateo-m31/quick-call">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, height: '100%', padding: 32, textAlign: 'center', background: 'linear-gradient(135deg, #F6F7F9 0%, #EAEFF7 100%)' }}>
                <div style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.5, maxWidth: '32ch' }}>Pick a time that works for you.</div>
                <a href="https://calendly.com/mateo-m31/quick-call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a call <Arrow /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function YouTubeVideos() {
  // Pulls the channel's uploads live via the YouTube IFrame API (uploads playlist = channel id with UC -> UU).
  const UPLOADS = 'UUn9cF5ZdkvWBblGgL-vlR3Q';
  const channel = 'https://www.youtube.com/@MateoMarketing31';
  const MAX = 8;
  const [ids, setIds] = useState([]);
  const [status, setStatus] = useState('loading');
  const [titles, setTitles] = useState({});
  const [open, setOpen] = useState(null);
  const holder = useRef(null);

  useEffect(() => {
    let done = false, player = null, timer = null;
    const finish = (list) => {
      if (done) return; done = true;
      clearTimeout(timer);
      if (list && list.length) { setIds(list.slice(0, MAX)); setStatus('ok'); } else setStatus('fail');
      try { player && player.destroy && player.destroy(); } catch (e) {}
    };
    const build = () => {
      if (done || !holder.current) return;
      let tries = 0;
      const poll = () => {
        if (done) return;
        let list = null;
        try { list = player.getPlaylist(); } catch (e) {}
        if (list && list.length) return finish(list);
        if (tries++ < 40) setTimeout(poll, 250); else finish(null);
      };
      try {
        player = new window.YT.Player(holder.current, {
          width: 1, height: 1,
          playerVars: { listType: 'playlist', list: UPLOADS, mute: 1 },
          events: { onReady: poll, onStateChange: poll, onError: () => finish(null) },
        });
      } catch (e) { finish(null); }
    };
    if (window.YT && window.YT.Player) build();
    else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev && prev(); build(); };
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; s.async = true; document.head.appendChild(s);
      }
    }
    timer = setTimeout(() => finish(null), 15000);
    return () => { done = true; clearTimeout(timer); try { player && player.destroy && player.destroy(); } catch (e) {} };
  }, []);

  useEffect(() => {
    ids.forEach((id) => {
      fetch('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + id + '&format=json')
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => { if (j && j.title) setTitles((t) => ({ ...t, [id]: j.title })); })
        .catch(() => {});
    });
  }, [ids]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  const list = status === 'ok' ? ids : Array.from({ length: 6 }, (_, i) => 'ph' + i);
  const loop = [...list, ...list];
  return (
    <section id="videos" className="v-ytc-sec">
      <div className="container">
        <div className="v-ytc-head">
          <span className="eyebrow"><span className="dot" />FROM THE CHANNEL</span>
          <a href={channel} target="_blank" rel="noopener noreferrer" className="v-ytc-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" /></svg>
            @MateoMarketing31 <Arrow size={14} />
          </a>
        </div>
      </div>
      <div className="v-ytc-holder" aria-hidden="true"><div ref={holder} /></div>
      {status !== 'fail' && (
        <div className={'v-ytc' + (status === 'loading' ? ' is-loading' : '')}>
          <div className="v-ytc-track" style={{ animationDuration: Math.max(30, list.length * 6.5) + 's' }}>
            {loop.map((id, i) => {
              const ph = status !== 'ok';
              return (
                <button key={i} type="button" className={'v-ytc-card' + (ph ? ' is-ph' : '')} onClick={() => !ph && setOpen(id)} aria-label={titles[id] || 'Play video'} tabIndex={i >= list.length || ph ? -1 : 0}>
                  <div className="v-ytc-thumb">
                    {!ph && <img src={'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'} alt="" loading="lazy" />}
                    {!ph && <span className="v-ytc-play"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span>}
                  </div>
                  <span className="v-ytc-title">{ph ? '\u00a0' : (titles[id] || '\u00a0')}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
      {open && (
        <div className="v-ytc-modal" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button type="button" className="v-ytc-close" onClick={() => setOpen(null)} aria-label="Close">\u00d7</button>
          <div className="v-ytc-player" onClick={(e) => e.stopPropagation()}>
            <iframe src={'https://www.youtube-nocookie.com/embed/' + open + '?autoplay=1&rel=0'} title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
}

function VslFAQ() {
  const items = [
    { q: 'How much of my time does this actually take?', a: 'About 3 hours in total. The onboarding call where we build your cold traffic offer, approving the scripts, and filming the VSL and ads off a teleprompter. Everything else, the pages, the booking and pre-call systems, the ad account, pixel and conversion API, the editing, is on us.' },
    { q: 'How fast is the system live?', a: 'About 10 days from the onboarding call. Scripting starts immediately, you film while we build the rest, and once the footage is in we edit and launch.' },
    { q: 'What exactly is the guarantee?', a: "We guarantee at least $30K in profit from the system, or you don't pay. We'll walk through exactly how that works for your business and numbers on the call." },
    { q: "I've run ads before and it didn't work. Why would this be different?", a: "When ads don't produce qualified calls, it's almost always one of three things: the offer wasn't built for cold traffic, the ads and funnel were generic, or there were no pre-call systems qualifying and reminding people. We build all three properly, which is what most attempts skip." },
    { q: 'Do I have to be on camera?', a: "Yes, you're the face of the VSL and the ads. But every word is scripted and approved by you first, so filming is reading off a teleprompter. No improvising, no re-writing." },
    { q: 'Is this for my business?', a: "It's built for B2B service businesses: agencies, coaches, consultants and other companies selling a high-value service to clients. If you sell a low-priced info product to consumers, a VSL book-call funnel probably isn't the right system, and we'll tell you that on the call." },
    { q: 'Do you run the ads too?', a: 'Depends on the engagement. With Build & Release we build the entire system and hand you the keys to run it. With the 3-month engagement we manage it day to day, refresh creatives and keep optimizing every piece of the funnel.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="container">
        <SectionHead num="09" kicker="QUESTIONS" title={<>Every question <Ital>answered honestly.</Ital></>} />
        <div className="v-faq">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i}>
                <div className="v-faq-item">
                  <button className="v-faq-q" onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span><span className="v-faq-idx">0{i + 1}</span><span className="v-faq-t">{it.q}</span></span>
                    <span style={{ color: 'var(--ink-3)' }}><Plus open={isOpen} /></span>
                  </button>
                  <div className="v-faq-a" style={{ maxHeight: isOpen ? 480 : 0 }}><p>{it.a}</p></div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { VslNav, VslHero, VslVideo, Grind, WhyVsl, ThreeReasons, VslProcess, WhatWeDo, Packages, VslBook, VslFAQ, YouTubeVideos });
