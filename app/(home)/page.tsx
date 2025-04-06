import Hero from './_sections/Hero';
import About from './_sections/About';
import Dia from './_sections/Dia';
import Navbar from './_components/nav/Navbar';
import MyLife from './_sections/MyLife';
import Amazing from './_sections/Amazing';
import Books from './_sections/Books';

export default function Home() {
  return (
    <>
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <div className="h-[400px]"></div>
        <Dia />
        {/* <DreamSection /> */}
        <MyLife />
        <Amazing />
        {/* <Grace /> */}
        <Books />
      </main>
    </>
  );
}
