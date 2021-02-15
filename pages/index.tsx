import React from 'react';
import About from '../src/components/about';
import Contact from '../src/components/contact';
import Cover from '../src/components/cover';
import Footer from '../src/components/footer';
import Header from '../src/components/header';
import Projects from '../src/components/projects';

export default function Home() {
  return (
    <div>
      <Cover />
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
