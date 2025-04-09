'use client';

import Link from 'next/link';
import styles from './BookCarousel.module.css';
import { useState, useEffect } from 'react';

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
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTouch, setIsTouch] = useState(false); // ✅ Verhindert gleichzeitiges Mouse+Touch

  // Automatische Drehung pausieren, wenn Benutzer zieht
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setRotation((prev) => prev + 0.2);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  // 🖱️ Mouse Events für Desktop (nur wenn nicht Touch aktiv)
  const handleMouseDown = (event: React.MouseEvent) => {
    if (isTouch) return; // ✅ Verhindert Maus-Events, wenn Touch erkannt wurde
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || isTouch) return;
    const delta = event.clientX - startX;
    setDragOffset(delta * 0.05);
  };

  const handleMouseUp = () => {
    if (isTouch) return;
    setIsDragging(false);
    setRotation((prev) => prev + dragOffset);
    setDragOffset(0);
  };

  // 📱 Touch Events für Mobile (mit höherer Sensibilität)
  const handleTouchStart = (event: React.TouchEvent) => {
    setIsTouch(true);
    setIsDragging(true);
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = event.touches[0].clientX - startX;
    setDragOffset(delta * 0.1);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setRotation((prev) => prev + dragOffset);
    setDragOffset(0);
  };

  return (
    <div
      className="h-screen flex mt-96 sm:pt-36 justify-center overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <div
        className={styles['carousel-container']}
        style={{ perspective: '1200px' }}>
        <div
          className={styles.carousel}
          style={{
            transform: `rotateX(-10deg) rotateY(${rotation + dragOffset}deg)`,
          }}>
          {products.map((book, index) => {
            const angle = (360 / products.length) * index;
            return (
              <div
                key={book.id}
                className={styles.bookWrapper}
                style={{ transform: `rotateY(${angle}deg) translateZ(250px)` }}>
                <Link
                  href={book.url}
                  className={`${styles.bookFront} hover:scale-110`}
                  style={{
                    backgroundImage: `url(${
                      book.image_url || '/fallback-image.jpg'
                    })`,
                    backgroundSize: 'cover',
                  }}
                />
                <div
                  className={styles.bookBack}
                  style={{
                    backgroundImage: `url(${
                      book.image_url || '/fallback-image.jpg'
                    })`,
                    backgroundSize: 'cover',
                  }}
                />
                <div
                  className={styles.bookReflection}
                  style={{
                    backgroundImage: `url(${
                      book.image_url || '/fallback-image.jpg'
                    })`,
                    backgroundSize: 'cover',
                  }}
                />
                <div className={styles.bookBackReflection} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
