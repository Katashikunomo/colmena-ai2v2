"use client"

import { motion } from "framer-motion"
import {
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaUser,
  FaBuilding,
  FaPaperPlane,
} from "react-icons/fa"
import { useState } from "react"
import { toast } from "sonner"

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-500/20 to-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    tipoServicio: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aquí puedes agregar la lógica para enviar el formulario
      // console.log("Datos del formulario:", formData)

      const response = await fetch("https://zwqt66thi8.execute-api.us-east-1.amazonaws.com/dev/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // console.log("Enviando datos al servidor...", response)

      const result = await response.json()
      // console.log("Respuesta del servidor:", result)
      if (!response.ok) {
        throw new Error(result.message || "Error al enviar el formulario")
      }else{
        // console.log("Formulario enviado exitosamente:", result)
        toast.success("¡Mensaje enviado exitosamente! Te contactaremos pronto.")
      }
      // Aquí puedes manejar la respuesta del servidor si es necesario
      // Mostrar mensaje de éxito al usuario
      

      // Resetear formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        tipoServicio: "",
        mensaje: "",
      })

      // alert("¡Mensaje enviado exitosamente! Te contactaremos pronto.")
    } catch (error) {
      // console.error("Error al enviar:", error)
      alert("Error al enviar el mensaje. Por favor intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden pt-36 -mt-32">
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-green-500 rounded-full mb-8 shadow-2xl"
              animate={{
                rotate: [0, 5, -5, 0],
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.4)",
                  "0 0 40px rgba(34, 197, 94, 0.4)",
                  "0 0 20px rgba(168, 85, 247, 0.4)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <FaEnvelope className="text-white text-3xl" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hablemos de tu{" "}
              <span className="bg-gradient-to-r from-purple-400 via-green-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Proyecto
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte a transformar tu negocio con AI. Contáctanos y descubre cómo podemos impulsar
              tu éxito.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-green-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-green-500 rounded-2xl mx-auto mb-8 shadow-lg">
                    <FaGlobe className="text-white text-3xl" />
                  </div>

                  <h3 className="text-3xl font-bold text-white text-center mb-8">Información de Contacto</h3>

                  <div className="space-y-6">
                    {[
                      {
                        icon: FaEnvelope,
                        label: "Email",
                        value: "contacto@colmena-ai.com",
                        color: "from-purple-500 to-purple-600",
                      },
                      {
                        icon: FaPhone,
                        label: "Teléfono",
                        value: "+1 (555) 123-4567",
                        color: "from-green-500 to-green-600",
                      },
                      // {
                      //   icon: FaGlobe,
                      //   label: "Ubicación",
                      //   value: "Global - Servicio 24/7",
                      //   color: "from-blue-500 to-blue-600",
                      // },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        whileHover={{ x: 10 }}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <item.icon className="text-white text-lg" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.label}</div>
                          <div className="text-gray-300">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 pb-16 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-purple-500 rounded-2xl mx-auto mb-8 shadow-lg">
                    <FaRocket className="text-white text-3xl" />
                  </div>

                  <h3 className="text-3xl font-bold text-white text-center mb-8">Comienza Hoy</h3>

                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full h-16 bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-3"
                      onClick={() => window.location.href = "https://t.me/Colmena01_bot"}
                    >
                      <FaRocket />
                      <span>Ir a Demo Gratuita</span>
                    </motion.button>

                    <div className="flex items-center justify-center space-x-2 mt-6 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                      <FaShieldAlt className="text-green-400" />
                      <p className="text-sm text-gray-300">
                        Tus datos están seguros. Cumplimos con los más altos estándares.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-green-500/5 rounded-3xl" />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-green-500 rounded-2xl mx-auto mb-6 shadow-lg">
                    <FaPaperPlane className="text-white text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Solicita tu Consulta Gratuita</h3>
                  <p className="text-gray-300">Completa el formulario y te contactaremos en menos de 24 horas</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white font-semibold flex items-center space-x-2">
                        <FaUser className="text-purple-400" />
                        <span>Nombre Completo *</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white font-semibold flex items-center space-x-2">
                        <FaEnvelope className="text-green-400" />
                        <span>Email *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white font-semibold flex items-center space-x-2">
                        <FaPhone className="text-blue-400" />
                        <span>Teléfono</span>
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="+52 (552) 250-3611"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white font-semibold flex items-center space-x-2">
                        <FaBuilding className="text-yellow-400" />
                        <span>Empresa</span>
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white font-semibold flex items-center space-x-2">
                      <FaRocket className="text-purple-400" />
                      <span>Tipo de Servicio *</span>
                    </label>
                    <select
                      name="tipoServicio"
                      value={formData.tipoServicio}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">
                        Selecciona un servicio
                      </option>
                      <option value="whatsapp-automation" className="bg-gray-800">
                        Automatización WhatsApp
                      </option>
                      <option value="ai-chatbot" className="bg-gray-800">
                        Chatbot con AI
                      </option>
                      <option value="crm-integration" className="bg-gray-800">
                        Integración CRM
                      </option>
                      <option value="custom-solution" className="bg-gray-800">
                        Solución Personalizada
                      </option>
                      <option value="consultation" className="bg-gray-800">
                        Consultoría
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white font-semibold">Mensaje *</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-16 bg-gradient-to-r from-purple-500 to-green-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Enviar Solicitud</span>
                      </>
                    )}
                  </motion.button>

                  <div className="flex items-center justify-center space-x-2 mt-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                    <FaShieldAlt className="text-green-400" />
                    <p className="text-sm text-gray-300 text-center">
                      Tus datos están protegidos. No compartimos información personal con terceros.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
