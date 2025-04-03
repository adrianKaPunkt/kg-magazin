'use client';

import Link from 'next/link';
import styles from './BookCarousel.module.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BookCarouselProps {
  products: {
    id: number;
    slug: string;
    image_url: string;
    description: string;
    url: string;
  }[];
}

export default function BookCarousel({ products }: BookCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const productCount = products.length;

  useEffect(() => {
    if (!carouselRef.current || productCount === 0) return;

    // 🛑 Vorherige ScrollTrigger entfernen, um Fehler zu vermeiden
    if (triggerRef.current) {
      triggerRef.current.kill();
      triggerRef.current = null;
    }

    // 🚀 Rotation mit Scroll synchronisieren
    const rotationTween = gsap.to(carouselRef.current, {
      rotationY: '+=720',
      ease: 'none', // Änderung zu 'none' für gleichmäßigere Rotation
      duration: 5,
      scrollTrigger: {
        trigger: '.carousel-section',
        start: 'top top',
        end: '+=300%',
        scrub: true, // Änderung zu true für direktere Kontrolle
        pin: true,
        snap: {
          snapTo: 0.5 / products.length, // Snap zu Bruchteilen der Gesamtrotation
          duration: { min: 0.2, max: 0.5 }, // Kürzere Snap-Dauer
          ease: 'power1.inOut', // Sanftere Ease-Funktion
          inertia: false, // Deaktiviert Trägheitseffekt
        },
      },
    });

    triggerRef.current = ScrollTrigger.getById('carouselTrigger') ?? null;

    return () => {
      rotationTween.kill();
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
    };
  }, [productCount, products.length]);

  return (
    <div id="book-carousel">
      <section className="carousel-section relative w-full h-[200vh] overflow-hidden">
        <div className="sticky top-44 left-0 w-full flex justify-center items-center">
          <div
            className={styles['carousel-container']}
            style={{ perspective: '1200px' }}>
            <div ref={carouselRef} className={styles.carousel}>
              {products.map((book, index) => {
                const angle = (360 / productCount) * index;
                return (
                  <div
                    key={book.id}
                    className={styles.bookWrapper}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(250px)`,
                    }}>
                    <Link
                      href={book.url}
                      className={`${styles.bookFront} hover:scale-110`}
                      style={{
                        backgroundImage: `url(${
                          book.image_url || '/images/placeholder.png'
                        })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div
                      className={styles.bookBack}
                      style={{
                        backgroundImage: `url(${
                          book.image_url || '/images/placeholder.png'
                        })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div
                      className={styles.bookReflection}
                      style={{
                        backgroundImage: `url(${
                          book.image_url || '/images/placeholder.png'
                        })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.5,
                      }}
                    />
                    <div
                      className={styles.bookBackReflection}
                      style={{
                        opacity: 0.2,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
