"use client"

import { Row, Col, Card, Button, Typography } from "antd"
import { ContactsOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { FaGlobe, FaRocket, FaChartLine } from "react-icons/fa"

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
        className="absolute bottom-40 right-20 w-16 h-16 bg-yellow-300 rounded-lg opacity-30"
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

export default function Contact() {
  return (
    <div className="relative pt-24">
      <FloatingShapes />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
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
                <ContactsOutlined className="text-white text-3xl" />
              </motion.div>
            </div>

            <Title level={1} className="!mb-6 !text-4xl md:!text-5xl font-bold text-gray-800">
              Hablemos de tu{" "}
              <span className="bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
                Proyecto
              </span>
            </Title>
            <Paragraph className="!text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte a transformar tus datos en ventaja competitiva. Contáctanos y descubre cómo
              Colmena puede impulsar tu negocio.
            </Paragraph>
          </motion.div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="!rounded-3xl shadow-xl border-2 border-purple-100 !h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <FaGlobe className="text-white text-2xl" />
                    </div>
                    <Title level={3} className="!mb-6 !text-2xl font-bold text-gray-800">
                      Información de Contacto
                    </Title>

                    <div className="space-y-6 text-left">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                          <span className="text-yellow-600 font-bold">📧</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Email</div>
                          <div className="text-gray-600">contacto@colmena.com</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <span className="text-purple-600 font-bold">📱</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Teléfono</div>
                          <div className="text-gray-600">+1 (555) 123-4567</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                          <span className="text-yellow-600 font-bold">🌍</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Ubicación</div>
                          <div className="text-gray-600">Global - Oficinas en 15+ países</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>

            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="!rounded-3xl shadow-xl border-2 border-yellow-100 !h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <FaRocket className="text-white text-2xl" />
                    </div>
                    <Title level={3} className="!mb-6 !text-2xl font-bold text-gray-800">
                      Comienza Hoy
                    </Title>

                    <div className="space-y-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="primary"
                          size="large"
                          icon={<FaRocket />}
                          className="!w-full !h-14 !text-lg font-semibold !rounded-xl !bg-gradient-to-r !from-purple-600 !to-purple-700 !border-none shadow-lg"
                        >
                          Solicitar Demo Gratuita
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="large"
                          icon={<FaChartLine />}
                          className="!w-full !h-14 !text-lg font-semibold !rounded-xl !border-2 !border-yellow-400 !text-yellow-600 hover:!bg-yellow-50"
                        >
                          Ver Casos de Éxito
                        </Button>
                      </motion.div>

                      <Paragraph className="!text-sm text-gray-500 !mt-6">
                        🔒 Tus datos están seguros con nosotros. Cumplimos con los más altos estándares de seguridad.
                      </Paragraph>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}
