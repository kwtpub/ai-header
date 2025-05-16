import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const aboutSections = [
  {
    title: 'Tyler Lab line',
    text: 'Экспериментальные вещи прямиком из нашей лаборатории. Команда бренда уделяет особое внимание обработке тканей, поиску новых способов окрашивания. Одежда из данной линейки строго ограничена по количеству.',
  },
  {
    title: 'Active line',
    text: 'Одежда для диких условий. Ваши увлечения — в наших интересах. Делаем технологичную одежду, чтобы быть заряженными покорить любую высоту.',
  },
  {
    title: 'Classic line',
    text: 'Классические вещи бренда, сочетающие технологичность и минимализм.',
  },
];

const archiveProducts = [
  {
    id: 1,
    name: 'Beta AR Jacket',
    price: '45 000 ₽',
    image: 'https://www.tradeinn.com/f/13686/136863479/arc-teryx-beta-ar-jacket.webp',
    category: 'Куртки',
    section: 'LAB',
  },
  {
    id: 2,
    name: 'Alpha SV Jacket',
    price: '65 000 ₽',
    image: 'https://peakstore.ru/upload/resize_cache/trk_iblock_img/674/917_917_1/6746aee5c5b4f347da80aea85796986e.jpg',
    category: 'Куртки',
    section: 'Инновации',
  },
  {
    id: 3,
    name: 'Gamma LT Hoody',
    price: '35 000 ₽',
    image: 'https://peakstore.ru/upload/resize_cache/trk_iblock_img/74c/917_917_1/74c58d0740b8c33594d295bae0405a42.jpg',
    category: 'Куртки',
    section: 'Материалы',
  },
  {
    id: 4,
    name: 'Gamma LT Hoody',
    price: '35 000 ₽',
    image: 'https://peakstore.ru/upload/resize_cache/trk_iblock_img/74c/917_917_1/74c58d0740b8c33594d295bae0405a42.jpg',
    category: 'Куртки',
    section: 'LAB',
  },
];

const AboutPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = archiveProducts.length;
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafffb]">
      <Header />
      <main className="flex-grow pt-[65px]">
        <section className="container mx-auto px-2 sm:px-4 py-8 sm:py-20 flex flex-col items-center">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-mono font-bold text-black text-center mb-4 uppercase tracking-tight">Tyler Thompson</h1>
          <div className="w-10 h-0.5 sm:w-16 sm:h-1 bg-[#556b2f] mb-8" />
          <p className="text-xs xs:text-sm sm:text-base font-mono text-black opacity-80 max-w-2xl mx-auto leading-relaxed text-center mb-10">
            Tyler Thompson — технологичная, функциональная и практичная одежда для тех, кто выбирает свободу и независимость. Мы создаём вещи для экстремальных условий, уделяя внимание деталям, инновациям и качеству. Свобода. Инновации. Дисциплина. Tyler Thompson — идти до конца.
          </p>
        </section>
        <section className="container mx-auto px-2 sm:px-4 pb-8 sm:pb-16 flex flex-col items-center">
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch bg-white">
            {/* Фото сверху на мобиле, слева на десктопе */}
            <div className="flex items-center justify-center bg-[#f3f4f6] order-1 md:order-none w-full">
              <img
                src={archiveProducts[currentIndex].image}
                alt={archiveProducts[currentIndex].name}
                className="w-full h-auto object-cover object-center select-none"
                draggable={false}
              />
            </div>
            {/* Текст снизу на мобиле, справа на десктопе */}
            <div className="flex flex-col justify-center px-0 md:px-6 py-4 md:py-0 order-2 md:order-none">
              <div className="mb-4 text-center md:text-left">
                <span className="block text-xs font-mono text-black opacity-60 mb-2">{archiveProducts[currentIndex].category}</span>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-mono font-bold text-black mb-2 uppercase tracking-wide">{archiveProducts[currentIndex].name}</h2>
                <div className="text-lg xs:text-xl sm:text-2xl font-mono font-thin text-black mb-4">{archiveProducts[currentIndex].price}</div>
                <p className="text-xs sm:text-sm font-mono text-black opacity-80 leading-relaxed">
                  Tyler Thompson — технологичная, функциональная и практичная одежда для тех, кто выбирает свободу и независимость. Мы создаём вещи для экстремальных условий, уделяя внимание деталям, инновациям и качеству.
                </p>
              </div>
              <div className="mt-4 md:mt-8 flex justify-center md:justify-start items-center">
                <button
                  onClick={prevSlide}
                  className="inline-block mr-4 text-[#556b2f] font-mono font-bold text-lg hover:underline focus:outline-none"
                  aria-label="Предыдущий"
                >
                  ←
                </button>
                <span className="font-mono text-xs sm:text-sm text-black opacity-70">
                  {currentIndex + 1} of {total}
                </span>
                <button
                  onClick={nextSlide}
                  className="inline-block ml-4 text-[#556b2f] font-mono font-bold text-lg hover:underline focus:outline-none"
                  aria-label="Следующий"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex flex-col items-center mt-8 sm:mt-20">
          <div className="w-full max-w-2xl border-t border-[#556b2f] pt-4 pb-7 sm:pt-8 sm:pb-14 bg-transparent">
            <p className="text-center font-sans italic font-medium text-black text-xs xs:text-sm sm:text-lg tracking-wider select-none leading-snug break-words px-2">
              Свобода. Инновации. Дисциплина.<br className="hidden xs:block" />Tyler Thompson — идти до конца.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 