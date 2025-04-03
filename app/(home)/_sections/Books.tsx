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
      url: 'https://www.amazon.de/Amazing-Grace-wundersame-Leben-Verlegers/dp/3038481254/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1CFCBZ8EUXUY8&dib=eyJ2IjoiMSJ9.MrdzvVBOfxNavEG8Lzk9nAzbrA1e-CYkMNcqK0iDLNzyC7zUFyTgaLIT8U3yraH5b7OCMjPiss9GASadJy32OJq13Sedlu8MuSIy7bLzLSNxY16vkXum_sVqkl-sTxmCFcRNBkPv3WFXgb-67BSUG2h6KQ9b098Ym0LjZQ28EieNtpz4O266pdjaWx9U-PX1QsJJPHA7sBPDFA9P8oXMnadQNstBx2Nu-ghpxeSxfGQ.zY7oZf3tyVvU_txB33xKqMIJfeq6Ff5dqSDN_SNgqSM&dib_tag=se&keywords=amazing+grace+gerth&qid=1743716171&sprefix=amazing+grace+gerth%2Caps%2C74&sr=8-1',
    },
    {
      id: 3,
      slug: 'himmel-auf-erden2',
      title: 'Himmel auf Erden2',
      image_url: '/images/03.png',
      description: 'Wie das DIA-Prinzip dein Leben verändern wird',
      url: 'https://www.amazon.de/Himmel-auf-Erden-DIA-Prinzip-ver%C3%A4ndern/dp/3952597902/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2TCAZLBMXDF8N&dib=eyJ2IjoiMSJ9.dX_vvhFwE_UOE359FrAaUmdV2Q6YCW8gM762FMFPTi3GjHj071QN20LucGBJIEps.9vDQcnA6o4rooYVHychj35P7HqkcKDQqFX9PPNZHk30&dib_tag=se&keywords=himmel+auf+erden+klaus+gerth&qid=1743716201&sprefix=himmel+auf+erden+klaus+gerth%2Caps%2C73&sr=8-1',
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
    <section id="booksection" className="relative z-50 w-full">
      <BookCarousel2 products={products} />
    </section>
  );
};

export default Books;
