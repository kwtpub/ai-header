import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WaitlistPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafffb]">
      <Header />
      <main className="flex-grow pt-[65px]">
        <div className="container mx-auto px-4 py-12 max-w-md">
          <h1 className="text-2xl font-mono font-bold text-black mb-8">Tyler Thompson Waitlist</h1>
          {submitted ? (
            <div className="font-mono text-black text-lg">Спасибо! Вы добавлены в лист ожидания.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="font-mono text-black text-sm mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-transparent border-b border-[#556b2f] focus:border-black outline-none font-mono text-black py-2 px-0 placeholder:text-gray-400 transition-colors"
                placeholder="your@email.com"
              />
              <button
                type="submit"
                className="mt-4 px-4 py-2 font-mono text-black border border-[#556b2f] hover:border-black transition-colors bg-transparent focus:outline-none"
              >
                Встать в лист ожидания
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WaitlistPage; 