import { motion } from "framer-motion"
import { FaClock, FaPlug, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa"
import botwhatssai from "../../../assets/botwhatssai.png"
import dataanalisis from "../../../assets/dataanalisis.png"
import errorsux from "../../../assets/errorsux.png"
import AIassistence from "../../../assets/AI-assistence.gif"
import dataai from "../../../assets/dataai.mp4"
import dataai2 from "../../../assets/dataai2.mp4"
import AnimatedMedia from "./AnimatedMedia"
// import aiLottie from "../assets/ai-microinteraction.json"

export default function BusinesSection() {
     // Helper: Section wrapper (full viewport + snap)
  const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`min-h-screen relative flex items-center justify-center ${className}`}>
      {children}
    </section>
  )
  return (
    <Section
      id="presentation"
      className="bg-gradient-to-t from-black/10 via-purple-900/60 to-purple-600/30 pt-32 -mt-8 z-0"
    >
      <div className="max-w-7xl mx-auto px-4 relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Transformamos tu{" "}
            <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Negocio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            En Colmena AI transformamos la manera en que tu negocio recibe pedidos, gestiona solicitudes y selecciona
            talento. Conectamos la inteligencia artificial con WhatsApp API para que cada interacción sea más rápida,
            precisa y eficiente, sin importar tu sector.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* WhatsApp Integration Feature - Respuesta Instantánea */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 text-white shadow-lg">
                  <FaClock className="text-2xl" />
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-400/30 backdrop-blur-sm">
                  <span className="text-green-400 font-medium">Respuesta Instantánea</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Atiende las 24 horas
                <span className="block bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                  Sin Demoras
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nuestro sistema de AI atiende a tus clientes las 24 horas sin demoras ni esperas. Se integra
                perfectamente con WhatsApp API para automatizar respuestas, procesar pedidos y gestionar consultas
                de manera natural y eficiente.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm border border-green-500/30 backdrop-blur-sm">
                  Disponibilidad 24/7
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm border border-green-500/30 backdrop-blur-sm">
                  Respuestas Inmediatas
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm border border-green-500/30 backdrop-blur-sm">
                  Sin Tiempos de Espera
                </span>
              </div>
            </div>
            {/* <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-8 border border-green-500/30 backdrop-blur-lg shadow-2xl">
                <img
                  src={botwhatssai}
                  alt="WhatsApp AI Integration"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                es gif
                AIassistence
              </div>
            </motion.div> */}
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>

  <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-4 border border-green-500/30 backdrop-blur-lg shadow-2xl">
    {/* Opción A: Lottie (micro-interaction) */}
    {/* <AnimatedMedia
      lottieData={aiLottie}
      alt="AI Assistant micro-interaction"
      width="360px"
      height="240px"
      className="rounded-2xl overflow-hidden"
      poster={poster}
    /> */}

    {/* Opción B: Video loop (WebM) - usa si tienes un hero loop más complejo */}
    {/*
    <AnimatedMedia
      srcWebm={webmPath}
      srcMp4={mp4Path}
      poster={poster}
      alt="AI Dashboard loop"
      width="100%"
      height="220px"
      className="rounded-2xl overflow-hidden"
    />
    */}

    {/* Opción C: GIF/WebP fallback */}
    
    <AnimatedMedia
      srcWebp={AIassistence}
      srcGif={AIassistence}
      poster={AIassistence}
      alt="AI small loop"
      width="40%"
      height="auto"
    />
   

    <div className="mt-4 text-white font-semibold text-lg">AI Assistance</div>
    <div className="text-sm text-gray-300">Procesamiento en tiempo real · Visualización de modelos</div>
  </div>
</motion.div>

          </motion.div>

          {/* Integration Feature - Integración Perfecta */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* <motion.div
              className="relative order-2 lg:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-lg shadow-2xl">
                <img
                  src={dataanalisis}
                  alt="Analytics Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div> */}
                                    <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>

  <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-4 border border-green-500/30 backdrop-blur-lg shadow-2xl">
    {/* Opción A: Lottie (micro-interaction) */}
    {/* <AnimatedMedia
      lottieData={aiLottie}
      alt="AI Assistant micro-interaction"
      width="360px"
      height="240px"
      className="rounded-2xl overflow-hidden"
      poster={poster}
    /> */}

    {/* Opción B: Video loop (WebM) - usa si tienes un hero loop más complejo */}
    
    <AnimatedMedia
      srcWebm={dataai2}
      srcMp4={dataai2}
      poster={dataai2}
      alt="AI Dashboard loop"
      width="100%"
      height="220px"
      className="rounded-2xl overflow-hidden"
    />
   

    {/* Opción C: GIF/WebP fallback */}
    
    {/* <AnimatedMedia
      srcWebp={dataai}
      srcGif={dataai}
      poster={dataai}
      alt="AI small loop"
      width="40%"
      height="auto"
    /> */}
   

    <div className="mt-4 text-white font-semibold text-lg">AI - Integracion</div>
    <div className="text-sm text-gray-300">Procesamiento de integración de datos</div>
  </div>
</motion.div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg">
                  <FaPlug className="text-2xl" />
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-400/20 border border-purple-400/30 backdrop-blur-sm">
                  <span className="text-purple-400 font-medium">Integración Perfecta</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Se conecta fácilmente
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Con tus Sistemas
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Se conecta fácilmente con WhatsApp y tus sistemas actuales. Obtén insights detallados sobre el
                rendimiento de tu negocio con métricas clave y tendencias en tiempo real.
              </p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                  <span className="text-gray-300">Integración con WhatsApp API</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                  <span className="text-gray-300">Conexión con tus sistemas existentes (CRM, ERP, PDV, Software administrativo para restaurantes, bares, cafeterías, estéticas, entre muchas mas Integraciones)</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                  <span className="text-gray-300">Configuración simple y rápida</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-700 text-white shadow-lg">
                  <FaExclamationTriangle className="text-2xl" />
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-400/20 border border-red-400/30 backdrop-blur-sm">
                  <span className="text-red-400 font-medium">Menos Errores</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Reduce errores y mejora
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Cada Experiencia
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Reduce errores y mejora la experiencia de cada cliente. Colmena AI se adapta a tu infraestructura
                existente, integrándose con CRM, sistemas de inventario, plataformas de pago y más con total precisión.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm border border-red-500/30 backdrop-blur-sm">
                  Cero Errores Humanos
                </span>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm border border-red-500/30 backdrop-blur-sm">
                  Respuestas Consistentes
                </span>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm border border-red-500/30 backdrop-blur-sm">
                  Calidad Garantizada
                </span>
              </div>
            </div>
            {/* <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative  bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-8 border border-red-500/30 backdrop-blur-lg shadow-2xl">
                <img
                  src={errorsux}
                  alt="Error Reduction System"
                  className="lg:w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div> */}
                        <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-purple-500/30 rounded-3xl blur-3xl animate-pulse"></div>

  <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-4 border border-green-500/30 backdrop-blur-lg shadow-2xl">
    {/* Opción A: Lottie (micro-interaction) */}
    {/* <AnimatedMedia
      lottieData={aiLottie}
      alt="AI Assistant micro-interaction"
      width="360px"
      height="240px"
      className="rounded-2xl overflow-hidden"
      poster={poster}
    /> */}

    {/* Opción B: Video loop (WebM) - usa si tienes un hero loop más complejo */}
    
    <AnimatedMedia
      srcWebm={dataai}
      srcMp4={dataai}
      poster={dataai}
      alt="AI Dashboard loop"
      width="100%"
      height="220px"
      className="rounded-2xl overflow-hidden"
    />
   

    {/* Opción C: GIF/WebP fallback */}
    
    {/* <AnimatedMedia
      srcWebp={dataai}
      srcGif={dataai}
      poster={dataai}
      alt="AI small loop"
      width="40%"
      height="auto"
    /> */}
   

    <div className="mt-4 text-white font-semibold text-lg">AI - Integracion</div>
    <div className="text-sm text-gray-300">Procesamiento de integración de datos</div>
  </div>
</motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-700 text-white shadow-lg">
                  <FaCheckCircle className="text-2xl" />
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-400/30 backdrop-blur-sm">
                  <span className="text-blue-400 font-medium">Disponibilidad Total</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Siempre disponible para
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Tu Negocio
                </span>
              </h3>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                Garantizamos disponibilidad total para tu negocio. Nuestro sistema nunca se detiene, asegurando que cada
                oportunidad de venta sea capturada y cada cliente reciba la atención que merece.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <motion.div
                  className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime Garantizado</div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Atención Continua</div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
                  <div className="text-gray-300 text-sm">Días de Inactividad</div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
                  <div className="text-gray-300 text-sm">Escalabilidad</div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white mb-4">Beneficios Clave:</h4>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <span className="text-gray-300">Sin interrupciones de servicio</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <span className="text-gray-300">Respaldo automático de datos</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <span className="text-gray-300">Monitoreo en tiempo real</span>
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white mb-4">Garantías:</h4>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <span className="text-gray-300">SLA de soporte</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <span className="text-gray-300">Entrega e implementación</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <span className="text-gray-300">Satisfacción</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
