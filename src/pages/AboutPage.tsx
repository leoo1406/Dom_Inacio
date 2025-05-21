import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  TreePine,
  Hourglass,
  Handshake,
  Award,
  Users,
  Leaf,
  Scroll,
} from "lucide-react";

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "Sobre Nós | Grãos Dom Inácio";
  }, []);

  const values = [
    {
      icon: <Award className="w-12 h-12 text-primary-500" />,
      title: "Excelência",
      description:
        "Buscamos a mais alta qualidade em todos os processos, do campo à entrega.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      title: "Relacionamento",
      description:
        "Construímos parcerias duradouras baseadas em confiança e transparência.",
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary-500" />,
      title: "Sustentabilidade",
      description:
        "Comprometidos com práticas que respeitam o meio ambiente e as comunidades.",
    },
    {
      icon: <Hourglass className="w-12 h-12 text-primary-500" />,
      title: "Tradição",
      description: "Anos de experiência e conhecimento do mercado de grãos.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      company: "Granja São José",
      content:
        "Trabalhamos com a Grãos Dom Inácio há mais de 5 anos e sempre recebemos produtos de excelente qualidade. Fundamental para a nutrição dos nossos animais.",
      image:
        "https://images.pexels.com/photos/8446624/pexels-photo-8446624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Amanda Oliveira",
      company: "Panificadora Trigo Dourado",
      content:
        "O trigo fornecido pela Dom Inácio tem uma qualidade excepcional, o que se reflete diretamente nos nossos produtos de panificação. Entrega sempre pontual.",
      image:
        "https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Ricardo Almeida",
      company: "Cooperativa Agrícola Central",
      content:
        "A parceria com a Grãos Dom Inácio trouxe mais segurança para nossas operações. Conseguimos atender melhor nossos cooperados com essa aliança estratégica.",
      image:
        "https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="relative bg-secondary-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/img/about/header.jpeg"
            alt="Grain background"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">
              Nossa História
            </h1>
            <p className="text-xl text-gray-300">
              Conheça a trajetória da Grãos Dom Inácio e nosso compromisso com a
              qualidade.
            </p>
          </motion.div>
        </div>
      </div>

      {/* History section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-secondary-900">
                Nossa Trajetória
              </h2>
              <p className="text-gray-700 mb-4">
                Fundada em 05 de Janeiro de 2022, a Dom Inácio tem 3 anos de
                experiência no mercado e tem o propósito de fornecer grãos de
                alta qualidade para indústrias alimentícias e granjas da região.
              </p>
              <p className="text-gray-700 mb-4">
                Somos especializados na compra e venda de milho, soja, sorgo e
                trigo, sendo assim reconhecidos pela qualidade dos grãos que
                oferecemos.
              </p>
              <p className="text-gray-700 mb-4">
                Nosso compromisso com a qualidade e a seriedade nas relações
                comerciais permitiu que construíssemos uma rede de parceiros
                composta por produtores rurais, cooperativas e indústrias,
                criando uma cadeia de valor sólida e confiável.
              </p>
              <p className="text-gray-700">
                Hoje, somos referência no mercado, reconhecidos pela excelência
                dos produtos e serviços, sempre pautados pela transparência e
                responsabilidade em todas as etapas do processo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/img/about/machine.jpg"
                alt="Campo de grãos"
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary-900">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-600 text-lg">
              Nossos princípios orientam todas as nossas ações e decisões.
            </p>
          </div>

          {/* Missão, Visão, Compromisso */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {[
              {
                title: "Missão",
                description:
                  "Fornecer grãos de qualidade superior, promovendo o desenvolvimento sustentável do agronegócio e gerando valor para produtores, clientes e comunidades.",
                icon: <Target className="w-12 h-12 text-primary-500 mb-4" />,
              },
              {
                title: "Visão",
                description:
                  "Ser reconhecida como referência nacional no comércio de grãos, destacando-se pela excelência operacional, inovação e responsabilidade socioambiental.",
                icon: <Eye className="w-12 h-12 text-primary-500 mb-4" />,
              },
              {
                title: "Compromisso",
                description:
                  "Manter os mais altos padrões de qualidade e segurança em todos os processos, priorizando a satisfação de nossos clientes e o respeito ao meio ambiente.",
                icon: <Handshake className="w-12 h-12 text-primary-500 mb-4" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-500 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-2">{item.icon}</div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Excelência",
                description:
                  "Buscamos a mais alta qualidade em todos os processos, do campo à entrega.",
                icon: <Award className="w-10 h-10 text-primary-500 mb-4" />,
              },
              {
                title: "Relacionamento",
                description:
                  "Construímos parcerias duradouras baseadas em confiança e transparência.",
                icon: <Users className="w-10 h-10 text-primary-500 mb-4" />,
              },
              {
                title: "Sustentabilidade",
                description:
                  "Comprometidos com práticas que respeitam o meio ambiente e as comunidades.",
                icon: <Leaf className="w-10 h-10 text-primary-500 mb-4" />,
              },
              {
                title: "Tradição",
                description:
                  "Anos de experiência e conhecimento do mercado de grãos.",
                icon: <Scroll className="w-10 h-10 text-primary-500 mb-4" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-500 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">
              Depoimentos de Clientes
            </h2>
            <p className="text-gray-700">
              O que nossos parceiros e clientes dizem sobre a Grãos Dom Inácio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-secondary-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
