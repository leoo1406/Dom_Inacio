import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wheat } from 'lucide-react';

const AboutPreview: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Wheat size={24} className="text-primary-500" />
              <h3 className="text-lg font-semibold text-primary-500">Nossa História</h3>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900">
              Atuamos desde o campo até a fábrica
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              A Grãos Dom Inácio nasceu da paixão pelo agronegócio e do compromisso com a qualidade. 
              Há mais de 3 anos, estabelecemos um padrão de excelência no fornecimento de grãos para indústrias 
              e no comércio nacional e internacional.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg">
              Nosso diferencial está na atenção a cada etapa do processo, começando pela lavoura, passando pelo 
              transporte cuidadoso e garantindo entrega pontual para nossos clientes.
            </p>
            
            <Link 
              to="/sobre" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Saiba mais sobre nossa trajetória
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/img/home/home.png"
                alt="Equipe Grãos Dom Inácio" 
                className="rounded-lg shadow-lg object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 rounded-lg p-6 shadow-lg">
                <p className="text-2xl font-bold text-white">+3</p>
                <p className="text-white">Anos de Experiência</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;