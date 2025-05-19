"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when clicking a link or changing location
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Produtos", path: "/produtos" },
    { name: "Parceiros", path: "/parceiros" },
    { name: "Atendimento", path: "/atendimento" },
    { name: "Contato", path: "/contato" },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/public/img/home/logo.png" alt="Grãos Dom Inácio" className="h-11 scale-150" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  location.pathname === link.path
                    ? "text-primary-500"
                    : isScrolled
                      ? "text-secondary-900"
                      : "text-secondary-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-secondary-900 hover:text-primary-500 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen bg-white" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium py-2 px-4 rounded-md transition-colors duration-300 ${
                location.pathname === link.path
                  ? "bg-primary-100 text-primary-600"
                  : "text-secondary-900 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
