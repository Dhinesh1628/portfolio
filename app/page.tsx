import Header from './components/Header';
import SocialRail from './components/SocialRail';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <SocialRail />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Research />
        <Contact />
      </main>
    </>
  );
}
