import { useLayoutEffect, useRef, type AnchorHTMLAttributes } from "react";
import {
  SiGithub,
  SiGmail,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWhatsapp,
  SiX,
} from "react-icons/si";
import { startMotion } from "./motion";

function Ext(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noreferrer" />;
}

const tools = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind", icon: SiTailwindcss },
];

export function App() {
  const page = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!page.current) return;
    return startMotion(page.current);
  }, []);

  return (
    <div className="page" ref={page}>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            Emmy D West
          </a>
          <nav aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="wrap">
        <div className="bento">
          <article className="card identity s4">
            <div className="who">
              <img
                className="pfp-inline"
                src="/images/emmy.webp"
                alt="Illustrated portrait from Emmy D West’s X profile"
                width={400}
                height={400}
              />
              <div>
                <h1 className="mask">
                  <span>Emmy D West</span>
                </h1>
                <p className="legal">Emmanuel Ebipador Kalama</p>
              </div>
            </div>
            <p className="lede">
              Full-stack developer in Lagos, and founder of Ashabi, an African comics platform.
            </p>
            <div className="actions">
              <a className="btn neu" href="#work">
                See the work
              </a>
              <Ext className="btn neu" href="https://ashabi.cloud">
                Open Ashabi
              </Ext>
            </div>
            <div className="icon-row" aria-label="Profiles">
              <Ext href="https://github.com/emmydwest" aria-label="GitHub">
                <SiGithub />
              </Ext>
              <Ext href="https://x.com/EmmyDWest" aria-label="X, @EmmyDWest">
                <SiX />
              </Ext>
              <Ext href="https://wa.me/2349048964270" aria-label="WhatsApp">
                <SiWhatsapp />
              </Ext>
              <a href="mailto:emmydwest167@gmail.com" aria-label="Email">
                <SiGmail />
              </a>
            </div>
          </article>

          <article className="card portrait s2">
            <img
              src="/images/emmy.webp"
              alt="Illustrated portrait from Emmy D West’s X profile"
              width={400}
              height={400}
            />
            <p>Lagos, Nigeria</p>
            <p>Founder of Ashabi</p>
          </article>

          <figure className="card banner s6 reveal">
            <div className="banner-frame">
              <div className="banner-shift">
                <img
                  src="/images/banner.webp"
                  alt="Homepage of Project Ashabi, the comics platform Emmy founded"
                  width={1200}
                  height={467}
                />
              </div>
            </div>
            <figcaption>Project Ashabi, the live site</figcaption>
          </figure>

          <section id="work" className="s6 work-head" aria-labelledby="work-title">
            <h2 id="work-title">Work</h2>
          </section>

          <article className="card project reveal s4">
            <div className="shot-frame">
              <img
                className="shot"
                src="/images/ashabi.webp"
                alt="Ashabi page showing the four stages and the mission"
                width={1200}
                height={750}
              />
            </div>
            <div className="project-copy">
              <h3>Ashabi</h3>
              <p>
                An African-founded platform for comics, webtoons, graphic novels, and serialized
                fiction. It is a founder’s edition from Lagos, still in active development.
                Titles shown through a third-party integration are demonstration content, not
                Ashabi Originals.
              </p>
              <Ext className="btn neu" href="https://ashabi.cloud">
                Open Ashabi
              </Ext>
            </div>
          </article>

          <article className="card project reveal s2">
            <div className="shot-frame">
              <img
                className="shot"
                src="/images/retro.webp"
                alt="Retro OS 95 desktop with Notepad, a calculator, and display settings"
                width={1200}
                height={750}
              />
            </div>
            <div className="project-copy">
              <h3>Retro OS 95</h3>
              <p>
                A 1990s desktop in the browser. Windows move and resize with mouse and touch.
                Notepad, a calculator, themes, CRT scanlines, and Web Audio sounds are built in.
              </p>
              <Ext className="btn brutal" href="https://github.com/emmydwest/retro-os-95">
                Repository
              </Ext>
            </div>
          </article>

          <article className="card about s4 reveal" id="about">
            <h2>About</h2>
            <p>
              Emmy D West is the name Emmanuel Ebipador Kalama uses as a full-stack developer in
              Lagos, Nigeria. He founded Ashabi. The public site is a founder’s edition in active
              development.
            </p>
            <p>
              Retro OS 95, his other public project, is a browser desktop built with TypeScript,
              React, and Vite. The portrait on this page is the one published on his X profile.
            </p>
          </article>

          <blockquote className="card quote s2 reveal">
            <p>
              Ashabi is being built because we believe African creativity deserves the opportunity
              to reach the world on its own terms.
            </p>
            <footer>Founder message, ashabi.cloud</footer>
          </blockquote>

          <section className="card tools s6 reveal" aria-labelledby="tools-title">
            <h2 id="tools-title">Tools in the public work</h2>
            <ul>
              {tools.map(({ name, icon: Icon }) => (
                <li key={name} className="tag">
                  <Icon aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </section>

          <section className="card contact s6" id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title">Contact</h2>
            <ul>
              <li>
                <Ext href="https://github.com/emmydwest">
                  <SiGithub aria-hidden="true" />
                  <span>GitHub</span>
                  <span className="meta">github.com/emmydwest</span>
                </Ext>
              </li>
              <li>
                <Ext href="https://x.com/EmmyDWest">
                  <SiX aria-hidden="true" />
                  <span>X</span>
                  <span className="meta">@EmmyDWest</span>
                </Ext>
              </li>
              <li>
                <Ext href="https://wa.me/2349048964270">
                  <SiWhatsapp aria-hidden="true" />
                  <span>WhatsApp</span>
                  <span className="meta">+234 904 896 4270</span>
                </Ext>
              </li>
              <li>
                <a href="mailto:emmydwest167@gmail.com">
                  <SiGmail aria-hidden="true" />
                  <span>Email</span>
                  <span className="meta">emmydwest167@gmail.com</span>
                </a>
              </li>
            </ul>
            <p className="foot">Lagos, Nigeria</p>
          </section>
        </div>
      </main>

      <nav className="dock" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
