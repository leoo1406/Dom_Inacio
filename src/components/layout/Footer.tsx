import type React from "react"
import { Link } from "react-router-dom"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/img/home/logo.png" alt="Grãos Dom Inácio" className="h-12" />
            </Link>
            <p className="text-gray-300 mb-4">
              Atuamos desde o campo até a fábrica, com qualidade e excelência em todos os processos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/graos.dominacio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/parceiros" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link to="/atendimento" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Atendimento
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-primary-300 mr-2 mt-1" />
                <span className="text-gray-300">
                  <a className="hover:text-primary-300 transition-colors">WhatsApp: (47) 99215-4382</a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary-300 mr-2 mt-1" />
                <span className="text-gray-300">
                  <a className="hover:text-primary-300 transition-colors">
                    contato@graosdominacio.com.br
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-300 mr-2 mt-1" />
                <span className="text-gray-300">
                  Avenida Dolores Alcaraz Caldas, 90
                  <br />
                  Andar 8 Sala 901 - Praia de Belas
                  <br />
                  Porto Alegre - RS
                  <br />
                  CEP: 90110-180
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-secondary-700 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} Grãos Dom Inácio por <span className="text-primary-500">Leonardo Baronio.</span> Todos
            os direitos reservados.
          </p>
          <p className="text-gray-400 mt-2 sm:mt-0">CNPJ: 44.754.693/0001-83</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
