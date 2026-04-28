/* global React */
// M31 — Shared bits: icons, count-up, reveal-on-scroll, marquee.

const { useEffect, useRef, useState } = React;

// Arrow icon — used on every CTA
function Arrow({ size = 18 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M5 13L13 5M13 5H6M13 5V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Plus({ size = 14, open = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ transition: 'transform .25s ease', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>
      <path d="M7 1.5V12.5M1.5 7H12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// Reveal — fades elements in when scrolled into view
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) el.classList.add('in'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, as: Tag = 'div', delay = 0, className = '', style = {}, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

// CountUp — animates number on scroll into view
function CountUp({ to, suffix = '', prefix = '', duration = 1400, decimals = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(to * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setVal(to);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted = decimals > 0
    ? Number(val).toFixed(decimals)
    : Math.round(val).toLocaleString();
  return <span ref={ref} className="tnum">{prefix}{formatted}{suffix}</span>;
}

// Pill component
function Pill({ children, dot = true }) {
  return (
    <span className="pill">
      {dot && <span className="check"><Check size={12} /></span>}
      {children}
    </span>
  );
}

// SectionHead — number + title + optional kicker
function SectionHead({ num, kicker, title, right }) {
  return (
    <div className="section-head">
      <div className="row">
        <span className="num">[ {num} ]</span>
        <span className="num">{kicker}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <h2>{title}</h2>
        {right}
      </div>
    </div>
  );
}

Object.assign(window, { Arrow, Check, Plus, Reveal, CountUp, Pill, SectionHead, useReveal });
