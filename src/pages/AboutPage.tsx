import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const aboutSections = [
  {
    number: '01',
    title: 'LAB',
    text: 'Экспериментальное пространство, где рождаются новые формы, материалы и технологии. Всё тестируется и совершенствуется до идеала.',
  },
  {
    number: '02',
    title: 'Инновации',
    text: 'Постоянный поиск новых решений, внедрение современных технологий обработки тканей и конструкций для максимального комфорта и защиты.',
  },
  {
    number: '03',
    title: 'Материалы',
    text: 'Только лучшие мембраны, технические ткани и фурнитура. Всё проходит испытания в реальных условиях для гарантии надёжности.',
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
  return (
    <div className="min-h-screen flex flex-col bg-[#fafffb]">
      <Header />
      <main className="flex-grow pt-[65px]">
        <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-20 flex flex-col items-center">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-mono font-bold text-black text-center mb-3 sm:mb-4 uppercase tracking-tight">Tyler Thompson LAB</h1>
          <div className="w-10 h-0.5 sm:w-16 sm:h-1 bg-[#556b2f] mb-8 sm:mb-20" />
          <div className="flex flex-col gap-7 sm:gap-12 w-full max-w-2xl">
            {aboutSections.map((section) => (
              <div key={section.number} className="flex flex-col items-center text-center">
                <span className="text-3xl xs:text-4xl sm:text-6xl font-mono font-bold text-[#556b2f] mb-1 sm:mb-2 select-none">{section.number}</span>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-mono font-bold text-black mb-2 sm:mb-3 uppercase tracking-wide">{section.title}</h2>
                <p className="text-xs xs:text-sm sm:text-base font-mono text-black opacity-80 max-w-xs sm:max-w-md mx-auto leading-relaxed mb-4">{section.text}</p>
                <div className="w-full">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                    {archiveProducts.filter((p) => p.section === section.title).map((product) => (
                      <div key={product.id} className="group">
                        <div className="relative overflow-hidden bg-white rounded-none border border-[#e5e7eb]">
                          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-2 sm:p-3">
                            <h3 className="text-xs sm:text-base font-mono font-bold text-black mb-1 truncate">{product.name}</h3>
                            <p className="text-[10px] sm:text-xs font-mono text-black opacity-60 mb-1 truncate">{product.category}</p>
                            <span className="text-xs sm:text-base font-mono font-thin text-black">{product.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-2 sm:px-4 pb-8 sm:pb-16">
          <h2 className="text-xl sm:text-2xl font-mono font-bold text-black mb-6 sm:mb-10 text-center uppercase tracking-wide">Архив вещей</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {archiveProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden bg-white rounded-none border border-[#e5e7eb]">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="text-xs sm:text-base font-mono font-bold text-black mb-1 truncate">{product.name}</h3>
                    <p className="text-[10px] sm:text-xs font-mono text-black opacity-60 mb-1 truncate">{product.category}</p>
                    <span className="text-xs sm:text-base font-mono font-thin text-black">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
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