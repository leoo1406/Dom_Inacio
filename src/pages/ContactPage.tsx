import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contato | Grãos Dom Inácio";
  }, []);

  return (
    <div className="pt-16">
      <div className="relative bg-secondary-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Contact background"
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
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-300">
              Estamos à disposição para atender você da melhor forma possível
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-secondary-900">
                Informações de Contato
              </h2>

              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary-900">
                      Endereço
                    </h3>
                    <p className="text-gray-700 mt-1">
                      Avenida Dolores Alcaraz Caldas, 90
                      <br />
                      Andar 8 Sala 901 - <br />
                      Porto Alegre - RS
                      <br />
                      CEP: 90110-180
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary-900">
                      Telefone
                    </h3>
                    <p className="text-gray-700 mt-1">
                      <a className="hover:text-primary-600 transition-colors">
                        (47) 99215-4382
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a className="hover:text-primary-600 transition-colors">
                        WhatsApp: (47) 99215-4382
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary-900">
                      E-mail
                    </h3>
                    <p className="text-gray-700 mt-1">
                      <a
                        className="hover:text-primary-600 transition-colors"
                      >
                        contato@graosdominacio.com.br
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a
                        className="hover:text-primary-600 transition-colors"
                      >
                        comercial@graosdiomincio.com.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <MessageCircle size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary-900">
                      Redes Sociais
                    </h3>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://instagram.com/graos.dominacio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-bold text-secondary-900 mb-4">
                  Horário de Atendimento
                </h3>
                <p className="text-gray-700">
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 12h
                  <br />
                  Domingo e Feriados: Fechado
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.727884763336!2d-51.232699524616646!3d-30.04575638189347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197926e5590931%3A0x3064c751bb44968e!2sDom%20In%C3%A1cio%20Com%C3%A9rcio%20de%20Gr%C3%A3os%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1715103400475!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para fazer negócios?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Entre em contato agora mesmo e descubra como podemos atender às
              suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/5547992154382"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                <MessageCircle className="mr-2" size={20} />
                Falar via WhatsApp
              </a>
              <a
                href="/atendimento"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-colors duration-300"
              >
                <Mail className="mr-2" size={20} />
                Enviar E-mail
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
