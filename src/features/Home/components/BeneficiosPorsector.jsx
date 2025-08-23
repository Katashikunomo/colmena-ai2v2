"use client"
import { motion } from "framer-motion"
import { FaUtensils, FaStethoscope, FaShoppingCart, FaWrench, FaBuilding, FaUserTie } from "react-icons/fa"

export default function BeneficiosPorSector() {
  const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`min-h-screen relative flex items-center justify-center ${className}`}>
      {children}
    </section>
  )

  return (
    <div>
      <Section
        id="sectors"
        className="bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden pb-32 max-w-[1750px] mx-auto mt-24 rounded-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-green-600/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 pt-12">
              Beneficios por{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                Sector
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Descubre cómo nuestra AI transforma cada industria con soluciones específicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUtensils className="text-3xl" />,
                title: "Restaurantes, cafés y taquerías",
                desc: "Toma pedidos sin llamadas y sin errores, directo a cocina.",
                color: "orange",
                features: ["Pedidos automáticos", "Sin errores humanos", "Integración directa"],
              },
              {
                icon: <FaShoppingCart className="text-3xl" />,
                title: "Retail y e-commerce",
                desc: "Responde disponibilidad y opciones de entrega al instante.",
                color: "green",
                features: ["Consultas instantáneas", "Stock en tiempo real", "Opciones de entrega"],
              },
              {
                icon: <FaUserTie className="text-3xl" />,
                title: "RRHH y agencias de reclutamiento",
                desc: "Recibe y filtra postulaciones en minutos.",
                color: "pink",
                features: ["Filtrado inteligente", "Proceso rápido", "Evaluación automática"],
              },
              {
                icon: <FaWrench className="text-3xl" />,
                title: "Talleres y servicios técnicos",
                desc: "Cotiza y confirma fechas sin interrumpir tu trabajo.",
                color: "purple",
                features: ["Cotizaciones automáticas", "Agenda de servicios", "Sin interrupciones"],
              },
              {
                icon: <FaStethoscope className="text-3xl" />,
                title: "Clínicas y consultorios",
                desc: "Agenda y confirma citas automáticamente.",
                color: "blue",
                features: ["Agenda inteligente", "Confirmaciones automáticas", "Recordatorios"],
              },
              {
                icon: <FaBuilding className="text-3xl" />,
                title: "Oficinas y despachos",
                desc: "Centraliza solicitudes y documentos sin perder información.",
                color: "indigo",
                features: ["Gestión centralizada", "Documentos organizados", "Cero pérdidas"],
              },
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 border border-purple-500/30 p-8 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl h-full overflow-hidden group-hover:border-purple-400/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                        sector.color === "orange"
                          ? "from-orange-500 to-orange-600 group-hover:shadow-orange-500/50"
                          : sector.color === "blue"
                            ? "from-blue-500 to-blue-600 group-hover:shadow-blue-500/50"
                            : sector.color === "green"
                              ? "from-green-500 to-green-600 group-hover:shadow-green-500/50"
                              : sector.color === "purple"
                                ? "from-purple-500 to-purple-600 group-hover:shadow-purple-500/50"
                                : sector.color === "indigo"
                                  ? "from-indigo-500 to-indigo-600 group-hover:shadow-indigo-500/50"
                                  : "from-pink-500 to-pink-600 group-hover:shadow-pink-500/50"
                      } text-white group-hover:scale-110`}
                    >
                      {sector.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                      {sector.title}
                    </h3>

                    <p className="text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {sector.desc}
                    </p>

                    <div className="space-y-2">
                      {sector.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-400 group-hover:text-purple-300 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-green-400 mr-3"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
