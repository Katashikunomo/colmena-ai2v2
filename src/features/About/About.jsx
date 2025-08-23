"use client"

import { useState, useEffect } from "react"
import { FaRocket, FaLightbulb, FaHeart, FaAward, FaGlobeAmericas, FaClock, FaShieldAlt } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"
import { BsGraphUpArrow } from "react-icons/bs"
import TrustedMarquee from "./TrustedMarquee"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "99.9%", label: "Tiempo de Actividad", icon: FaClock },
    { number: "24/7", label: "Soporte Disponible  whatssap API", icon: FaShieldAlt },
    { number: "+3", label: "Integraciones", icon: FaGlobeAmericas },
  ]

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovación Constante",
      description:
        "Desarrollamos tecnología de vanguardia que revoluciona la forma en que las empresas se comunican con sus clientes.",
    },
    {
      icon: FaHeart,
      title: "Pasión por el Cliente",
      description: "Cada solución que creamos está diseñada pensando en el éxito y crecimiento de nuestros clientes.",
    },
    {
      icon: FaAward,
      title: "Excelencia Garantizada",
      description:
        "Nos comprometemos a entregar resultados excepcionales que superen las expectativas de nuestros clientes.",
    },
  ]

  const trustedCompanies = [
    { name: "Microsoft", logo: "https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg" },
    { name: "Google", logo: "https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg" },
    { name: "Google", logo: "https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg" },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden pt-36 -mt-36">
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
                <HiSparkles className="text-purple-400 text-xl" />
                <span className="text-purple-300 font-medium">Líderes en Automatización Inteligente</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Somos el Futuro de la
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Comunicación Empresarial
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transformamos la manera en que las empresas se conectan con sus clientes a través de
                <span className="text-purple-400 font-semibold"> inteligencia artificial avanzada</span> y
                <span className="text-blue-400 font-semibold"> automatización inteligente</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-1000 delay-${index * 200} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                    <stat.icon className="text-4xl text-purple-400 mx-auto mb-4 group-hover:text-blue-400 transition-colors duration-300" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                  <FaRocket className="text-purple-400" />
                  <span className="text-purple-300 font-medium">Nuestra Misión</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Revolucionamos la
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {" "}
                    Experiencia del Cliente
                  </span>
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Creemos que cada interacción con el cliente es una oportunidad de crear valor. Por eso desarrollamos
                  soluciones de AI que no solo automatizan procesos, sino que crean experiencias memorables y
                  significativas.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Automatización inteligente 24/7</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Respuestas personalizadas en tiempo real</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Integración perfecta con sistemas existentes</span>
                  </div>
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                    <BsGraphUpArrow className="text-6xl text-purple-400 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Crecimiento Exponencial</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Nuestros clientes experimentan un promedio de{" "}
                      <span className="text-purple-400 font-bold">300% de aumento</span> en la eficiencia de atención al
                      cliente y <span className="text-blue-400 font-bold">85% de reducción</span> en tiempo de
                      respuesta.
                    </p>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestros{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Valores
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Los principios que guían cada decisión y cada línea de código que escribimos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 delay-${index * 200} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group h-full">
                    <value.icon className="text-5xl text-purple-400 mb-6 group-hover:text-blue-400 transition-colors duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Únete a las{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Empresas que Confían
                </span>{" "}
                en Nuestros Procesos
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Líderes mundiales en tecnología confían en nuestras soluciones de automatización inteligente
              </p>
            </div>

          
            
            {/* <TrustedMarquee trustedCompanies={trustedCompanies} speed={100} height="h-20" gap="mx-6" /> */}
            <TrustedMarquee trustedCompanies={trustedCompanies} columns={5} gap="gap-6" logoHeight="h-10" maxWidth="max-w-5xl" />


          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
