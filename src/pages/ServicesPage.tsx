import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TruckIcon, Factory, Wheat, Ship, BarChart3 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Serviços | Grãos Dom Inácio';
  }, []);

  const services = [
    {
      id: 'intermediacao',
      icon: <TruckIcon className="w-12 h-12 text-primary-500" />,
      title: 'Intermediação de Grãos',
      description: 'Conectamos produtores rurais e indústrias, garantindo transações seguras e eficientes.',
      details: [
        'Compra e venda segura, direto das lavouras',
        'Garantia de preços justos para produtores',
        'Transações documentadas e seguras',
        'Logística integrada de transporte'
      ],
      image: '/img/services/intermediacao.jpg'
    },
    {
      id: 'originacao',
      icon: <Wheat className="w-12 h-12 text-primary-500" />,
      title: 'Originação nas Lavouras',
      description: 'Atuamos desde o campo até o silo, assegurando a qualidade dos grãos desde a colheita.',
      details: [
        'Acompanhamento de plantio e colheita',
        'Certificação de qualidade na origem',
        'Armazenamento seguro e adequado',
        'Rastreabilidade completa dos grãos'
      ],
      image: '/img/services/lavoura.jpg'
    },
    {
      id: 'fornecimento-granjas',
      icon: <Factory className="w-12 h-12 text-primary-500" />,
      title: 'Fornecimento para Granjas',
      description: 'Entrega de milho e soja para granjas de aves e suínos, com qualidade e pontualidade.',
      details: [
        'Grãos selecionados para nutrição animal',
        'Entrega programada conforme necessidade',
        'Análise de qualidade e composição nutricional',
        'Consultorias especializadas para rações'
      ],
      image: '/img/services/granja.png'
    },
    {
      id: 'fornecimento-industrias',
      icon: <BarChart3 className="w-12 h-12 text-primary-500" />,
      title: 'Fornecimento para Indústrias Alimentícias',
      description: 'Suprimento de trigo, soja texturizada e outros grãos para a indústria alimentícia.',
      details: [
        'Grãos selecionados para processamento industrial',
        'Certificações de qualidade e segurança alimentar',
        'Fornecimento contínuo para linhas de produção',
        'Contratos de longo prazo com preços competitivos'
      ],
      image: '/img/services/industria.jpg'
    },
    {
      id: 'exportacao',
      icon: <Ship className="w-12 h-12 text-primary-500" />,
      title: 'Exportação',
      description: 'Levamos a qualidade dos grãos brasileiros para o mercado internacional.',
      details: [
        'Operações de exportação para diversos países',
        'Documentação internacional completa',
        'Parceria com transportadoras e portos',
        'Certificações internacionais de qualidade'
      ],
      image: '/img/services/expo.png'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="relative bg-secondary-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/services/header-services.jpg"
            alt="Grain services background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">Nossos Serviços</h1>
            <p className="text-xl text-gray-300">Soluções completas para toda a cadeia produtiva de grãos</p>
          </motion.div>
        </div>
      </div>

      {/* Services section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">Serviços Especializados</h2>
            <p className="text-gray-700">
              Oferecemos uma gama completa de serviços para atender às necessidades específicas de cada cliente, 
              desde a produção até o consumo final.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <div className="absolute -right-6 -bottom-6 w-full h-full border-2 border-primary-300 rounded-lg -z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <h3 className="text-3xl font-bold text-secondary-900">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 mr-3">
                          <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Precisa de serviços personalizados?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Entre em contato conosco para discutir como podemos atender às necessidades específicas do seu negócio.
            </p>
            <a 
              href="https://wa.me/5547992154382" 
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Fale com um especialista
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;