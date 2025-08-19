import { Row, Col, Typography, Space, Button } from "antd"
import { motion } from "framer-motion"
import { BsPhoneFlip } from "react-icons/bs"
import { useLocation, useNavigate } from "react-router-dom" // Importa los hooks necesarios
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaBrain,
  FaRocket,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa"
import { MdMarkEmailUnread } from "react-icons/md"
import logomorado from "../assets/logomorado.png"

const { Title, Paragraph, Text } = Typography

/* ========================= */
const ConnectedParticles = ({ enhanced = false }) => {
  const particles = Array.from({ length: enhanced ? 20 : 2 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (enhanced ? 6 : 4) + 2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {particles.map((particle, i) =>
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
                Math.pow(particle.y - otherParticle.y, 2),
            )
            if (distance < (enhanced ? 40 : 320)) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${otherParticle.x}%`}
                  y2={`${otherParticle.y}%`}
                  stroke="url(#gradient)"
                  strokeWidth={enhanced ? "2" : "1"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, enhanced ? 0.8 : 0.6, 0],
                  }}
                  transition={{
                    duration: enhanced ? 4 : 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              )
            }
            return null
          }),
        )}

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <defs>
          <radialGradient id="particleGradient">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function Footer() {
  const location = useLocation() // 1. Obtiene la ubicación actual
  const navigate = useNavigate() // 2. Inicializa la función de navegación

  // Define la función para manejar la navegación a /contact
  const handleNavigateToContact = () => {
    navigate("/contact")
  }

  // Verifica si el path actual es /contact para ocultar el CTA
  const showCta = location.pathname !== "/contact"

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white relative overflow-hidden">
      <div className="relative min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center relative overflow-hidden py-20">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/20 opacity-50">
            {/* <ConnectedParticles /> */}
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-purple-400/10 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-24 h-24 bg-green-400/10 rounded-full"
              animate={{ scale: [1, 0.8, 1], y: [0, -20, 0] }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>

          {/* Renderizado condicional del CTA */}
          {showCta && (
            <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-black/20 rounded-3xl p-8 md:p-12 border border-purple-500/30"
                whileHover={{
                  boxShadow: "0 0 50px rgba(168, 85, 247, 0.3)",
                }}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaWhatsapp className="text-white text-3xl" />
                  </motion.div>
                </div>

                <h2 className="text-white mb-4 text-2xl sm:text-3xl font-bold">
                  ¿Listo para Automatizar tu Negocio?
                </h2>
                <p className="text-purple-200 mb-8 text-lg">
                  Únete a más de 500 empresas que ya usan Colmena AI para
                  automatizar atención y ventas 24/7.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border-none interactive-element" onClick={()=> {navigate("/contact")}}>
                      <FaRocket className="mr-2" /> Comenzar Ahora
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="h-14 px-8 rounded-2xl border-2 border-white text-white bg-transparent interactive-element hover:bg-white/10" onClick={()=> {navigate("/contact")}}>
                      <FaShieldAlt className="mr-2" /> Solicitar Demo
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-5"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-5"
            animate={{ scale: [1, 0.8, 1], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        <div className="relative z-10 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-sm">
          <div className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <Row gutter={[48, 48]}>
                {/* Company Info */}
                <Col xs={24} md={8}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mr-3 shadow-lg"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        {/* <FaBrain className="text-purple-800 text-xl" /> */}
                        <img src={logomorado} alt="Colmena-AI" />
                      </motion.div>
                      <Title level={3} className="!text-white !mb-0 font-bold">
                        Colmena AI
                      </Title>
                    </div>

                    <Paragraph className="!text-gray-300 !mb-6 leading-relaxed">
                      Transformamos datos en decisiones inteligentes. Somos el
                      ecosistema que impulsa el crecimiento Tu negocio, resuelto
                      en segundos. Empieza hoy.
                    </Paragraph>

                    <Space size="large">
                      {[
                        { icon: <FaFacebook />, color: "hover:text-blue-400" },
                        { icon: <FaTwitter />, color: "hover:text-sky-400" },
                        {
                          icon: <FaLinkedin />,
                          color: "hover:text-blue-500",
                        },
                        {
                          icon: <FaInstagram />,
                          color: "hover:text-pink-400",
                        },
                      ].map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            type="text"
                            icon={social.icon}
                            className={`!text-gray-400 ${social.color} !text-xl !w-10 !h-10 !rounded-lg !bg-white !bg-opacity-10 hover:!bg-opacity-20 transition-all duration-300`}
                          />
                        </motion.div>
                      ))}
                    </Space>
                  </motion.div>
                </Col>

                {/* Services */}
                <Col xs={24} md={5}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Title level={4} className="!text-white !mb-6 font-bold">
                      Servicios
                    </Title>
                    <div className="space-y-3">
                      {[
                        "Análisis Avanzado",
                        "Machine Learning",
                        "Automatización",
                      ].map((service, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                          className="cursor-pointer"
                        >
                          <Text className="!text-gray-300 hover:!text-yellow-400 transition-colors duration-300">
                            {service}
                          </Text>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </Col>

                {/* Company */}
                <Col xs={24} md={5}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Title level={4} className="!text-white !mb-6 font-bold">
                      Empresa
                    </Title>
                    <div className="space-y-3">
                      {["Sobre Nosotros", "Contactanos"].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                          className="cursor-pointer"
                        >
                          <Text
                            className="!text-gray-300 hover:!text-yellow-400 transition-colors duration-300"
                            onClick={
                              item === "Contactanos"
                                ? handleNavigateToContact
                                : undefined
                            }
                          >
                            {item}
                          </Text>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </Col>

                {/* Contact */}
                <Col xs={24} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Title level={4} className="!text-white !mb-6 font-bold">
                      Contacto
                    </Title>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">
                            <MdMarkEmailUnread />{" "}
                          </span>
                        </div>
                        <Text className="!text-gray-300">
                          contacto@colmena-ai.com
                        </Text>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">
                            <BsPhoneFlip />{" "}
                          </span>
                        </div>
                        <Text className="!text-gray-300">
                          +1 (555) 123-4567
                        </Text>
                      </div>
                    </div>

                    <motion.div
                      className="mt-6"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="primary"
                        size="large"
                        className="!w-full !h-12 !rounded-xl !bg-gradient-to-r !from-purple-600 !to-purple-700 !border-none shadow-lg font-semibold"
                        onClick={handleNavigateToContact} // Asigna la función al evento onClick
                      >
                        Solicitar demo ahora
                      </Button>
                    </motion.div>
                  </motion.div>
                </Col>
              </Row>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 px-4 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <Row justify="space-between" align="middle" gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center md:justify-start"
                  >
                    <Text className="!text-gray-400">
                      © 2025 Colmena. Todos los derechos reservados.
                    </Text>
                  </motion.div>
                </Col>

                <Col xs={24} md={12}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center md:justify-end space-x-1"
                  >
                    <Text className="!text-gray-400 mr-2">
                      Visión por el futuro
                    </Text>
                    <Text className="!text-gray-400">
                      | para transformar datos en decisiones
                    </Text>
                  </motion.div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}