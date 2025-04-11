'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
// import UserNavButton from './UserNavButton';
// import BasketButton from './BasketButton';
import AudioPlayer from './AudioPlayer';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
// import useBasketStore from '@/store/basket-store';
import { Button } from '@/components/ui/button';
import ImpressumModal from '../ImpressumModal';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const itemCount = useBasketStore((state) =>
  //   state.items.reduce((total, item) => total + item.quantity, 0)
  // );

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: 'http://www.bestselleroffice.com' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 absolute top-0 left-0 w-full px-2 sm:p-2 ${
        scrolled ? 'bg-gray-white' : 'shadow-none'
      }`}>
      <div className="">
        <div className="pl-4 flex justify-between items-center py-3">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <h1 className="text-2xl hover:text-gray-500">
                <span>KLAUS</span>
                <span className="font-extrabold">GERTH</span>
              </h1>
            </Link>
            <AudioPlayer src="/audio/music.mp3" />
          </div>

          {/* Mobile Menu Button (Hamburger/X) */}
          <div className="absolute top-5 right-5 z-50">
            <div className="flex flex-row-reverse gap-x-3 items-center">
              <button
                className="z-50 text-black hover:text-gray-500"
                onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
              {/* {!menuOpen && <BasketButton iconClassName="w-8 h-8" />} */}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-start items-center pt-20">
            <div className="relative w-full">
              <div className="flex justify-center -mt-4">
                {/* <UserNavButton /> */}
              </div>
            </div>

            <Link href="/">
              <h1 className="text-[40px] my-6">
                <span>
                  KLAUS<span className="font-extrabold">GERTH</span>
                </span>
              </h1>
            </Link>

            <ul>
              {navLinks.map((item) => (
                <li className="list-none text-center" key={item.name}>
                  <Link
                    href={item.path}
                    className="text-2xl font-semibold hover:text-gray-500 leading-[50px]"
                    onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* LANGUAGES */}
            <div className="flex mt-9">
              <Button variant={'ghost'}>de</Button>
              {'  |  '}
              <Button variant={'ghost'}>en</Button>
              {'  |  '}
              <Button variant={'ghost'}>es</Button>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="text-4xl mt-9 flex gap-x-7">
              <FaFacebook />
              <Link
                href="https://www.instagram.com/gerth.klaus/"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram />
              </Link>
              <FaYoutube />
              <FaTiktok />
            </div>

            {/* KLAUS INFO */}
            <div className="text-center mt-8">
              <a href="mailto:info@klausgerth.com">info@klausgerth.com</a>
            </div>

            {/* Impressum & Copyright */}
            <div className="mt-4 text-center">
              <ImpressumModal />{' '}
              {/* Impressum öffnet sich unabhängig von Navbar */}
              <p className="text-xs mt-4">
                © {new Date().getFullYear()} klausgerth.com. Alle Rechte
                vorbehalten
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
