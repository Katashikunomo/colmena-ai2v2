"use client"

import { Row, Col, Typography } from "antd"
import { motion } from "framer-motion"
import { FaBrain, FaLightbulb, FaUsers, FaShieldAlt as FaShield, FaStar } from "react-icons/fa"

const { Title, Paragraph } = Typography

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-lg opacity-30"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default function About() {
  return (
    <div className="relative pt-24">
      <FloatingShapes />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <FaBrain className="text-white text-3xl" />
              </motion.div>
            </div>

            <Title level={1} className="!mb-6 !text-4xl md:!text-5xl font-bold text-gray-800">
              Sobre{" "}
              <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
                Colmena
              </span>
            </Title>
            <Paragraph className="!text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos pioneros en Business Intelligence, transformando datos complejos en insights accionables que
              impulsan el crecimiento empresarial.
            </Paragraph>
          </motion.div>

          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src="/data-analytics-team.png"
                    alt="Equipo Colmena trabajando"
                    className="w-full rounded-3xl shadow-2xl"
                  />
                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 shadow-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="text-center">
                      <FaStar className="text-white text-2xl mb-2" />
                      <div className="text-white font-bold text-lg">5 años</div>
                      <div className="text-yellow-100 text-sm">Experiencia</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Col>

            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Title level={2} className="!mb-8 !text-3xl font-bold text-gray-800">
                  Nuestra{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
                    Misión
                  </span>
                </Title>

                <div className="space-y-6">
                  {[
                    {
                      icon: <FaLightbulb className="text-2xl" />,
                      title: "Innovación Constante",
                      description:
                        "Desarrollamos tecnologías de vanguardia que mantienen a nuestros clientes a la vanguardia del mercado.",
                      color: "yellow",
                    },
                    {
                      icon: <FaUsers className="text-2xl" />,
                      title: "Enfoque Humano",
                      description:
                        "Creemos que la tecnología debe servir a las personas, no al revés. Diseñamos soluciones intuitivas y accesibles.",
                      color: "purple",
                    },
                    {
                      icon: <FaShield className="text-2xl" />,
                      title: "Confianza Total",
                      description:
                        "La seguridad y privacidad de los datos de nuestros clientes es nuestra máxima prioridad.",
                      color: "yellow",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          item.color === "purple"
                            ? "bg-gradient-to-br from-purple-500 to-purple-600"
                            : "bg-gradient-to-br from-yellow-500 to-yellow-600"
                        }`}
                      >
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <div>
                        <Title level={4} className="!mb-2 !text-lg font-bold text-gray-800">
                          {item.title}
                        </Title>
                        <Paragraph className="!mb-0 text-gray-600 leading-relaxed">{item.description}</Paragraph>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}
