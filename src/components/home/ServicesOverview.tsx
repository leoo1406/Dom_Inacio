import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TruckIcon, Factory, Ship, ArrowRight, Building2, Wheat, Dog } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <TruckIcon size={36} className="text-primary-500" />,
    title: 'Intermediação de Grãos',
    description: 'Conectamos produtores rurais e indústrias, garantindo transações seguras e eficientes do campo à fábrica.',
    link: '/servicos#intermediacao'
  },
  {
    id: 2,
    icon: <Factory size={36} className="text-primary-500" />,
    title: 'Fornecimento para Indústrias',
    description: 'Atendemos fábricas de ração pet, alimentação humana, soja texturizada e frigoríficos com grãos de qualidade superior.',
    link: '/servicos#fornecimento-industrias'
  },
  {
    id: 3,
    icon: <Building2 size={36} className="text-primary-500" />,
    title: 'Granjas e Frigoríficos',
    description: 'Fornecimento especializado para granjas de aves, suínos e frigoríficos, garantindo qualidade nutricional.',
    link: '/servicos#fornecimento-granjas'
  },
  {
    id: 4,
    icon: <Dog size={36} className="text-primary-500" />,
    title: 'Fábricas de Ração Pet',
    description: 'Grãos selecionados para a produção de rações de alta qualidade para animais de estimação.',
    link: '/servicos#racao-pet'
  },
  {
    id: 5,
    icon: <Wheat size={36} className="text-primary-500" />,
    title: 'Originação nas Lavouras',
    description: 'Atuamos diretamente no campo, garantindo a qualidade desde a origem até a entrega.',
    link: '/servicos#originacao'
  },
  {
    id: 6,
    icon: <Ship size={36} className="text-primary-500" />,
    title: 'Exportação',
    description: 'Levamos a qualidade dos grãos brasileiros para o mercado internacional com processos certificados.',
    link: '/servicos#exportacao'
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900">Nossos Serviços</h2>
          <p className="text-lg text-gray-600">
            Oferecemos soluções completas para toda a cadeia produtiva de grãos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-500 text-primary-600 font-medium rounded-md hover:bg-primary-500 hover:text-white transition-colors duration-300"
          >
            Ver todos os serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;