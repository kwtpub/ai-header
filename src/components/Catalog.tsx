import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Beta AR Jacket',
    price: '45 000 ₽',
    image: 'https://www.tradeinn.com/f/13686/136863479/arc-teryx-beta-ar-jacket.webp',
    category: 'Куртки'
  },
  {
    id: 2,
    name: 'Alpha SV Jacket',
    price: '65 000 ₽',
    image: 'https://peakstore.ru/upload/resize_cache/trk_iblock_img/674/917_917_1/6746aee5c5b4f347da80aea85796986e.jpg',
    category: 'Куртки'
  },
  {
    id: 3,
    name: 'Gamma LT Hoody',
    price: '35 000 ₽',
    image: 'https://peakstore.ru/upload/resize_cache/trk_iblock_img/74c/917_917_1/74c58d0740b8c33594d295bae0405a42.jpg',
    category: 'Куртки'
  },
  {
    id: 4,
    name: 'Gamma LT Hoody',
    price: '35 000 ₽',
    image: 'https://peakstore.ru/upload/resize_cache/trk_iblock_img/74c/917_917_1/74c58d0740b8c33594d295bae0405a42.jpg',
    category: 'Куртки'
  }
];

const Catalog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden bg-white rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-base md:text-md font-mono font-bold text-black mb-1 md:mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm font-mono text-black opacity-60 mb-2 md:mb-4 truncate">
                  {product.category}
                </p>
                <span className="text-base md:text-md font-mono font-thin text-black">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog; 