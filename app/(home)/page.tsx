import About from './_components/About';
import DIAPrincip from './_components/DIAPrincip';
import Hero from './_components/Hero';
import Navbar from './_components/nav/Navbar';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <DIAPrincip />
    </main>
  );
}
