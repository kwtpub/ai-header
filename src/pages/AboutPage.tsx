import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../components/Catalog';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafffb]">
      <Header />
      <main className="flex-grow pt-[65px]">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="mb-8">
            <span className="text-3xl font-mono font-bold text-black tracking-tight">Tyler Thompson</span>
          </div>
          <h1 className="text-2xl font-mono font-bold text-black mb-8">О бренде</h1>
          <p className="font-mono text-black text-base mb-6 opacity-80">
            Arc'teryx — это канадский бренд, известный своим инновационным подходом к созданию одежды и снаряжения для экстремальных условий. Компания основана в 1989 году в Ванкувере и с самого начала делает ставку на технологичность, минимализм и безупречное качество.
          </p>
          <p className="font-mono text-black text-base mb-6 opacity-80">
            Символ бренда — Archaeopteryx lithographica, древнейшая известная птица, олицетворяет эволюцию, прогресс и стремление к совершенству. Вся продукция Arc'teryx разрабатывается с учётом реальных потребностей альпинистов, скалолазов и любителей outdoor-активностей.
          </p>
          <p className="font-mono text-black text-base mb-6 opacity-80">
            Отличительные черты: лаконичный дизайн, строгие линии, современные материалы, внимание к деталям и максимальная функциональность. Arc'teryx — выбор профессионалов и всех, кто ценит надёжность и стиль в любой среде.
          </p>
        </div>
        <section className="container mx-auto px-4 pb-12 max-w-5xl">
          <h2 className="text-xl font-mono font-bold text-black mb-6">Примеры продукции Arc'teryx</h2>
          <Catalog />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 