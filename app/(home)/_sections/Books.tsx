import BookCarousel2 from '../_components/books/BookCarousel2';

const Books = async () => {
  const products = [
    {
      id: 1,
      slug: 'himmel-auf-erden',
      title: 'Himmel auf Erden',
      image_url: '/images/01.jpg',
      description: 'Wie das DIA-Prinzip dein Leben verändern wird',
      url: 'https://bestselleroffice.com/products/himmel-auf-erden',
    },
    {
      id: 2,
      slug: 'amazing-grace',
      title: 'Amazing Grace',
      image_url: '/images/02.jpg',
      description: 'Amazing Grace',
      url: 'http://bestselleroffice.com/',
    },
    {
      id: 3,
      slug: 'himmel-auf-erden2',
      title: 'Himmel auf Erden2',
      image_url: '/images/03.png',
      description: 'Wie das DIA-Prinzip dein Leben verändern wird',
      url: 'https://bestselleroffice.com/products/himmel-auf-erden',
    },
    {
      id: 4,
      slug: 'himmel-im-herzen',
      title: 'Himmel im Herzen',
      image_url: '/images/04.png',
      description: 'Ein Himmel im Herzen',
      url: 'http://bestselleroffice.com/',
    },
  ];

  return (
    <section id="booksection" className="relative z-50 w-full h-screen mt-96">
      <BookCarousel2 products={products} />
    </section>
  );
};

export default Books;
