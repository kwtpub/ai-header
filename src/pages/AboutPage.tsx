import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../components/Catalog';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafffb]">
      <Header />
      <main className="flex-grow pt-[65px]">
        <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 max-w-2xl">
          <div className="mb-8">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-black tracking-tight">Tyler Thompson</span>
          </div>
          <h1 className="text-2xl font-mono font-bold text-black mb-8">О бренде</h1>
          <div className="rounded-md sm:rounded-lg bg-[#556b2f] bg-opacity-10 border-l-4 border-[#556b2f] p-3 sm:p-4 mb-6 sm:mb-8">
            <p className="font-mono text-black text-base mb-2">
              Tyler Thompson – стильные и опасные.
            </p>
            <p className="font-mono text-black text-base opacity-80">
              Мы создаем технологичную, функциональную и практичную одежду для тех, кто выбирает свободу и независимость.
            </p>
          </div>
          <div className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-mono font-bold text-[#445429] mb-2">Наша философия</h2>
            <ul className="font-mono text-black text-sm sm:text-base space-y-1 pl-4 list-disc">
              <li><span className="font-bold">Свобода</span> – ты решаешь, как жить.</li>
              <li><span className="font-bold">Сила</span> – в характере и поступках.</li>
              <li><span className="font-bold">Единство</span> – когда мы вместе, мы сила.</li>
              <li><span className="font-bold">Дисциплина</span> – порядок важнее хаоса.</li>
            </ul>
            <p className="font-mono text-black text-sm sm:text-base mt-3 sm:mt-4 opacity-80">
              Tyler Thompson – бренд для тех, кто держит удар и идет до конца.
            </p>
          </div>
          <div className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-mono font-bold text-[#445429] mb-2">Линейки бренда</h2>
            <div className="rounded bg-[#556b2f] bg-opacity-10 p-3 sm:p-4 mb-3 sm:mb-4">
              <h3 className="font-mono font-bold text-black mb-1">01 Tyler Lab line</h3>
              <p className="font-mono text-black text-sm sm:text-base opacity-80">
                Экспериментальные вещи прямиком из нашей лаборатории. Особое внимание обработке тканей, поиску новых способов окрашивания. Одежда строго ограничена по количеству.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-block font-mono text-xs bg-[#556b2f] text-white px-2 py-1 rounded">Sweatshirt Cold Pigment Dyed Magnetic Patch</span>
              </div>
            </div>
            <div className="rounded bg-[#445429] bg-opacity-10 p-3 sm:p-4">
              <h3 className="font-mono font-bold text-black mb-1">02 Active line</h3>
              <p className="font-mono text-black text-sm sm:text-base opacity-80">
                Одежда для диких условий. Делаем технологичную одежду, чтобы быть заряженными покорить любую высоту.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-block font-mono text-xs bg-[#445429] text-white px-2 py-1 rounded">Ultra Jacket</span>
                <span className="inline-block font-mono text-xs bg-[#445429] text-white px-2 py-1 rounded">Ultra Jacket Creamy White</span>
              </div>
            </div>
          </div>
        </div>
        <section className="container mx-auto px-2 sm:px-4 pb-8 sm:pb-12 max-w-5xl">
          <h2 className="text-lg sm:text-xl font-mono font-bold text-black mb-4 sm:mb-6">Примеры продукции Tyler Thompson</h2>
          <Catalog />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 