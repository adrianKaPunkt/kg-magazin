import About from './_sections/About';
import DIAPrincip from './_sections/DIAPrincip';
import Hero from './_sections/Hero';
import Navbar from './_components/nav/Navbar';
import MyLife from './_sections/MyLife';
import Amazing from './_sections/Amazing';
import Grace from './_sections/Grace';
import Books from './_sections/Books';
// import Grace from './_sections/Grace';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <DIAPrincip />
      <MyLife />
      <Amazing />
      <Grace />
      <Books />
    </main>
  );
}
