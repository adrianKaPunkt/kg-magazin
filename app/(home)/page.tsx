import About from './_sections/About';
import DIAPrincip from './_sections/DIAPrincip';
import Hero from './_sections/Hero';
import Navbar from './_components/nav/Navbar';
import MyLife from './_sections/MyLife';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <DIAPrincip />
      <MyLife />
    </main>
  );
}
