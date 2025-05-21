"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Send, Plus, Minus, MessageCircle } from "lucide-react"
import BrazilMap from "../components/common/BrazilMap"

interface FaqItem {
  question: string
  answer: string
  isOpen: boolean
}

const SupportPage: React.FC = () => {
  useEffect(() => {
    document.title = "Atendimento | Grãos Dom Inácio"
  }, [])

  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "Quais regiões são atendidas pela empresa?",
      answer:
        "Atualmente atendemos todo o território nacional, com foco especial nos estados do Sul, Sudeste e Centro-Oeste. Para exportação, trabalhamos principalmente com países da América Latina, Europa e Ásia.",
      isOpen: false,
    },
    {
      question: "Como solicitar uma cotação de preços?",
      answer:
        "Você pode solicitar uma cotação através do nosso WhatsApp, pelo e-mail comercial@graosdiomincio.com.br ou preenchendo o formulário disponível nesta página. Nossa equipe retornará em até 24 horas úteis.",
      isOpen: false,
    },
    {
      question: "Qual é o volume mínimo para compra?",
      answer:
        "O volume mínimo varia de acordo com o produto e o tipo de cliente. Para granjas e pequenas indústrias, trabalhamos com cargas fechadas a partir de 15 toneladas. Para grandes indústrias e exportação, o volume mínimo é de 50 toneladas.",
      isOpen: false,
    },
    {
      question: "Vocês fornecem grãos orgânicos ou com certificações específicas?",
      answer:
        "Sim, temos uma linha de produtos orgânicos e com certificações específicas como Non-GMO, Kosher e Halal. Para mais informações sobre disponibilidade e preços, entre em contato com nossa equipe comercial.",
      isOpen: false,
    },
    {
      question: "Quais são as condições de pagamento?",
      answer:
        "Trabalhamos com diversas condições de pagamento, incluindo à vista, parcelado e a prazo. As condições específicas são definidas de acordo com o volume, recorrência de compra e relacionamento com o cliente.",
      isOpen: false,
    },
    {
      question: "Como funciona o processo de entrega?",
      answer:
        "A entrega é realizada por nossa frota própria ou por transportadoras parceiras, dependendo da região e volume. O prazo de entrega é definido no momento da negociação e varia de acordo com a disponibilidade do produto e distância.",
      isOpen: false,
    },
  ])

  const toggleFaq = (index: number) => {
    const updatedFaqs = [...faqs]
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen
    setFaqs(updatedFaqs)
  }

  const regions = [
    { name: "Sul", states: ["Paraná", "Santa Catarina", "Rio Grande do Sul"] },
    { name: "Sudeste", states: ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Espírito Santo"] },
    { name: "Centro-Oeste", states: ["Mato Grosso", "Mato Grosso do Sul", "Goiás"] },
    { name: "Norte", states: ["Tocantins"] },
  ]

  return (
    <div className="pt-16">
      <div className="relative bg-secondary-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/7709290/pexels-photo-7709290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Customer support background"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">Atendimento</h1>
            <p className="text-xl text-gray-300">
              Estamos à disposição para atender suas necessidades e responder suas dúvidas
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full">
                    <MessageCircle size={32} className="text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary-900">WhatsApp</h3>
                <p className="text-gray-700 mb-4">Atendimento rápido via mensagem</p>
                <a
                  href="https://wa.me/5547992154382"
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  (47) 99215-4382
                </a>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full">
                    <Phone size={32} className="text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary-900">Telefone</h3>
                <p className="text-gray-700 mb-4">De segunda a sexta, das 8h às 18h</p>
                <a className="text-primary-600 font-medium hover:text-primary-700 transition-colors">(47) 99215-4382</a>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full">
                    <Mail size={32} className="text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary-900">E-mail</h3>
                <p className="text-gray-700 mb-4">Resposta em até 24h úteis</p>
                <a
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  contato@graosdominacio.com.br
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">Regiões Atendidas</h2>
            <p className="text-gray-700">
              Atendemos em todo o território nacional, com foco especial nas seguintes regiões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-9">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden p-6 h-[400px] md:h-[700px] w-full">
              <BrazilMap hoveredRegion={hoveredRegion} />
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-6 text-secondary-900">Principais Regiões</h3>

              <div className="space-y-4">
                {regions.map((region, index) => (
                  <motion.div
                    key={region.name}
                    onMouseEnter={() => setHoveredRegion(region.name.toLowerCase())}
                    onMouseLeave={() => setHoveredRegion(null)}
                    className="bg-white p-4 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className="font-bold text-xl mb-2 text-secondary-800">{region.name}</h4>
                    <p className="text-gray-700">{region.states.join(", ")}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-gray-700">
                  Não encontrou sua região? Entre em contato conosco para verificar a disponibilidade de atendimento na
                  sua localidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">Entre em Contato</h2>
            <p className="text-gray-700">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas úteis
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
          <form action="https://formsubmit.co/baronio.leo@gmail.com" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://graosdominacio.com.br/obrigado" />
              <div className="md:col-span-2">
                <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block font-medium text-gray-700 mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="cotacao">Solicitar Cotação</option>
                  <option value="info">Informações sobre Produtos</option>
                  <option value="parceria">Proposta de Parceria</option>
                  <option value="outro">Outro Assunto</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition-colors duration-300"
                >
                  Enviar Mensagem
                  <Send size={16} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary-900">Perguntas Frequentes</h2>
            <p className="text-gray-700">
              Encontre respostas rápidas para as dúvidas mais comuns sobre nossos produtos e serviços
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left font-medium text-secondary-900 focus:outline-none"
                  >
                    <span className="text-lg">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">
                      {faq.isOpen ? (
                        <Minus size={24} className="text-primary-500" />
                      ) : (
                        <Plus size={24} className="text-primary-500" />
                      )}
                    </span>
                  </button>
                  {faq.isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-2"
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupportPage
