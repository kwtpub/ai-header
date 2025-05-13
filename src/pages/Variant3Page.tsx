import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Catalog from '../components/Catalog';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[65px]">
        <div className="container mx-auto px-4 py-8">
          <Catalog />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;