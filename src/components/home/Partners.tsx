"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const partners = [
  {
    id: 1,
    name: "Languiru",
    logo: "/img/partners/languiru.png",
  },
  {
    id: 2,
    name: "Mercoaves",
    logo: "/img/partners/mercoaves.png",
  },
  {
    id: 3,
    name: "Carrer Alimentos",
    logo: "/img/partners/carrer.png",
  },
  {
    id: 4,
    name: "Granja Pinheiros",
    logo: "https://www.granjapinheiros.com.br/img/aveserra-maior.svg",
  },
  { id: 5, 
    name: "Fortbrain",
    logo: "/img/partners/fortbrain.png",
  },
]

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary-900">Parceiros e Clientes</h2>
          <p className="text-lg text-gray-600">
            Trabalhamos com as principais empresas do setor para garantir qualidade em toda a cadeia
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {partners.map((partner) => (
            <div key={partner.id} className=" transition-all duration-300">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-auto max-h-20" />
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/parceiros"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors duration-300"
          >
            Conheça nossos parceiros
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Partners
