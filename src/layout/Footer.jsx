"use client"

import { Row, Col, Typography, Space, Button } from "antd"
import { motion } from "framer-motion"
import { BiPhone } from "react-icons/bi"
import { BsPhoneFlip } from "react-icons/bs"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaHeart, FaBrain } from "react-icons/fa"
import { MdEmail, MdMarkEmailUnread } from "react-icons/md"

const { Title, Paragraph, Text } = Typography

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Floating shapes */}
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

      <div className="relative z-10">
        {/* Main Footer Content */}
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
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <FaBrain className="text-purple-800 text-xl" />
                    </motion.div>
                    <Title level={3} className="!text-white !mb-0 font-bold">
                      Colmena AI
                    </Title>
                  </div>

                  <Paragraph className="!text-gray-300 !mb-6 leading-relaxed">
                    Transformamos datos en decisiones inteligentes. Somos el ecosistema de Business Intelligence que
                    impulsa el crecimiento de más de 500 empresas globalmente.
                  </Paragraph>

                  <Space size="large">
                    {[
                      { icon: <FaFacebook />, color: "hover:text-blue-400" },
                      { icon: <FaTwitter />, color: "hover:text-sky-400" },
                      { icon: <FaLinkedin />, color: "hover:text-blue-500" },
                      { icon: <FaInstagram />, color: "hover:text-pink-400" },
                    ].map((social, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
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
                      "Business Intelligence",
                      "Machine Learning",
                      "Visualización de Datos",
                      "Automatización",
                      "Consultoría BI",
                    ].map((service, index) => (
                      <motion.div key={index} whileHover={{ x: 5 }} className="cursor-pointer">
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
                    {["Sobre Nosotros", "Casos de Éxito", "Blog"].map(
                      (item, index) => (
                        <motion.div key={index} whileHover={{ x: 5 }} className="cursor-pointer">
                          <Text className="!text-gray-300 hover:!text-yellow-400 transition-colors duration-300">
                            {item}
                          </Text>
                        </motion.div>
                      ),
                    )}
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
                        <span className="text-white text-sm"><MdMarkEmailUnread /> </span>
                      </div>
                      <Text className="!text-gray-300">contacto@colmena.com</Text>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm"><BsPhoneFlip /> </span>
                      </div>
                      <Text className="!text-gray-300">+1 (555) 123-4567</Text>
                    </div>
                  </div>

                  <motion.div className="mt-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="primary"
                      size="large"
                      className="!w-full !h-12 !rounded-xl !bg-gradient-to-r !from-purple-600 !to-purple-700 !border-none shadow-lg font-semibold"
                    >
                      Comenzar Ahora
                    </Button>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8 px-4">
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
                  <Text className="!text-gray-400">© 2025 Colmena. Todos los derechos reservados.</Text>
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
                  <Text className="!text-gray-400 mr-2">Visión por el futuro</Text>
                  {/* <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <FaHeart className="text-red-500 mx-1" />
                  </motion.div> */}  |
                  <Text className="!text-gray-400">para transformar datos en decisiones</Text>
                </motion.div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </footer>
  )
}
