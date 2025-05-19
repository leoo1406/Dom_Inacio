import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Milho',
    image: '/public/img/products/milho.jpg',
    description: 'Grãos de milho de alta qualidade para rações animais e indústria alimentícia.',
    link: '/produtos#milho'
  },
  {
    id: 2,
    name: 'Soja',
    image: '/public/img/products/soja.jpeg',
    description: 'Soja para processamento industrial, exportação e produção de alimentos.',
    link: '/produtos#soja'
  },
  {
    id: 3,
    name: 'Trigo',
    image: '/public/img/products/trigo.jpeg',
    description: 'Trigo de alta qualidade para panificação e indústria alimentícia.',
    link: '/produtos#trigo'
  },
  {
    id: 4,
    name: 'Sorgo',
    image: '/public/img/products/sorgo.jpg',
    description: 'Sorgo para ração animal e alternativa sustentável ao milho.',
    link: '/produtos#sorgo'
  }
];

const ProductCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? products.length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900">Nossos Produtos</h2>
          <p className="text-lg text-gray-600">
            Fornecemos grãos de alta qualidade para atender às mais diversas necessidades
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-video md:aspect-[16/8] rounded-xl overflow-hidden">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-transparent z-10"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg">
                      <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-4xl font-bold mb-4 text-white">{product.name}</h3>
                        <p className="text-lg text-white/90 mb-6">{product.description}</p>
                        <Link
                          to={product.link}
                          className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition-colors duration-300"
                        >
                          Saiba mais
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current ? 'bg-primary-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/produtos"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-500 text-primary-600 font-medium rounded-md hover:bg-primary-500 hover:text-white transition-colors duration-300"
          >
            Ver todos os produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;