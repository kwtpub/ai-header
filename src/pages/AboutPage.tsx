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
                <p className="text-xs xs:text-sm sm:text-base font-mono text-black opacity-80 max-w-xs sm:max-w-md mx-auto leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 