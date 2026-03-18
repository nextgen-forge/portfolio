import { useEffect, useRef, useState } from 'react';
import { CONFIG } from '../config';
import styles from './Skills.module.css';

const techMarquee = [
  'React', 'Node.js', 'TypeScript', 'Python', 'Docker', 'AWS', 'PostgreSQL',
  'MongoDB', 'GraphQL', 'Next.js', 'Redis', 'Git', 'Linux', 'Figma', 'Go',
  'React', 'Node.js', 'TypeScript', 'Python', 'Docker', 'AWS', 'PostgreSQL',
  'MongoDB', 'GraphQL', 'Next.js', 'Redis', 'Git', 'Linux', 'Figma', 'Go',
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <span className={styles.label}>Toolkit</span>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            Technologies I've been working with throughout my career
          </p>
        </div>

        <div className={styles.grid}>
          {CONFIG.skills.map((group, i) => (
            <div
              key={group.category}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.items}>
                {group.items.map(skill => (
                  <li key={skill} className={styles.skill}>
                    <span className={styles.skillDot} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Tech marquee */}
      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marquee}>
          {techMarquee.map((tech, i) => (
            <span key={i} className={styles.marqueeItem}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
