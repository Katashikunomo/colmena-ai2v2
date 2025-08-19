// "use client"

// import { Row, Col, Typography } from "antd"
// import { motion } from "framer-motion"
// import { FaBrain, FaLightbulb, FaUsers, FaShieldAlt as FaShield, FaStar } from "react-icons/fa"

// const { Title, Paragraph } = Typography

// const FloatingShapes = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <motion.div
//         className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20"
//         animate={{
//           y: [0, -20, 0],
//           x: [0, 10, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-lg opacity-30"
//         animate={{
//           y: [0, 15, 0],
//           x: [0, -15, 0],
//           rotate: [0, -90, 0],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "easeInOut",
//         }}
//       />
//     </div>
//   )
// }

// export default function About() {
//   return (
//     <div className="relative pt-24">
//       <FloatingShapes />

//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <div className="flex justify-center mb-8">
//               <motion.div
//                 className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-xl"
//                 animate={{ rotate: [0, 5, -5, 0] }}
//                 transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
//               >
//                 <FaBrain className="text-white text-3xl" />
//               </motion.div>
//             </div>

//             <Title level={1} className="!mb-6 !text-4xl md:!text-5xl font-bold text-gray-800">
//               Sobre{" "}
//               <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
//                 Colmena
//               </span>
//             </Title>
//             <Paragraph className="!text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Somos pioneros en Business Intelligence, transformando datos complejos en insights accionables que
//               impulsan el crecimiento empresarial.
//             </Paragraph>
//           </motion.div>

//           <Row gutter={[48, 48]} align="middle">
//             <Col xs={24} lg={12}>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="relative">
//                   <img
//                     src="/data-analytics-team.png"
//                     alt="Equipo Colmena trabajando"
//                     className="w-full rounded-3xl shadow-2xl"
//                   />
//                   <motion.div
//                     className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 shadow-xl"
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
//                   >
//                     <div className="text-center">
//                       <FaStar className="text-white text-2xl mb-2" />
//                       <div className="text-white font-bold text-lg">5 años</div>
//                       <div className="text-yellow-100 text-sm">Experiencia</div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </Col>

//             <Col xs={24} lg={12}>
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <Title level={2} className="!mb-8 !text-3xl font-bold text-gray-800">
//                   Nuestra{" "}
//                   <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
//                     Misión
//                   </span>
//                 </Title>

//                 <div className="space-y-6">
//                   {[
//                     {
//                       icon: <FaLightbulb className="text-2xl" />,
//                       title: "Innovación Constante",
//                       description:
//                         "Desarrollamos tecnologías de vanguardia que mantienen a nuestros clientes a la vanguardia del mercado.",
//                       color: "yellow",
//                     },
//                     {
//                       icon: <FaUsers className="text-2xl" />,
//                       title: "Enfoque Humano",
//                       description:
//                         "Creemos que la tecnología debe servir a las personas, no al revés. Diseñamos soluciones intuitivas y accesibles.",
//                       color: "purple",
//                     },
//                     {
//                       icon: <FaShield className="text-2xl" />,
//                       title: "Confianza Total",
//                       description:
//                         "La seguridad y privacidad de los datos de nuestros clientes es nuestra máxima prioridad.",
//                       color: "yellow",
//                     },
//                   ].map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: index * 0.2 }}
//                       viewport={{ once: true }}
//                       className="flex items-start space-x-4"
//                     >
//                       <div
//                         className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
//                           item.color === "purple"
//                             ? "bg-gradient-to-br from-purple-500 to-purple-600"
//                             : "bg-gradient-to-br from-yellow-500 to-yellow-600"
//                         }`}
//                       >
//                         <div className="text-white">{item.icon}</div>
//                       </div>
//                       <div>
//                         <Title level={4} className="!mb-2 !text-lg font-bold text-gray-800">
//                           {item.title}
//                         </Title>
//                         <Paragraph className="!mb-0 text-gray-600 leading-relaxed">{item.description}</Paragraph>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </Col>
//           </Row>
//         </div>
//       </section>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { FaRocket, FaUsers, FaLightbulb, FaHeart, FaAward, FaGlobeAmericas, FaClock, FaShieldAlt } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"
import { BsGraphUpArrow } from "react-icons/bs"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "99.9%", label: "Tiempo de Actividad", icon: FaClock },
    { number: "24/7", label: "Soporte Disponible", icon: FaShieldAlt },
    { number: "10+", label: "Integraciones", icon: FaGlobeAmericas },
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

  const team = [
    {
      name: "Federico Trumbley",
      role: "CEO & Fundador",
      description:
        "Visionario tecnológico con 15+ años transformando empresas a través de la automatización inteligente.",
    },
    // {
    //   name: "Carlos Rodríguez",
    //   role: "CTO",
    //   description: "Experto en IA y machine learning, arquitecto de nuestras soluciones más innovadoras.",
    // },
    // {
    //   name: "Ana Martínez",
    //   role: "Head of Customer Success",
    //   description: "Especialista en experiencia del cliente, garantiza que cada implementación sea un éxito rotundo.",
    // },
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
                  soluciones de IA que no solo automatizan procesos, sino que crean experiencias memorables y
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

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Conoce a Nuestro{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Equipo
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Mentes brillantes trabajando juntas para crear el futuro de la comunicación empresarial
              </p>
            </div>

            <div className="grid md:grid-cols-1 max-w-3xl m-auto gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 delay-${index * 200} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group text-center h-full">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
