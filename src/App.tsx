import { useEffect, useMemo, useRef, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  Trophy,
} from 'lucide-react';
import Navbar from './components/Navbar';
import SkillGalaxy3D from './components/SkillGalaxy3D';
import heroVivek from './assets/hero-vivek.png';
import aboutLargeLeft from './assets/Large_Left.jpg';
import aboutTopRight from './assets/Top_Right.jpg';
import aboutBottomRight from './assets/Bottom_Right.jpg';

gsap.registerPlugin(ScrollTrigger);

const roles = ['Full Stack Developer', 'AI Enthusiast'];

const aboutImages = [
  { src: aboutLargeLeft, alt: 'Large left portrait' },
  { src: aboutTopRight, alt: 'Top right portrait' },
  { src: aboutBottomRight, alt: 'Bottom right portrait' },
];

const internships = [
  { company: 'CELLSTRAT', role: 'AI Internship', date: 'Jun 2025 - Jul 2025' },
  { company: 'SYNAPSLOGIC', role: 'Full Stack Development Internship', date: 'Aug 2025 - Sep 2025' },
  { company: 'NIELIT, Calicut', role: 'Data Analytics, AI & Web Development Internship', date: 'Dec 2025' },
];

const skillGroups = [
  { title: 'Programming', skills: ['C', 'C++', 'Python', 'JavaScript', 'Java'] },
  { title: 'Frontend', skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Flutter'] },
  { title: 'Backend', skills: ['Django', 'Node.js', 'MongoDB', 'MySQL'] },
  { title: 'Data Science & AI', skills: ['Pandas', 'NumPy', 'Matplotlib', 'PyTorch'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'CI/CD', 'VS Code', 'Figma', 'Canva'] },
];

const projects = [
  {
    title: '3D AI Interviewer System',
    meta: 'AI product / Spatial interface',
    year: '2026',
    desc: 'A conversational interview simulator shaped around immersive presence, adaptive questioning, and human-like feedback loops.',
    tech: ['React', 'Three.js', 'AI'],
    image: '',
  },
  {
    title: 'Cardiacare',
    meta: 'Healthcare AI / Diagnostics',
    year: '2025',
    desc: 'An intelligent heart-health suite for ECG analysis, report understanding, and patient-first cardiac insights.',
    tech: ['Python', 'JavaScript', 'ML'],
    image: '',
  },
  {
    title: 'Aurora Voices',
    meta: 'Social platform / Expression',
    year: '2025',
    desc: 'A full-stack creative network where poetry, voice, and real-time community interactions move through a calm publishing experience.',
    tech: ['MERN', 'MongoDB', 'Realtime'],
    image: '',
  },
  {
    title: 'Verve',
    meta: 'Wellness intelligence / Mobile',
    year: '2025',
    desc: 'An AI-powered nutrition and wellness platform designed for chronic disease support and everyday health decisions.',
    tech: ['Flutter', 'AI Integration'],
    image: '',
  },
  {
    title: 'Ultracode AI',
    meta: 'Developer tooling / AI systems',
    year: '2026',
    desc: 'A focused coding companion concept for accelerating build flow, reasoning through code, and reducing product iteration friction.',
    tech: ['React', 'Node.js', 'LLM'],
    image: '',
  },
  {
    title: 'GazeVoice',
    meta: 'Assistive technology / Browser AI',
    year: '2025',
    desc: 'A browser-based AAC communication system that translates eye-gaze intent into speech for patients with limited mobility.',
    tech: ['WebGazer.js', 'Text-to-Speech'],
    image: '',
  },
  {
    title: 'Akshara.AI',
    meta: 'Language AI / Learning',
    year: '2026',
    desc: 'A language intelligence project exploring accessible learning, multilingual assistance, and culturally aware interaction design.',
    tech: ['AI', 'NLP', 'Product Design'],
    image: '',
  },
];

const achievements = [
  ['Winner', 'Techgyan GEN AI Hackathon', 'NIT Trichy'],
  ['Winner', 'Techgyan Android App Development Hackathon', 'IIT Madras'],
  ['Winner', "Appathon'25", 'Sona College of Technology'],
  ['Finalist', 'Aventus 3.0', 'Dayananda Sagar College of Engineering'],
  ['Finalist', 'Sustain-A-Thon', 'Sharda University'],
  ['Finalist', 'AI Ignite 2026', 'SMVEC Puducherry'],
];

const codingStats = [
  { label: 'LeetCode', value: 160, suffix: '+ Problems Solved' },
  { label: 'SkillRack', value: 950, suffix: '+ Problems Solved' },
  { label: 'HackerRank', value: 4004, suffix: ' Hackos' },
];

const education = [
  ['Sri Eshwar College of Engineering', 'B.E CSE (AI & ML)', 'CGPA: 8.07'],
  ['Sri Vidya Mandir Matric Hr Sec School', 'HSC', '91%'],
  ['Bharath Hi-Tech Matric Hr Sec School', 'SSLC', '96.2%'],
];

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.075, wheelMultiplier: 0.9, smoothWheel: true });
    (window as any).lenis = lenis;
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);
}

function useGsapReveals() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 90, opacity: 0, filter: 'blur(18px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%' },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-section-theme]').forEach((section) => {
        const color = section.dataset.sectionTheme ?? '#090909';
        ScrollTrigger.create({
          trigger: section,
          start: 'top 62%',
          end: 'bottom 38%',
          onEnter: () => gsap.to('body', { backgroundColor: color, duration: 1.2, ease: 'none' }),
          onEnterBack: () => gsap.to('body', { backgroundColor: color, duration: 1.2, ease: 'none' }),
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const target = { count: 0 };
    const tween = gsap.to(target, {
      count: value,
      duration: 2.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${Math.floor(target.count)}`;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 max-w-4xl" data-reveal>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-flare">{eyebrow}</p>
      <h2 className="font-display text-5xl uppercase leading-[0.9] text-bone md:text-8xl">{title}</h2>
    </div>
  );
}

function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 80, damping: 20 });
  const springY = useSpring(my, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-portrait-wrap', { opacity: 0 });
      gsap.set('.hero-text-content > *', { y: 40, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.2 });
      tl.to('.hero-portrait-wrap', { opacity: 1, duration: 1.2, ease: 'power2.out' })
        .to('.hero-text-content > *', { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.8');
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="hero-poster"
      data-section-theme="#0b0b0b"
      onMouseMove={(event) => {
        mx.set((event.clientX / window.innerWidth - 0.5) * 18);
        my.set((event.clientY / window.innerHeight - 0.5) * 18);
      }}
    >
      {/* Cinematic orb */}
      <motion.div className="hero-orb" animate={{ x: [0, 20, 0] }} transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }} />
      {/* Light rays */}
      <div className="hero-rays" aria-hidden="true" />
      {/* Film grain / noise */}
      <div className="hero-grain" aria-hidden="true" />
      {/* Vignette */}
      <div className="hero-vignette" aria-hidden="true" />

      {/* Portrait â€” placed outside the max-w wrapper so right:0 = viewport edge */}
      <div className="hero-portrait-wrap">
        {/* Giant circular spotlight behind the character */}
        <div className="hero-spotlight" aria-hidden="true" />
        {/* Red ambient glow */}
        <div className="hero-ambient" aria-hidden="true" />
        <img
          src={heroVivek}
          alt="Vivek K K â€” Full Stack Developer & AI Enthusiast"
          className="hero-portrait-img"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 py-6 md:px-10">
        <div className="grid flex-1 items-center gap-0 pt-24 pb-12 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="max-w-2xl pt-16 lg:pt-0 hero-text-content">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.48em] text-flare">Creative Developer</p>
            <h1 className="hero-title">
              Hi, I Am{' '}
              <span className="text-outline-animated">Vivek</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl font-medium tracking-wide">
              Full Stack Developer | AI Enthusiast | Vision Builder
            </p>
            <a className="hero-cta" href="#about">
              Find Out More <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyMattersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const lines = ['', 'PASSIONATE', 'ABOUT CREATING', 'TECHNOLOGY', 'THAT MATTERS'];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const revealLines = gsap.utils.toArray<HTMLElement>('[data-tech-line]');
      const closingLine = section.querySelector<HTMLElement>('[data-tech-closing]');

      gsap.set(revealLines, {
        backgroundPositionX: '100%',
      });
      gsap.set(closingLine, {
        yPercent: 120,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      revealLines.forEach((line) => {
        timeline.to(line, {
          backgroundPositionX: '0%',
          ease: 'none',
          duration: 1,
        });
      });

      timeline.to(closingLine, {
        yPercent: 0,
        ease: 'none',
        duration: 0.8,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const textLayer = lines.map((line, index) => (
    <span className="technology-matters-line" key={index}>
      {line ? (
        <span className="technology-matters-reveal-line" data-tech-line>
          {line}
        </span>
      ) : (
        <span className="block h-[clamp(1.5rem,3vw,3rem)]" />
      )}
    </span>
  ));

  return (
    <section
      ref={sectionRef}
      className="technology-matters-section"
      data-section-theme="#b80d0d"
      aria-label="Passionate about creating technology that matters"
    >
      <div className="technology-matters-sticky">
        <h2 className="technology-matters-title" aria-hidden="true">
          {textLayer}
        </h2>
        <div className="technology-matters-closing-wrap" aria-hidden="true">
          <p className="technology-matters-closing" data-tech-closing>
            Engineering a better tomorrow
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-about-card]');
      const floats = gsap.utils.toArray<HTMLElement>('[data-about-float]');
      const dots = gsap.utils.toArray<HTMLElement>('[data-about-dot]');
      const copyItems = gsap.utils.toArray<HTMLElement>('[data-about-fade]');

      // â”€â”€ Card-1 (Large Left): .image-pan wrapper pan â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // The .image-pan wrapper is 135% tall inside .about-cinema-float
      // (which has overflow:hidden). The img inside is 100/100 â€” perfect fit.
      // yPercent: 35  â†’ wrapper pushed DOWN â†’ lower body visible at start.
      // yPercent: 0   â†’ wrapper at natural top â†’ upper body / face visible.
      const largePan = section.querySelector<HTMLElement>('[data-large-pan]');

      // â”€â”€ Cards 2 & 3: float wrapper pan â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      const smallFloats = floats.filter((_, i) => i !== 0);

      const panScroll = {
        trigger: section,
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
      };

      if (largePan) {
        gsap.set(largePan, { yPercent: -35 }); // pushed up â†’ bottom of image (legs) visible
        gsap.to(largePan, {
          yPercent: 0,  // slides DOWN â†’ upper body / face revealed
          ease: 'none',
          scrollTrigger: panScroll,
        });
      }

      // Cards 2 & 3: standard float wrapper pan
      gsap.set(smallFloats, { yPercent: -40 });
      gsap.to(smallFloats, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: panScroll,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }).to([section, document.body], {
        keyframes: [
          { backgroundColor: '#A00000', duration: 0.25 },
          { backgroundColor: '#700000', duration: 0.25 },
          { backgroundColor: '#450000', duration: 0.25 },
          { backgroundColor: '#1A0000', duration: 0.25 },
        ],
        ease: 'none',
      });

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.14,
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            once: true,
          },
        },
      );

      // (card-1 and small floats handled above)

      gsap.to(copyItems, {
        autoAlpha: (index) => [0.92, 0.82, 0.58, 0.36, 0.22][index] ?? 0.22,
        y: (index) => -10 * (index + 1),
        ease: 'none',
        stagger: 0.035,
        scrollTrigger: {
          trigger: section,
          start: 'top 12%',
          end: 'bottom 58%',
          scrub: true,
        },
      });

      ScrollTrigger.create({
        ...panScroll,
        onUpdate: (self) => {
          const activeIndex = Math.min(dots.length - 1, Math.floor(self.progress * dots.length));
          dots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === activeIndex));
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-cinema-section" data-section-theme="#D10000">
      <div className="about-cinema-grid">
        <div className="about-cinema-gallery" aria-label="About Me visual gallery">
          {aboutImages.map((image, index) => (
            <figure className={`about-cinema-card about-cinema-card-${index + 1}`} data-about-card key={image.alt}>
              <div className="about-cinema-float" data-about-float>
                {index === 0 ? (
                  <div className="image-pan" data-large-pan>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ) : (
                  <img src={image.src} alt={image.alt} />
                )}
              </div>
            </figure>
          ))}
        </div>

        <div className="about-cinema-copy-wrap">
          <div className="about-cinema-dots" aria-label="Gallery scroll progress">
            {aboutImages.map((image, index) => (
              <span className={index === 0 ? 'is-active' : undefined} data-about-dot key={image.alt} />
            ))}
          </div>

          <article className="about-cinema-copy">
            <p className="about-cinema-eyebrow" data-about-fade>About Me</p>

            <p data-about-fade>
              I am Vivek K K, a Computer Science Engineering student specializing in AI and ML, drawn to the space where clean interfaces, reliable systems, and intelligent tools meet.
            </p>
            <p data-about-fade>
              My work is shaped by projects, hackathons, internships, and constant experimentation. I like building products that feel useful, precise, and alive enough to solve real problems.
            </p>
            <p data-about-fade>
              For me, technology matters when it carries intention: helping people understand, communicate, decide, heal, or create with more confidence.
            </p>
            <div className="about-cinema-pill-row">
              <span>Skills</span>
              <span>Experience</span>
              <span>Achievements</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell bg-gradient-to-b from-blood via-[#190202] to-void" data-section-theme="#090909">
      <SectionTitle eyebrow="Experience" title="Timeline of practice" />
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-[1px] bg-gradient-to-b from-flare via-white/20 to-transparent md:left-1/2" />
        {internships.map((item, index) => (
          <div key={item.company} className={`timeline-item ${index % 2 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'}`} data-reveal>
            <div className="timeline-dot" />
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-flare">{item.date}</p>
            <h3 className="mt-4 font-display text-4xl uppercase text-bone">{item.company}</h3>
            <p className="mt-2 text-lg text-ash">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rowHeightRef = useRef(120);
  const activeProjectRef = useRef(0);
  const [activeProject, setActiveProject] = useState(0);

  const scrollToProject = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const targetY = Math.round(section.offsetTop + rowHeightRef.current * index);
    const lenis = (window as any).lenis;

    if (lenis?.scrollTo) {
      lenis.scrollTo(targetY, { duration: 1.1, easing: (t: number) => t });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    const path = pathRef.current;
    const stack = stackRef.current;
    const track = trackRef.current;
    if (!section || !timeline || !path || !stack || !track) return;

    let resizeObserver: ResizeObserver | undefined;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('[data-project-item]');
      let currentIndex = 0;
      let rowHeight = 120;
      let smoothedProgress = 0;
      let smoothedVelocity = 0;
      const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

      const curveOffset = (distance: number) => {
        const absDistance = Math.abs(distance);
        const directionBias = distance * (isMobile() ? 1.5 : 2.5);
        const mobileCurve = [-18, -6, 8];
        const desktopCurve = [-42, -16, 18];
        const curve = isMobile() ? mobileCurve : desktopCurve;

        if (absDistance <= 1) {
          return gsap.utils.interpolate(curve[0], curve[1], absDistance) + directionBias;
        }

        return gsap.utils.interpolate(curve[1], curve[2], Math.min(absDistance - 1, 1)) + directionBias;
      };

      const setProjectGeometry = () => {
        const nextRowHeight = isMobile()
          ? gsap.utils.clamp(76, 108, window.innerHeight * 0.16)
          : gsap.utils.clamp(102, 150, window.innerHeight * 0.165);

        rowHeight = nextRowHeight;
        rowHeightRef.current = rowHeight;
        section.style.setProperty('--project-row-height', `${rowHeight}px`);
        section.style.setProperty('--project-visible-height', `${rowHeight * 5}px`);

        const timelineHeight = Math.max(2500, rowHeight * projects.length + 1200);
        timeline.style.height = `${timelineHeight}px`;
        timeline.style.top = '0';
        timeline.style.left = '0';

        gsap.set(track, { height: rowHeight * projects.length });
        items.forEach((item, index) => gsap.set(item, { y: index * rowHeight, height: rowHeight }));
      };

      const renderProjectFrame = (progress = 0, velocity = 0) => {
        const activeFloat = progress * (projects.length - 1);
        const centeredTrackY = (rowHeight * 5) / 2 - rowHeight / 2 - activeFloat * rowHeight;
        const nearestIndex = gsap.utils.clamp(0, projects.length - 1, Math.round(activeFloat));

        gsap.to(track, {
          y: centeredTrackY,
          duration: 1.05,
          ease: 'power3.out',
          overwrite: 'auto',
        });

        items.forEach((item, index) => {
          const distance = index - activeFloat;
          const absDistance = Math.abs(distance);
          const visibility = gsap.utils.clamp(0.46, 1, 1 - absDistance / 4.2);
          const isNearest = index === nearestIndex;

          gsap.to(item, {
            x: curveOffset(distance),
            scale: gsap.utils.interpolate(1.08, 0.9, Math.min(absDistance / 2.35, 1)),
            opacity: gsap.utils.interpolate(0.12, 1, visibility),
            color: isNearest ? '#f7f7f7' : '#373737',
            duration: 0.95,
            ease: 'power3.out',
            overwrite: 'auto',
          });

          item.classList.toggle('is-active', isNearest);
        });

        if (nearestIndex !== currentIndex) {
          currentIndex = nearestIndex;
          activeProjectRef.current = nearestIndex;
          setActiveProject(nearestIndex);
        }
      };

      setProjectGeometry();

      const linePath = path;
      const lineLen = linePath.getTotalLength();

      gsap.set(linePath, {
        strokeDasharray: lineLen,
        strokeDashoffset: lineLen,
      });

      gsap.to(linePath, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${rowHeight * (projects.length + 1.2)}`,
          scrub: 6.75,
        },
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${rowHeight * (projects.length - 1)}`,
        pin: '.projects-showcase-inner',
        pinSpacing: true,
        scrub: 1.25,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (projects.length - 1),
          duration: { min: 0.35, max: 0.82 },
          delay: 0.03,
          ease: 'power3.out',
        },
        onRefresh: (self) => {
          setProjectGeometry();
          renderProjectFrame(self.progress, self.getVelocity());
        },
        onUpdate: (self) => renderProjectFrame(self.progress, self.getVelocity()),
      });

      resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
      resizeObserver.observe(section);

      let wheelLocked = false;
      const handleProjectWheel = (event: WheelEvent) => {
        if (Math.abs(event.deltaY) < 10) return;
        event.preventDefault();

        if (wheelLocked) return;
        wheelLocked = true;

        const direction = event.deltaY > 0 ? 1 : -1;
        const nextIndex = gsap.utils.clamp(0, projects.length - 1, activeProjectRef.current + direction);

        if (nextIndex !== activeProjectRef.current) {
          activeProjectRef.current = nextIndex;
          scrollToProject(nextIndex);
        }

        window.setTimeout(() => {
          wheelLocked = false;
        }, 650);
      };

      section.addEventListener('wheel', handleProjectWheel, { passive: false });

      requestAnimationFrame(() => renderProjectFrame(0, 0));

      return () => {
        resizeObserver?.disconnect();
        section.removeEventListener('wheel', handleProjectWheel);
      };

      return () => {
        resizeObserver?.disconnect();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  const currentProject = projects[activeProject];

  return (
    <section ref={sectionRef} id="projects" className="projects-showcase" data-section-theme="#040404">
      <div className="projects-section-heading" data-reveal>
        <p>Featured work</p>
        <h2>PROJECTS</h2>
      </div>

      <div className="projects-timeline" ref={timelineRef} aria-hidden="true">
        <svg
          className="fluid-line-svg"
          id="fluid-line-svg"
          viewBox="0 0 1000 2195"
          preserveAspectRatio="xMinYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            className="fluid-line"
            id="fluid-line"
            d="M 0,120 
                C 320,80 620,250 500,500 
                C 400,700 -180,900 150,1080 
                C 560,1320 960,1220 1900,1180 
                C 1260,1120 1380,1200 1800,1360"
            style={{ strokeDashoffset: '180px', strokeDasharray: '3004.42' }}
            fill="none"
            stroke="red"
            strokeWidth="80"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="projects-showcase-inner">
        <div className="projects-stack" ref={stackRef}>
          <div className="projects-track" ref={trackRef}>
            {projects.map((project, index) => {
              const isActive = index === activeProject;

              return (
                <article
                  key={project.title}
                  className={`project-story ${isActive ? 'is-active' : ''}`}
                  data-project-item
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => scrollToProject(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <h2>{project.title}</h2>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="projects-preview-wrap" aria-live="polite">
          <div className="projects-preview-topline">
            <span>{activeProject + 1 < 10 ? `0${activeProject + 1}` : activeProject + 1} {currentProject.year}</span>
            <span>Preview</span>
          </div>
          <div className="projects-preview">
            <AnimatePresence mode="sync">
              <motion.div
                key={currentProject.title}
                className="projects-preview-image"
                initial={{ opacity: 0, scale: 1.035, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.985, filter: 'blur(10px)' }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {currentProject.image ? (
                  <img src={currentProject.image} alt={`${currentProject.title} preview`} />
                ) : (
                  <div className="projects-preview-placeholder" aria-label={`${currentProject.title} image placeholder`}>
                    <span>{currentProject.title}</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section-shell bg-gradient-to-b from-void via-[#2c0505] to-blood" data-section-theme="#3a0505">
      <SectionTitle eyebrow="Achievements" title="Proof under pressure" />
      <div className="achievement-grid">
        {achievements.map(([rank, title, place], index) => (
          <motion.article
            key={title}
            className="achievement-card"
            data-reveal
            whileHover={{ scale: 1.025, y: -8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
          >
            <Trophy className="mb-8 text-flare" size={32} />
            <span>0{index + 1}</span>
            <h3>{rank}</h3>
            <p>{title}</p>
            <small>{place}</small>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function CodingProfiles() {
  return (
    <section className="section-shell bg-gradient-to-b from-blood via-[#150202] to-void" data-section-theme="#090909">
      <SectionTitle eyebrow="Coding Profiles" title="Numbers that compound" />
      <div className="grid gap-5 md:grid-cols-3">
        {codingStats.map((stat) => (
          <article className="stat-card" key={stat.label} data-reveal>
            <p>{stat.label}</p>
            <h3>
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="certifications" className="section-shell bg-gradient-to-b from-void via-[#240404] to-blood" data-section-theme="#360505">
      <SectionTitle eyebrow="Education" title="Foundation and focus" />
      <div className="grid gap-4">
        {education.map(([school, degree, score], index) => (
          <article className="education-card" data-reveal key={school}>
            <span>0{index + 1}</span>
            <h3>{school}</h3>
            <p>{degree}</p>
            <strong>{score}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell min-h-screen bg-gradient-to-b from-blood via-[#160101] to-void" data-section-theme="#090909">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div data-reveal>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.48em] text-flare">Contact</p>
          <h2 className="font-display text-[18vw] uppercase leading-[0.78] text-bone lg:text-[8.2vw]">
            Let's Build
            <span className="block text-outline">Something</span>
            <span className="block text-flare">Amazing</span>
          </h2>
          <div className="mt-10 grid gap-3 text-ash sm:grid-cols-2">
            <a className="contact-link" href="mailto:vivekkk@example.com">
              <Mail size={18} /> vivekkk@example.com
            </a>
            <a className="contact-link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="contact-link" href="tel:+910000000000">
              <Phone size={18} /> +91 00000 00000
            </a>
          </div>
        </div>
        <form className="contact-form" data-reveal>
          <input aria-label="Name" placeholder="Name" />
          <input aria-label="Email" type="email" placeholder="Email" />
          <textarea aria-label="Message" placeholder="Message" rows={6} />
          <button className="btn-primary w-full justify-center" type="button">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-flare" style={{ scaleX }} />;
}

export default function App() {
  useLenis();
  useGsapReveals();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-bone">
      <ProgressBar />
      <div className="grain" />
      <Navbar />
      <Hero />
      <TechnologyMattersSection />
      <About />
      <SkillGalaxy3D />
      <Projects />
      <Experience />
      <Achievements />
      <CodingProfiles />
      <Education />
      <Contact />
      <footer className="border-t border-white/10 bg-void px-5 py-8 text-center text-xs uppercase tracking-[0.36em] text-ash">
        Vivek K K / {year}
      </footer>
    </main>
  );
}
