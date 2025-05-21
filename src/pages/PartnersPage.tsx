"use client"

import type React from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { MessageSquareQuote, Users, Building, Handshake } from "lucide-react"

const PartnersPage: React.FC = () => {
  useEffect(() => {
    document.title = "Parceiros | Grãos Dom Inácio"
  }, [])

  const partners = [
    {
      id: 1,
      name: "Fortbrain",
      logo: "/img/partners/fortbrain.png",
      category: "Cooperativa",
    },
    {
      id: 2,
      name: "Brain Plus",
      logo: "/img/partners/brainplus.png",
      category: "Indústria",
    },
    {
      id: 3,
      name: "Mimo's",
      logo: "/img/partners/mimos.png",
      category: "Indústria",
    },
    {
      id: 4,
      name: "Famil Premium",
      logo: "/img/partners/famil.png",
      category: "Granja",
    },
    {
      id: 5,
      name: "Luxbrain",
      logo: "/img/partners/luxbrain.png",
      category: "Exportadora",
    },
    {
      id: 6,
      name: "Arla Cooperativa LTDA",
      logo: "/img/partners/arla.webp",
      category: "Cooperativa",
    },
    {
      id: 7,
      name: "Carrer Alimentos",
      logo: "/img/partners/carrer.png",
      category: "Indústria",
    },
    {
      id: 8,
      name: "Mercoaves",
      logo: "/img/partners/mercoaves.png",
      category: "Logística/Indústria",
    },
    {
      id: 9,
      name: "Languiru",
      logo: "/img/partners/languiru.png",
      category: "Cooperativa Agroindustrial",
    },
    {
      id: 10,
      name: "Granja Pinheiros",
      logo: "https://www.granjapinheiros.com.br/img/aveserra-maior.svg",
      category: "Produtor",
    },
    {
      id: 11,
      name: "Petry Ovos",
      logo: "/img/partners/petryovos.png",
      category: "Produtor",
    },
    {
      id: 12,
      name: "Santa Clara",
      logo: "/img/partners/santaclara.png",
      category: "Cooperativa",
    }
  ]


  const testimonials = [
    {
      id: 1,
      quote:
        '"A parceria com a Grãos Dom Inácio tem sido fundamental para o sucesso da nossa operação. A qualidade dos grãos e a pontualidade nas entregas garantem o bom funcionamento da nossa produção."',
      author: "João Silva",
      company: "Diretor de Operações - Granja São Francisco",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      quote:
        '"Trabalhamos com a Dom Inácio há mais de 5 anos e posso afirmar que a confiabilidade deles é um diferencial no mercado. Sempre temos a certeza de receber grãos de alta qualidade."',
      author: "Maria Oliveira",
      company: "Gerente de Compras - Panificadora Trigo Dourado",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      quote:
        '"Como cooperativa, precisamos de parceiros que entendam as necessidades dos produtores rurais. A Grãos Dom Inácio sempre atua com transparência e justiça em todas as negociações."',
      author: "Roberto Mendes",
      company: "Presidente - Cooperativa Agrícola Central",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <div className="pt-16">
      <div className="relative bg-secondary-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Partners background"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">Nossos Parceiros</h1>
            <p className="text-xl text-gray-300">
              Construímos relações de confiança com empresas e produtores em toda a cadeia produtiva
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">Parceiros e Clientes</h2>
            <p className="text-gray-700">
              Trabalhamos com empresas e produtores comprometidos com a qualidade e a excelência em suas operações.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="mx-auto h-20 object-contain mb-4"
                />
                <p className="text-sm text-gray-600">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">Como Trabalhamos com Parceiros</h2>
            <p className="text-gray-700">
              Nossa abordagem de parceria é baseada em confiança mútua e benefícios para todos os envolvidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-100 rounded-full">
                  <Building size={32} className="text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-secondary-900">Parceiros Produtores</h3>
              <p className="text-gray-700">
                Trabalhamos com produtores rurais e cooperativas para garantir o fornecimento contínuo de grãos de alta
                qualidade, proporcionando preços justos e condições comerciais transparentes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-100 rounded-full">
                  <Users size={32} className="text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-secondary-900">Clientes Industriais</h3>
              <p className="text-gray-700">
                Suprimos indústrias alimentícias, granjas e fábricas de ração com grãos de qualidade controlada,
                entregas pontuais e suporte técnico especializado para atender suas necessidades específicas.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-100 rounded-full">
                  <Handshake size={32} className="text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-secondary-900">Parceiros Logísticos</h3>
              <p className="text-gray-700">
                Colaboramos com transportadoras, armazéns e operadores logísticos para garantir eficiência e segurança
                em toda a cadeia de suprimentos, do campo até o cliente final.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <MessageSquareQuote size={40} className="text-primary-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">O Que Dizem Nossos Parceiros</h2>
            <p className="text-gray-700">Conheça a experiência de quem já trabalha conosco</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-secondary-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Seja um Parceiro</h2>
              <p className="text-xl mb-8">
                Junte-se à nossa rede de parceiros e cresça conosco. Oferecemos condições diferenciadas e suporte
                contínuo para desenvolver uma relação comercial duradoura.
              </p>
              <a
                href="https://wa.me/5547992154382"
                className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Entre em contato
              </a>
            </div>
            <div className="lg:justify-self-end">
              <img
                src="/img/partners/partners-footer.jpg"
                alt="Parceria Grãos Dom Inácio"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
