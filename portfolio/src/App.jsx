import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Github, Linkedin, Mail, ExternalLink, Code2, Server, Database,
  Terminal, ChevronDown, Star, GitFork, Calendar, ArrowUpRight,
  Download, Layers, Cpu, Globe, X, Menu, Award, Briefcase
} from 'lucide-react'
import './App.css'

const CONFIG = {
  name: "Karthik Reddy",
  title: "Full Stack Developer",
  tagline: "Building elegant, scalable, and data-driven web applications.",
  bio: "Full Stack Developer and MCA graduate with hands-on experience in React.js, Node.js, and SQL. Currently interning at Clyptus Software Solutions, I've delivered internal tools processing 10,000+ records and BI dashboards that reduced stakeholder analysis time by 30%. Passionate about crafting responsive frontends and robust backends.",
  github: "reddykarthik2002",
  linkedin: "karthik-reddy-2002dec",
  email: "karthik.reddy01219@gmail.com",
  phone: "+91 96407-22212",
  resumeUrl: "/resume.pdf",
  skills: {
    "Languages":   ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Java", "HTML5", "CSS3"],
    "Frontend":    ["React.js", "Bootstrap", "Tailwind CSS", "Responsive UI Design"],
    "Backend":     ["Node.js", "REST API Design", "SQLite", "MySQL", "SQL Server", "MongoDB"],
    "Cloud & Tools":["Firebase Studio", "Vercel", "AWS (Basics)", "Git / GitHub", "Power BI", "Pandas"],
  },
  experience: [
    {
      role: "Software Developer Intern",
      company: "Clyptus Software Solutions",
      period: "Jan 2024 – Present",
      desc: "Developed full-stack internal web apps using Firebase Studio & Vercel. Built Power BI KPI dashboards for real-time tracking across 10,000+ records and designed REST API-integrated React interfaces.",
    },
    {
      role: "Web Development Intern",
      company: "Blue Bright Innovation Circles",
      period: "2023 – 2024",
      desc: "Developed responsive web apps using JS/HTML/CSS. Improved website usability by 30% through UI optimization and analyzed user behavior patterns to support data-driven design decisions.",
    },
  ],
  projects: [
    {
      name: "Finflow – Personal Finance Dashboard",
      desc: "Full-stack finance app with React.js frontend and SQLite. Features monthly analytics, interactive charts (bar, donut, line), and CSV export. Designed a responsive dark-themed UI.",
      tech: ["React.js", "SQLite", "JavaScript", "HTML", "CSS"],
      date: "Mar 2025",
      github: "https://github.com/reddykarthik2002/Finflow",
      live: null,
    },
    {
      name: "Retail Store Sales Performance Dashboard",
      desc: "Analyzed 50,000+ records using Python/Pandas. Built Power BI dashboard with custom DAX measures, identifying the top 10% products driving 35% of total revenue.",
      tech: ["Python", "Pandas", "Power BI", "Excel"],
      date: "June 2024",
      github: "https://github.com/reddykarthik2002/Retail-Store-Sales-Performance-Dashboard",
      live: null,
    },
    {
      name: "AI Personal Assistant – Chatbot",
      desc: "AI chatbot using Google Gemini API with real-time conversation and session memory. Implemented persona-switching logic and multi-turn history management.",
      tech: ["JavaScript", "HTML", "CSS", "Gemini API"],
      date: "Dec 2024",
      github: "https://github.com/reddykarthik2002/AI-Personal-Assistant",
      live: "https://reddykarthik2002.github.io/AI-Personal-Assistant",
    },
  ],
  certifications: [
    { name: "Google Data Analytics", org: "Coursera" },
    { name: "Business Intelligence & Data Analytics", org: "Macquarie University" },
    { name: "Google Cloud Data Analytics", org: "Coursera" },
    { name: "Python Programming", org: "University of Michigan" },
    { name: "Google UX Design", org: "Coursera" },
    { name: "Node.js, React.js, JS, Angular.js", org: "Infosys Springboard" },
  ],
  education: {
    degree: "Master of Computer Applications (MCA)",
    university: "Chandigarh University",
    cgpa: "7.45",
  }
}

const skillIcons = { "Languages": Code2, "Frontend": Layers, "Backend": Server, "Cloud & Tools": Terminal }
const langColors = { JavaScript:"#f7df1e", TypeScript:"#3178c6", Python:"#3572A5", Go:"#00ADD8", CSS:"#563d7c", HTML:"#e34c26", "HTML/CSS":"#e34c26" }

const fadeUp = { hidden:{opacity:0,y:40}, show:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}} }
const stagger = { show:{transition:{staggerChildren:0.12}} }

function useGitHubRepos(username) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6&type=public`)
      .then(r => r.json())
      .then(data => { if (!data.message) setRepos(data.filter(r => !r.fork).slice(0,6)) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [username])
  return { repos, loading }
}

function Cursor() {
  const [pos, setPos] = useState({x:-100,y:-100})
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    const move = e => setPos({x:e.clientX,y:e.clientY})
    const enter = e => { if(e.target.closest('a,button,[data-hover]')) setHovered(true) }
    const leave = () => setHovered(false)
    window.addEventListener('mousemove',move)
    window.addEventListener('mouseover',enter)
    window.addEventListener('mouseout',leave)
    return () => { window.removeEventListener('mousemove',move); window.removeEventListener('mouseover',enter); window.removeEventListener('mouseout',leave) }
  },[])
  return (
    <>
      <motion.div className="cursor-dot" animate={{x:pos.x-3,y:pos.y-3,scale:hovered?0:1}} transition={{type:'spring',stiffness:800,damping:35}}/>
      <motion.div className="cursor-ring" animate={{x:pos.x-14,y:pos.y-14,scale:hovered?1.6:1,opacity:hovered?0.7:0.5}} transition={{type:'spring',stiffness:200,damping:25}}/>
    </>
  )
}

function Navbar({sections}) {
  const [open,setOpen] = useState(false)
  const [scrolled,setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll',fn)
    return () => window.removeEventListener('scroll',fn)
  },[])
  const scroll = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setOpen(false) }
  return (
    <motion.nav className={`nav ${scrolled?'nav--scrolled':''}`} initial={{y:-80}} animate={{y:0}} transition={{duration:0.6,ease:[0.22,1,0.36,1]}}>
      <div className="nav__inner">
        <span className="nav__logo" onClick={() => scroll('hero')}>KR<span className="accent">.</span></span>
        <ul className="nav__links">
          {sections.map(s => <li key={s}><button onClick={() => scroll(s)}>{s}</button></li>)}
          <li><a href={CONFIG.resumeUrl} className="nav__resume" download><Download size={14}/> Resume</a></li>
        </ul>
        <button className="nav__hamburger" onClick={() => setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="nav__mobile" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}>
            {sections.map(s => <button key={s} onClick={() => scroll(s)}>{s}</button>)}
            <a href={CONFIG.resumeUrl} download>Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero() {
  const {scrollY} = useScroll()
  const y = useTransform(scrollY,[0,600],[0,-120])
  const op = useTransform(scrollY,[0,400],[1,0])
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        {[...Array(6)].map((_,i) => <motion.div key={i} className="hero__orb" animate={{y:[0,-30,0],x:[0,15,0]}} transition={{duration:6+i*1.5,repeat:Infinity,ease:'easeInOut',delay:i*0.8}}/>)}
      </div>
      <motion.div className="hero__content" style={{y,opacity:op}}>
        <motion.p className="hero__greeting" variants={fadeUp} initial="hidden" animate="show">👋 Hello, I'm</motion.p>
        <motion.h1 className="hero__name" variants={fadeUp} initial="hidden" animate="show" transition={{delay:0.1}}>
          <span className="accent">Karthik</span> Reddy
        </motion.h1>
        <motion.h2 className="hero__title" variants={fadeUp} initial="hidden" animate="show" transition={{delay:0.2}}>
          {CONFIG.title}
        </motion.h2>
        <motion.p className="hero__tagline" variants={fadeUp} initial="hidden" animate="show" transition={{delay:0.3}}>
          {CONFIG.tagline}
        </motion.p>
        <motion.div className="hero__cta" variants={fadeUp} initial="hidden" animate="show" transition={{delay:0.4}}>
          <button className="btn btn--primary" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>
            View Projects <ArrowUpRight size={16}/>
          </button>
          <a href={`mailto:${CONFIG.email}`} className="btn btn--ghost">Get in Touch</a>
        </motion.div>
        <motion.div className="hero__socials" variants={fadeUp} initial="hidden" animate="show" transition={{delay:0.5}}>
          <a href={`https://github.com/${CONFIG.github}`} target="_blank" rel="noreferrer"><Github size={20}/></a>
          <a href={`https://linkedin.com/in/${CONFIG.linkedin}`} target="_blank" rel="noreferrer"><Linkedin size={20}/></a>
          <a href={`mailto:${CONFIG.email}`}><Mail size={20}/></a>
        </motion.div>
      </motion.div>
      <motion.div className="hero__scroll" animate={{y:[0,8,0]}} transition={{duration:1.5,repeat:Infinity}}>
        <ChevronDown size={20}/>
      </motion.div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <motion.div className="section__inner" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}}>
        <motion.p className="section__label" variants={fadeUp}>About Me</motion.p>
        <motion.h2 className="section__title" variants={fadeUp}>Who I am</motion.h2>
        <div className="about__grid">
          <motion.div className="about__text" variants={fadeUp}>
            <p>{CONFIG.bio}</p>
            <div className="about__edu">
              <div className="edu-card">
                <span className="edu-card__icon"><Award size={16}/></span>
                <div>
                  <strong>{CONFIG.education.degree}</strong>
                  <span>{CONFIG.education.university} &nbsp;·&nbsp; CGPA: {CONFIG.education.cgpa}</span>
                </div>
              </div>
            </div>
            <div className="about__stats">
              {[["1+","Years Exp."],["3","Projects"],["9","Certifications"],["5+","Technologies"]].map(([n,l]) => (
                <div key={l} className="stat"><span className="stat__num accent">{n}</span><span className="stat__label">{l}</span></div>
              ))}
            </div>
          </motion.div>
          <motion.div className="about__skills" variants={fadeUp}>
            {Object.entries(CONFIG.skills).map(([cat,items]) => {
              const Icon = skillIcons[cat]||Cpu
              return (
                <div className="skill-group" key={cat}>
                  <div className="skill-group__head"><Icon size={15}/>{cat}</div>
                  <div className="skill-group__tags">
                    {items.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function Projects() {
  const {repos, loading} = useGitHubRepos(CONFIG.github)
  const hasGhRepos = repos.length > 0

  return (
    <section id="projects" className="section projects">
      <motion.div className="section__inner" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}}>
        <motion.p className="section__label" variants={fadeUp}>Work</motion.p>
        <motion.h2 className="section__title" variants={fadeUp}>Featured Projects</motion.h2>

        {/* Highlighted Projects from Resume */}
        <motion.div className="projects__featured" variants={stagger}>
          {CONFIG.projects.map((p,i) => (
            <motion.div key={i} className="project-featured" variants={fadeUp} whileHover={{y:-4}} 
              onClick={() => window.open(p.live || p.github, '_blank')}
              style={{ cursor: 'pointer' }}>
              <div className="project-featured__header">
                <div>
                  <h3 className="project-featured__name">{p.name}</h3>
                  <span className="project-featured__date"><Calendar size={12}/> {p.date}</span>
                </div>
                <div className="project-featured__links">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer"><Github size={16}/></a>}
                  {p.live   && <a href={p.live}   target="_blank" rel="noreferrer"><ExternalLink size={16}/></a>}
                </div>
              </div>
              <p className="project-featured__desc">{p.desc}</p>
              <div className="project-featured__tech">
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Live GitHub Repos */}
        {!loading && hasGhRepos && (
          <>
            <motion.p className="section__sub" variants={fadeUp} style={{marginTop:'3rem'}}>
              More from <a href={`https://github.com/${CONFIG.github}`} target="_blank" rel="noreferrer" className="accent-link"><Github size={13}/> GitHub</a>
            </motion.p>
            <motion.div className="projects__grid" variants={stagger}>
              {repos.map(repo => (
                <motion.div key={repo.id} className="project-card" variants={fadeUp} whileHover={{y:-5}}
                  onClick={() => window.open(repo.homepage || repo.html_url, '_blank')}
                  style={{ cursor: 'pointer' }}>
                  <div className="project-card__top">
                    <Code2 size={18} style={{color:'var(--accent)',opacity:0.7}}/>
                    <div className="project-card__links">
                      <a href={repo.html_url} target="_blank" rel="noreferrer"><Github size={15}/></a>
                      {repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer"><ExternalLink size={15}/></a>}
                    </div>
                  </div>
                  <h3 className="project-card__name">{repo.name.replace(/-/g,' ')}</h3>
                  <p className="project-card__desc">{repo.description||'No description provided.'}</p>
                  <div className="project-card__footer">
                    {repo.language && <span className="lang"><span className="lang__dot" style={{background:langColors[repo.language]||'#888'}}/>{repo.language}</span>}
                    <span className="meta"><Star size={12}/>{repo.stargazers_count}</span>
                    <span className="meta"><GitFork size={12}/>{repo.forks_count}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        <motion.div className="projects__more" variants={fadeUp}>
          <a href={`https://github.com/${CONFIG.github}?tab=repositories`} target="_blank" rel="noreferrer" className="btn btn--ghost">
            All Repositories <ArrowUpRight size={15}/>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section experience">
      <motion.div className="section__inner" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}}>
        <motion.p className="section__label" variants={fadeUp}>Background</motion.p>
        <motion.h2 className="section__title" variants={fadeUp}>Experience & Education</motion.h2>
        <div className="timeline">
          {CONFIG.experience.map((exp,i) => (
            <motion.div key={i} className="timeline__item" variants={fadeUp}>
              <div className="timeline__dot"/>
              <div className="timeline__content">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <span className="timeline__company accent">{exp.company}</span>
                  </div>
                  <span className="timeline__period"><Calendar size={13}/>{exp.period}</span>
                </div>
                <p className="timeline__desc">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
          <motion.div className="timeline__item" variants={fadeUp}>
            <div className="timeline__dot timeline__dot--edu"/>
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{CONFIG.education.degree}</h3>
                  <span className="timeline__company accent">{CONFIG.education.university}</span>
                </div>
                <span className="timeline__period"><Award size={13}/> CGPA {CONFIG.education.cgpa}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section certs">
      <motion.div className="section__inner" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}}>
        <motion.p className="section__label" variants={fadeUp}>Credentials</motion.p>
        <motion.h2 className="section__title" variants={fadeUp}>Certifications</motion.h2>
        <motion.div className="certs__grid" variants={stagger}>
          {CONFIG.certifications.map((c,i) => (
            <motion.div key={i} className="cert-card" variants={fadeUp} whileHover={{y:-3,borderColor:'rgba(110,255,194,0.35)'}}>
              <Award size={16} className="cert-card__icon"/>
              <div>
                <p className="cert-card__name">{c.name}</p>
                <p className="cert-card__org">{c.org}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <motion.div className="section__inner contact__inner" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}}>
        <motion.p className="section__label" variants={fadeUp}>Contact</motion.p>
        <motion.h2 className="section__title" variants={fadeUp}>Let's build something together</motion.h2>
        <motion.p className="contact__sub" variants={fadeUp}>
          I'm open to new opportunities, freelance work, and collaborations. Drop me a message and I'll get back to you within 24 hours.
        </motion.p>
        <motion.div className="contact__actions" variants={fadeUp}>
          <a href={`mailto:${CONFIG.email}`} className="btn btn--primary btn--lg"><Mail size={18}/> Say Hello</a>
          <a href={`https://linkedin.com/in/${CONFIG.linkedin}`} target="_blank" rel="noreferrer" className="btn btn--ghost btn--lg"><Linkedin size={18}/> LinkedIn</a>
        </motion.div>
        <motion.div className="contact__links" variants={fadeUp}>
          <a href={`https://github.com/${CONFIG.github}`} target="_blank" rel="noreferrer"><Github size={18}/> {CONFIG.github}</a>
          <a href={`mailto:${CONFIG.email}`}><Mail size={18}/> {CONFIG.email}</a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>Designed & built by <span className="accent">Karthik Reddy</span></span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Cursor/>
      <Navbar sections={['about','projects','experience','certifications','contact']}/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Certifications/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
