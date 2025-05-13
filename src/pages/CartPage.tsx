import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryMethod, setDeliveryMethod] = useState('courier');

  return (
    <div className="min-h-screen flex flex-col bg-[#fafffb]">
      <Header />
      <main className="flex-grow pt-[65px]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cart Items Section */}
            <div>
              <h2 className="text-xl font-mono font-bold text-black mb-6">Корзина</h2>
              <div className="space-y-4">
                {/* Cart Item */}
                <div className="flex items-center gap-6 p-0 border-b border-[#e5e7eb] last:border-b-0">
                  <img
                    src="https://www.tradeinn.com/f/13686/136863479/arc-teryx-beta-ar-jacket.webp"
                    alt="Beta AR Jacket"
                    className="w-24 h-24 object-cover object-center bg-[#f3f4f6]"
                  />
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-4 min-w-0">
                      <h3 className="font-mono font-bold text-black text-base truncate">Beta AR Jacket</h3>
                      <span className="font-mono text-xs text-black opacity-60 mt-1 md:mt-0">Куртки</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <button className="w-8 h-8 font-mono font-bold text-black border border-[#556b2f] bg-transparent hover:bg-[#fafffb] active:bg-[#f3f4f6] transition-colors">-</button>
                      <span className="w-8 text-center font-mono font-bold text-black">1</span>
                      <button className="w-8 h-8 font-mono font-bold text-black border border-[#556b2f] bg-transparent hover:bg-[#fafffb] active:bg-[#f3f4f6] transition-colors">+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end min-w-[80px]">
                    <span className="font-mono font-bold text-black text-base">45 000 ₽</span>
                    <button className="text-xs font-mono text-[#556b2f] hover:text-[#445429] mt-2 transition-colors">Удалить</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-8 border-t border-[#e5e7eb] pt-6">
                <span className="font-mono font-bold text-black text-lg">Итого</span>
                <span className="font-mono font-bold text-black text-xl">45 000 ₽</span>
              </div>
            </div>

            {/* Checkout Form Section */}
            <form className="bg-transparent p-0 space-y-6">
              <h2 className="text-xl font-mono font-bold text-black mb-6">Оформление заказа</h2>
              <div>
                <label className="block text-xs font-mono font-bold text-black mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-[#e5e7eb] focus:border-[#556b2f] focus:outline-none font-mono text-black placeholder-gray-400 transition-colors"
                  placeholder="ваш@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-black mb-2">Telegram</label>
                <input
                  type="text"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-[#e5e7eb] focus:border-[#556b2f] focus:outline-none font-mono text-black placeholder-gray-400 transition-colors"
                  placeholder="@username"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-black mb-2">Способ доставки</label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="delivery"
                      value="courier"
                      checked={deliveryMethod === 'courier'}
                      onChange={() => setDeliveryMethod('courier')}
                      className="accent-[#556b2f] w-5 h-5 mr-2"
                    />
                    <span className="font-mono text-black text-sm">Курьер</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={deliveryMethod === 'pickup'}
                      onChange={() => setDeliveryMethod('pickup')}
                      className="accent-[#556b2f] w-5 h-5 mr-2"
                    />
                    <span className="font-mono text-black text-sm">Пункт выдачи</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-black mb-2">Способ оплаты</label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="accent-[#556b2f] w-5 h-5 mr-2"
                    />
                    <span className="font-mono text-black text-sm">Карта</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="accent-[#556b2f] w-5 h-5 mr-2"
                    />
                    <span className="font-mono text-black text-sm">PayPal</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-4 py-3 font-mono font-bold text-black border border-[#556b2f] bg-[#fafffb] hover:bg-[#556b2f] hover:text-white transition-colors duration-200 uppercase tracking-widest"
              >
                Оформить заказ
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage; 