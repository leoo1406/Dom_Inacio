import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Info, CheckCircle } from 'lucide-react';

type ProductCategory = 'all' | 'milho' | 'soja' | 'trigo' | 'sorgo';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  uses: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

const ProductsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Produtos | Grãos Dom Inácio';
  }, []);

  const [activeTab, setActiveTab] = useState<ProductCategory>('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Milho',
      category: 'milho',
      image: '/img/products/milho.jpg',
      description: 'Nosso milho é cultivado com as melhores práticas agrícolas, resultando em grãos de alta qualidade, versáteis e amplamente utilizados na alimentação humana, produção industrial e ração animal.\nGarantimos a qualidade do grão em todas as etapas, desde a colheita até a entrega.',
      uses: [
        'Rações para aves e suínos',
        'Produção de óleo de milho',
        'Indústria de alimentos',
        'Produção de etanol'
      ],
      specifications: [
        { label: 'Umidade', value: 'máx. 14%' },
        { label: 'Impurezas', value: 'máx. 1%' },
        { label: 'Grãos avariados', value: 'máx. 3%' },
        { label: 'Proteína', value: '8-11%' }
      ]
    },
    {
      id: 2,
      name: 'Soja',
      category: 'soja',
      image: '/img/products/soja.jpeg',
      description: 'Nossa soja é produzida com tecnologia de ponta e rigoroso controle de qualidade, resultando em grãos ricos em proteínas e essenciais para a alimentação humana e animal.\nSelecionada com rigor para garantir os mais altos padrões nutricionais, a soja fornecida atende a diversas aplicações industriais e alimentícias.',
      uses: [
        'Produção de farelo para ração animal',
        'Óleo de soja para consumo humano',
        'Indústria de alimentos processados',
        'Produção de biodiesel'
      ],
      specifications: [
        { label: 'Umidade', value: 'máx. 14%' },
        { label: 'Impurezas', value: 'máx. 1%' },
        { label: 'Teor de proteína', value: '36-40%' },
        { label: 'Teor de óleo', value: '18-22%' }
      ]
    },
    {
      id: 3,
      name: 'Trigo',
      category: 'trigo',
      image: '/img/products/trigo.jpeg',
      description: 'Base da alimentação mundial, o trigo é essencial para a produção de pães, massas e diversos alimentos.\nFornecemos trigo de alta qualidade, ideal para aplicações variadas, com diferentes tipos e classificações que atendem necessidades específicas da indústria de panificação, massas e rações animais.',
      uses: [
        'Panificação',
        'Produção de massas',
        'Biscoitos e bolachas',
        'Rações animais'
      ],
      specifications: [
        { label: 'Tipo', value: 'Pão/Doméstico/Melhorador' },
        { label: 'Peso hectolitro', value: 'mín. 78' },
        { label: 'Glúten', value: '28-34%' },
        { label: 'Falling Number', value: '300-350s' }
      ]
    },
    {
      id: 4,
      name: 'Sorgo',
      category: 'sorgo',
      image: '/img/products/sorgo.jpg',
      description: 'Grão sustentável e ideal para regiões com baixa disponibilidade de água, o sorgo é uma alternativa ecológica ao milho, oferecendo excelente perfil nutricional para a alimentação animal.\nUsado em rações e biocombustíveis, promove práticas agrícolas sustentáveis e apresenta grande resistência à seca durante o cultivo.',
      uses: [
        'Substituto do milho em rações',
        'Alimentação de ruminantes',
        'Produção de etanol',
        'Silagem'
      ],
      specifications: [
        { label: 'Umidade', value: 'máx. 13%' },
        { label: 'Proteína', value: '8-12%' },
        { label: 'Tanino', value: 'baixo' },
        { label: 'Energia metabolizável', value: '3.170 kcal/kg' }
      ]
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="relative bg-secondary-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/products/header.jpg"
            alt="Agricultural products background"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">Nossos Produtos</h1>
            <p className="text-xl text-gray-300">
              Fornecemos grãos selecionados de alta qualidade para diversos segmentos do mercado
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">Conheça Nossa Linha de Produtos</h2>
            <p className="text-gray-700">
              Oferecemos grãos de primeira qualidade, selecionados e classificados para atender às mais diversas necessidades.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === 'all' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab('milho')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === 'milho' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Milho
            </button>
            <button
              onClick={() => setActiveTab('soja')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === 'soja' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Soja
            </button>
            <button
              onClick={() => setActiveTab('trigo')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === 'trigo' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Trigo
            </button>
            <button
              onClick={() => setActiveTab('sorgo')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === 'sorgo' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sorgo
            </button>
          </div>

          {/* Products grid */}
          <div className="space-y-24">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                id={product.category}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
                  />
                </div>

                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-3xl font-bold mb-4 text-secondary-900">{product.name}</h3>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-secondary-800 flex items-center">
                      <Info size={18} className="text-primary-500 mr-2" />
                      Aplicações
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.uses.map((use, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={16} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-secondary-800 flex items-center">
                      <Info size={18} className="text-primary-500 mr-2" />
                      Especificações Técnicas
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-gray-200">
                          {product.specifications.map((spec, i) => (
                            <tr key={i}>
                              <td className="py-2 pr-4 font-medium text-gray-700">{spec.label}</td>
                              <td className="py-2 text-gray-700">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary-900">Precisa de informações específicas?</h3>
                <p className="text-gray-700 mb-6">
                  Entre em contato conosco para solicitar amostras ou informações detalhadas sobre nossos produtos.
                </p>
                <div>
                  <a 
                    href="https://wa.me/5547992154382" 
                    className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors duration-300"
                  >
                    Solicitar informações
                  </a>
                </div>
              </div>
              <div className="bg-center bg-cover h-64 md:h-auto" style={{ backgroundImage: "url('/img/products/infos.jpg')" }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;