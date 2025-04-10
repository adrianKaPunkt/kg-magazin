import Navbar from './_components/nav/Navbar';
import Hero from './_sections/Hero';
import About from './_sections/About';
import Dia from './_sections/Dia';
import MyLife from './_sections/MyLife';
import Amazing from './_sections/Amazing';
import Grace from './_sections/Grace';
// import Books from './_sections/Books';

export default function Home() {
  return (
    <>
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <div className="h-32 bg-linear-to-b from-white to-black mt-40" />
        <Dia />
        <div className="h-32 bg-linear-to-t from-white to-black" />
        <MyLife />
        <Amazing />
        <Grace />
        {/* <Books /> */}
      </main>
    </>
  );
}
