import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  const productImages = [
    'https://www.tradeinn.com/f/13686/136863479/arc-teryx-beta-ar-jacket.webp',
    'https://www.tradeinn.com/f/13686/136863480/arc-teryx-beta-ar-jacket-2.webp',
    'https://www.tradeinn.com/f/13686/136863481/arc-teryx-beta-ar-jacket-3.webp',
    'https://www.tradeinn.com/f/13686/136863482/arc-teryx-beta-ar-jacket-4.webp',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafffb]">
      <Header />
      <main className="flex-grow pt-[65px]">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {/* Product Image Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative">
                <div className="overflow-hidden bg-[#f3f4f6] rounded-none border border-[#e5e7eb]">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                      src={productImages[currentImageIndex]}
                      alt="Beta AR Jacket"
                      className="w-full h-full object-cover object-center transition-transform duration-300"
                    />
                  </div>
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 text-black hover:text-[#556b2f] transition-colors duration-200 p-1 sm:p-0"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 text-black hover:text-[#556b2f] transition-colors duration-200 p-1 sm:p-0"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1 -mx-2 px-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative min-w-[56px] aspect-w-1 aspect-h-1 overflow-hidden rounded-none border border-[#e5e7eb] bg-[#f3f4f6]`}
                  >
                    <img
                      src={image}
                      alt={`Beta AR Jacket ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="p-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-black mb-2">Beta AR Jacket</h1>
              <p className="text-xs sm:text-sm font-mono text-black opacity-60 mb-3 sm:mb-4">Куртки</p>
              <div className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-black mb-6 sm:mb-8">45 000 ₽</div>

              {/* Size Selection */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xs font-mono font-bold text-black">Размер</h3>
                  <button
                    onClick={() => setIsSizeGuideOpen(!isSizeGuideOpen)}
                    className="text-xs font-mono font-bold text-[#556b2f] hover:text-[#445429] transition-colors"
                  >
                    Размерная сетка
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setIsSizeOpen(!isSizeOpen)}
                    className="w-full py-3 px-4 bg-transparent border border-[#e5e7eb] rounded-none text-left font-mono font-medium flex justify-between items-center text-black"
                  >
                    <span>{selectedSize || 'Выберите размер'}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${isSizeOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isSizeOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-[#e5e7eb] rounded-none shadow-lg">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => {
                            setSelectedSize(size);
                            setIsSizeOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left font-mono font-medium text-black hover:bg-[#f3f4f6] transition-colors ${selectedSize === size ? 'bg-[#f3f4f6]' : ''}`}
                          style={{ fontSize: '1rem' }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Size Guide Modal */}
                {isSizeGuideOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2">
                    <div className="bg-white rounded-none p-4 sm:p-6 max-w-2xl w-full mx-0 sm:mx-4 border border-[#e5e7eb]">
                      <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-mono font-bold text-black">Размерная сетка</h3>
                        <button
                          onClick={() => setIsSizeGuideOpen(false)}
                          className="text-gray-500 hover:text-black transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-[#e5e7eb]">
                              <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-mono font-bold text-black">Размер</th>
                              <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-mono font-bold text-black">Грудь (см)</th>
                              <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-mono font-bold text-black">Талия (см)</th>
                              <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-mono font-bold text-black">Бедра (см)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#e5e7eb]">
                              <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono">XS</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">86-91</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">71-76</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">86-91</td>
                            </tr>
                            <tr className="border-b border-[#e5e7eb]">
                              <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono">S</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">91-96</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">76-81</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">91-96</td>
                            </tr>
                            <tr className="border-b border-[#e5e7eb]">
                              <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono">M</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">96-101</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">81-86</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">96-101</td>
                            </tr>
                            <tr className="border-b border-[#e5e7eb]">
                              <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono">L</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">101-106</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">86-91</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">101-106</td>
                            </tr>
                            <tr className="border-b border-[#e5e7eb]">
                              <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono">XL</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">106-111</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">91-96</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">106-111</td>
                            </tr>
                            <tr>
                              <td className="py-2 sm:py-3 px-2 sm:px-4 font-mono">XXL</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">111-116</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">96-101</td>
                              <td className="py-2 sm:py-3 px-2 sm:px-4">111-116</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Add to Cart Button */}
              <button className="w-full py-3 sm:py-4 font-mono font-bold text-white border border-[#556b2f] bg-[#556b2f] hover:bg-[#445429] hover:border-[#445429] transition-colors duration-200 uppercase tracking-widest text-base sm:text-lg" style={{ minHeight: 48 }}>
                В корзину
              </button>

              {/* Product Description */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-xs font-mono font-bold text-black mb-2">Описание</h3>
                <p className="text-xs font-mono text-black opacity-80 leading-relaxed">
                  Куртка Beta AR — это универсальная горная куртка, которая обеспечивает защиту от дождя и ветра. Изготовлена из прочного материала GORE-TEX® с технологией Paclite®, что делает её легкой и компактной. Идеально подходит для альпинизма, скалолазания и других активных видов спорта.
                </p>
              </div>

              {/* Product Features */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-xs font-mono font-bold text-black mb-2">Характеристики</h3>
                <ul className="text-xs font-mono text-black opacity-80 space-y-1">
                  <li>• Материал: GORE-TEX® Paclite®</li>
                  <li>• Водонепроницаемость: 28,000 мм</li>
                  <li>• Дышащая способность: 28,000 г/м²/24ч</li>
                  <li>• Вес: 375 г</li>
                  <li>• Капюшон: регулируемый</li>
                  <li>• Карманы: 2 внешних, 2 внутренних</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage; 