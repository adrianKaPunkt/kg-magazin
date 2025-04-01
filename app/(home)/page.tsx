import About from './_components/About';
import DIAPrincip from './_components/DIAPrincip';
import Hero from './_components/Hero';
import Navbar from './_components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <DIAPrincip />
    </main>
  );
}
