import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button, Card } from "antd"
import {
  FaWhatsapp,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaRobot,
  FaShieldAlt,
  FaClock,
  FaPlug,
  FaCalendarCheck,
  FaCheckCircle,
  FaUtensils,
  FaStethoscope,
  FaShoppingCart,
  FaWrench,
  FaBuilding,
  FaUserTie,
  FaBrain,
  FaDatabase,
  FaLightbulb,
  FaSync,
  FaBolt,
  FaEye,
  FaUserFriends,
  FaChartBar,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa"
import GalaxyBackground from "./galaxy-background"
import { FiCheckCircle, FiSmartphone } from "react-icons/fi"
import BussinesSection from "./components/BussinesSection"
import BeneficiosPorSector from "./components/BeneficiosPorsector"
import Logo from "../../assets/logo_morado_dorado.png"

/* =========================
   Mobile Detection Hook
   ========================= */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

/* =========================
   CustomCursor
   ========================= */
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.closest(".honeycomb-item, .interactive-element")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-30 mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-80">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-white to-purple-200 rounded-full"
          animate={{
            scale: isHovering ? [1, 1.2, 1] : 1,
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 0.3 },
            rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        />
      </div>
    </motion.div>
  )
}



/* =========================
   InteractiveBubbles
   ========================= */
const InteractiveBubbles = () => {
  const features = [
    { icon: <FaChartLine />, title: "Analytics", color: "from-purple-500 to-purple-700" },
    { icon: <FaBrain />, title: "AI Learning", color: "from-blue-500 to-blue-700" },
    { icon: <FaUsers />, title: "Team Collab", color: "from-green-500 to-green-700" },
    { icon: <FaRobot />, title: "Automation", color: "from-pink-500 to-pink-700" },
    { icon: <FaDatabase />, title: "Data Sync", color: "from-indigo-500 to-indigo-700" },
    { icon: <FaLightbulb />, title: "Insights", color: "from-yellow-500 to-yellow-700" },
    { icon: <FaSync />, title: "Real-time", color: "from-cyan-500 to-cyan-700" },
    { icon: <FaBolt />, title: "Fast Response", color: "from-orange-500 to-orange-700" },
  ]

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <div className="relative w-80 h-80">
        {features.map((feature, index) => {
          const angle = (index * 360) / features.length
          const radius = 120
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              whileHover={{
                scale: 1.8,
                zIndex: 10,
                rotate: 360,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                y: { duration: 2 + index * 0.2, repeat: Number.POSITIVE_INFINITY },
                rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                hover: { duration: 0.3 },
              }}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-xl shadow-2xl cursor-pointer border-2 border-white/20`}
              >
                {feature.icon}
              </div>
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0"
                whileHover={{ opacity: 1 }}
              >
                {feature.title}
              </motion.div>
            </motion.div>
          )
        })}

        {/* Centro del domo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30">
          <FaEye className="text-white text-2xl" />
        </div>
      </div>
    </div>
  )
}

/* =========================
   AutomationImprovements - Enhanced with more animations
   ========================= */
const AutomationImprovements = () => {
  const [activeCard, setActiveCard] = useState(0)
  const isMobile = useIsMobile()

  const improvements = [
    {
      title: "Respuesta Instantánea",
      description: "Reduce el tiempo de respuesta de horas a segundos",
      metric: "98% más rápido",
      icon: <FaBolt />,
      color: "from-yellow-500 to-orange-500",
      image: "/instant-response-dashboard.png",
    },
    {
      title: "Gestión de Leads",
      description: "Captura y califica leads automáticamente 24/7",
      metric: "300% más leads",
      icon: <FaUserFriends />,
      color: "from-green-500 to-emerald-500",
      image: "/lead-management-automation.png",
    },
    {
      title: "Análisis Predictivo",
      description: "Predice comportamiento del cliente con IA",
      metric: "85% precisión",
      icon: <FaChartBar />,
      color: "from-purple-500 to-violet-500",
      image: "/predictive-analytics-dashboard.png",
    },
    {
      title: "Soporte Multicanal",
      description: "Integra WhatsApp, web, email en una plataforma",
      metric: "5 canales unidos",
      icon: <FaHeadset />,
      color: "from-blue-500 to-cyan-500",
      image: "/multichannel-support-platform.png",
    },
  ]

  const handleCardInteraction = (index) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? -1 : index)
    } else {
      setActiveCard(index)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {improvements.map((improvement, index) => (
          <motion.div
            key={index}
            className="relative"
            onHoverStart={() => !isMobile && setActiveCard(index)}
            onClick={() => handleCardInteraction(index)}
            whileHover={!isMobile ? { y: -10 } : {}}
            animate={{
              y: [0, -5, 0],
              rotateY: [0, 2, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-black border-purple-500/30 p-6 h-full relative overflow-hidden cursor-pointer">
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20"
                animate={{
                  scale: activeCard === index ? 1.2 : 1,
                  rotateY: activeCard === index ? 15 : 0,
                  rotateX: activeCard === index ? -10 : 0,
                  z: activeCard === index ? 50 : 0,
                }}
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={improvement.image || "/placeholder.svg"}
                  alt={improvement.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${improvement.color} flex items-center justify-center text-white text-xl mb-4`}
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
              >
                {improvement.icon}
              </motion.div>

              <h3 className="text-white font-bold text-lg mb-2">{improvement.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{improvement.description}</p>

              <div
                className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${improvement.color} text-white text-sm font-semibold`}
              >
                {improvement.metric}
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                animate={{
                  x: activeCard === index ? ["-100%", "100%"] : "-100%",
                  opacity: activeCard === index ? [0, 1, 0] : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {activeCard === index && (
                <motion.div
                  className="absolute inset-0 border-2 border-purple-400/50 rounded-lg pointer-events-none"
                  animate={{
                    borderColor: ["rgba(168, 85, 247, 0.5)", "rgba(168, 85, 247, 1)", "rgba(168, 85, 247, 0.5)"],
                  }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* =========================
   HoneycombEcosystem - Enhanced mobile support
   ========================= */
const HoneycombEcosystem = () => {
  const [visibleItems, setVisibleItems] = useState(0)
  const [centerText, setCenterText] = useState("Ecosistema Integrado")
  const [clickedItem, setClickedItem] = useState(null)
  const isMobile = useIsMobile()

  const items = [
    {
      id: 1,
      image: "/business-automation.png",
      title: "Automation",
      x: { mobile: 0, md: 0 },
      y: { mobile: -140, md: -180 },
    },
    {
      id: 2,
      image: "/customer-service-interaction.png",
      title: "Service",
      x: { mobile: 120, md: 156 },
      y: { mobile: -70, md: -90 },
    },
    {
      id: 3,
      image: "/analytics-dashboard.png",
      title: "Analytics",
      x: { mobile: 120, md: 156 },
      y: { mobile: 70, md: 90 },
    },
    {
      id: 4,
      image: "/team-collaboration.png",
      title: "Team",
      x: { mobile: 0, md: 0 },
      y: { mobile: 140, md: 180 },
    },
    {
      id: 5,
      image: "/sales-growth-chart.png",
      title: "Sales",
      x: { mobile: -120, md: -156 },
      y: { mobile: 70, md: 90 },
    },
    {
      id: 6,
      image: "/ai-technology.png",
      title: "AI Tech",
      x: { mobile: -120, md: -156 },
      y: { mobile: -70, md: -90 },
    },
    {
      id: 7,
      image: "/placeholder-mnxje.png",
      title: "Mobile",
      x: { mobile: 180, md: 260 },
      y: { mobile: 0, md: 0 },
    },
    {
      id: 8,
      image: "/data-security-concept.png",
      title: "Security",
      x: { mobile: -180, md: -260 },
      y: { mobile: 0, md: 0 },
    },
    {
      id: 9,
      image: "/integration-concept.png",
      title: "Integration",
      x: { mobile: 90, md: 130 },
      y: { mobile: -110, md: -156 },
    },
    {
      id: 10,
      image: "/single-cumulus-cloud.png",
      title: "Cloud",
      x: { mobile: -90, md: -130 },
      y: { mobile: -110, md: -156 },
    },
    {
      id: 11,
      image: "/api-concept.png",
      title: "API",
      x: { mobile: 90, md: 130 },
      y: { mobile: 110, md: 156 },
    },
    {
      id: 12,
      image: "/webhook-diagram.png",
      title: "Webhooks",
      x: { mobile: -90, md: -130 },
      y: { mobile: 110, md: 156 },
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const ecosystemSection = document.getElementById("ecosystem")
      if (ecosystemSection) {
        const rect = ecosystemSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
          const newVisibleItems = Math.floor(scrollProgress * items.length)
          setVisibleItems(newVisibleItems)
        } else if (rect.top > window.innerHeight || rect.bottom < 0) {
          setVisibleItems(0)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getResponsivePosition = (item) => {
    const isMobileView = window.innerWidth < 768
    return {
      x: isMobileView ? item.x.mobile : item.x.md,
      y: isMobileView ? item.y.mobile : item.y.md,
    }
  }

  const handleItemInteraction = (item) => {
    if (isMobile) {
      setClickedItem(clickedItem === item.id ? null : item.id)
      setCenterText(clickedItem === item.id ? "Ecosistema Integrado" : item.title)
    } else {
      setCenterText(item.title)
    }
  }

  return (
    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon
                points="30,1 55,15 55,37 30,51 5,37 5,15"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="hexGradient">
              <stop offset="0%" stopColor="#8b5cf6">
                <animate
                  attributeName="stop-color"
                  values="#8b5cf6;#06b6d4;#8b5cf6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#06b6d4">
                <animate
                  attributeName="stop-color"
                  values="#06b6d4;#8b5cf6;#06b6d4"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            <animate attributeName="x" values="0;30;0" dur="4s" repeatCount="indefinite" />
            <animate attributeName="y" values="0;26;0" dur="4s" repeatCount="indefinite" />
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Items de la colmena */}
      {items.map((item, index) => {
        const position = getResponsivePosition(item)
        return (
          <motion.div
            key={item.id}
            className="absolute honeycomb-item cursor-pointer"
            style={{
              left: `calc(50% + ${position.x}px)`,
              top: `calc(50% + ${position.y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -180,
              y: position.y + 100,
            }}
            animate={
              index < visibleItems
                ? {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: position.y,
                  }
                : {
                    opacity: 0,
                    scale: 0,
                    rotate: -180,
                    y: position.y + 100,
                  }
            }
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={
              !isMobile
                ? {
                    scale: 1.3,
                    zIndex: 10,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }
                : {}
            }
            onHoverStart={() => !isMobile && setCenterText(item.title)}
            onHoverEnd={() => !isMobile && setCenterText("Ecosistema Integrado")}
            onClick={() => handleItemInteraction(item)}
          >
            <div className="relative">
              <svg width="60" height="60" viewBox="0 0 60 60" className="md:w-20 md:h-20 drop-shadow-2xl">
                <defs>
                  <linearGradient id={`hexGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <polygon
                  points="30,3 52,16 52,43 30,57 8,43 8,16"
                  fill={`url(#hexGrad-${item.id})`}
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-8 md:-bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm whitespace-nowrap pointer-events-none"
                animate={{
                  opacity: (isMobile && clickedItem === item.id) || !isMobile ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.div>
            </div>
          </motion.div>
        )
      })}

      {/* Centro del ecosistema */}
      <motion.div
        className="relative z-10 text-center"
        key={centerText}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 mb-4">
          <FaEye className="text-white text-2xl md:text-4xl" />
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{centerText}</h3>
        <p className="text-gray-300 max-w-xs text-xs md:text-sm px-4">
          {centerText === "Ecosistema Integrado"
            ? "Conecta todas tus herramientas en una plataforma unificada"
            : `Potencia tu negocio con ${centerText}`}
        </p>
      </motion.div>
    </div>
  )
}

/* =========================
   HoneycombFeatures - Enhanced mobile support
   ========================= */
const HoneycombFeatures = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(0)
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [clickedFeature, setClickedFeature] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const isMobile = useIsMobile()

  const features = [
    {
      icon: <FaChartLine />,
      title: "Analytics Avanzado",
      description: "Métricas en tiempo real y reportes detallados",
      color: "from-purple-500 to-purple-700",
      x: { mobile: 0, md: 0 },
      y: { mobile: -150, md: -200 },
    },
    {
      icon: <FaBrain />,
      title: "IA Conversacional",
      description: "Chatbots inteligentes que aprenden de cada interacción",
      color: "from-blue-500 to-blue-700",
      x: { mobile: 130, md: 173 },
      y: { mobile: -75, md: -100 },
    },
    {
      icon: <FaUsers />,
      title: "Gestión de Equipos",
      description: "Colaboración fluida entre agentes y supervisores",
      color: "from-green-500 to-green-700",
      x: { mobile: 130, md: 173 },
      y: { mobile: 75, md: 100 },
    },
    {
      icon: <FaRobot />,
      title: "Automatización Total",
      description: "Flujos de trabajo automatizados para máxima eficiencia",
      color: "from-pink-500 to-pink-700",
      x: { mobile: 0, md: 0 },
      y: { mobile: 150, md: 200 },
    },
    {
      icon: <FaDatabase />,
      title: "Sincronización de Datos",
      description: "Integración perfecta con tus sistemas existentes",
      color: "from-indigo-500 to-indigo-700",
      x: { mobile: -130, md: -173 },
      y: { mobile: 75, md: 100 },
    },
    {
      icon: <FaLightbulb />,
      title: "Insights Inteligentes",
      description: "Descubre patrones ocultos en tus conversaciones",
      color: "from-yellow-500 to-yellow-700",
      x: { mobile: -130, md: -173 },
      y: { mobile: -75, md: -100 },
    },
    {
      icon: <FaSync />,
      title: "Tiempo Real",
      description: "Actualizaciones instantáneas en todos los canales",
      color: "from-cyan-500 to-cyan-700",
      x: { mobile: 200, md: 300 },
      y: { mobile: 0, md: 0 },
    },
    {
      icon: <FaBolt />,
      title: "Respuesta Rápida",
      description: "Tiempos de respuesta de milisegundos",
      color: "from-orange-500 to-orange-700",
      x: { mobile: -200, md: -300 },
      y: { mobile: 0, md: 0 },
    },
    {
      icon: <FaShieldAlt />,
      title: "Seguridad Avanzada",
      description: "Encriptación end-to-end y cumplimiento GDPR",
      color: "from-red-500 to-red-700",
      x: { mobile: 110, md: 150 },
      y: { mobile: -130, md: -173 },
    },
    {
      icon: <FaHeadset />,
      title: "Soporte 24/7",
      description: "Asistencia continua para tu equipo",
      color: "from-teal-500 to-teal-700",
      x: { mobile: -110, md: -150 },
      y: { mobile: -130, md: -173 },
    },
    {
      icon: <FaChartBar />,
      title: "Reportes Dinámicos",
      description: "Visualizaciones interactivas de rendimiento",
      color: "from-violet-500 to-violet-700",
      x: { mobile: 110, md: 150 },
      y: { mobile: 130, md: 173 },
    },
    {
      icon: <FaUserFriends />,
      title: "CRM Integrado",
      description: "Gestión completa de relaciones con clientes",
      color: "from-emerald-500 to-emerald-700",
      x: { mobile: -110, md: -150 },
      y: { mobile: 130, md: 173 },
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features")
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
          const newVisibleFeatures = Math.floor(scrollProgress * features.length)
          setVisibleFeatures(newVisibleFeatures)
        } else if (rect.top > window.innerHeight || rect.bottom < 0) {
          setVisibleFeatures(0)
        }
      }
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const getResponsivePosition = (feature) => {
    const isMobileView = window.innerWidth < 768
    return {
      x: isMobileView ? feature.x.mobile : feature.x.md,
      y: isMobileView ? feature.y.mobile : feature.y.md,
    }
  }

  const handleFeatureInteraction = (index) => {
    if (isMobile) {
      setClickedFeature(clickedFeature === index ? null : index)
    } else {
      setHoveredFeature(index)
    }
  }

  return (
    <div className="relative w-full h-[700px] md:h-[900px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
              <polygon points="40,1 70,20 70,57 40,76 10,57 10,20" fill="none" stroke="#8b5cf6" strokeWidth="1">
                <animate attributeName="stroke" values="#8b5cf6;#06b6d4;#8b5cf6" dur="2s" repeatCount="indefinite" />
              </polygon>
              <line x1="40" y1="1" x2="40" y2="76" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3">
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </line>
            </pattern>
            <animateTransform
              attributeName="patternTransform"
              type="translate"
              values="0,0;0,69;0,0"
              dur="4s"
              repeatCount="indefinite"
            />
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>
      </div>

      {/* Features hexagonales */}
      {features.map((feature, index) => {
        const position = getResponsivePosition(feature)
        const isActive = isMobile ? clickedFeature === index : hoveredFeature === index

        return (
          <motion.div
            key={index}
            className="absolute honeycomb-item interactive-element cursor-pointer"
            style={{
              left: `calc(50% + ${position.x}px)`,
              top: `calc(50% + ${position.y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: 180,
              y: position.y - 50,
            }}
            animate={
              index < visibleFeatures
                ? {
                    opacity: 1,
                    scale: isActive ? 1.4 : 1,
                    rotate: 0,
                    y: position.y,
                    zIndex: isActive ? 20 : 1,
                  }
                : {
                    opacity: 0,
                    scale: 0,
                    rotate: 180,
                    y: position.y - 50,
                  }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            whileHover={
              !isMobile
                ? {
                    scale: 1.4,
                    zIndex: 20,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.4 },
                  }
                : {}
            }
            onHoverStart={() => !isMobile && setHoveredFeature(index)}
            onHoverEnd={() => !isMobile && setHoveredFeature(null)}
            onClick={() => handleFeatureInteraction(index)}
          >
            <div className="relative">
              <svg width="70" height="70" viewBox="0 0 70 70" className="md:w-24 md:h-24 drop-shadow-2xl">
                <defs>
                  <linearGradient id={`featureGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={feature.color.split(" ")[1].replace("to-", "")} />
                    <stop offset="100%" stopColor={feature.color.split(" ")[2]} />
                  </linearGradient>
                  <filter id={`glow-${index}`}>
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <polygon
                  points="35,3 60,19 60,51 35,67 10,51 10,19"
                  fill={`url(#featureGrad-${index})`}
                  stroke="white"
                  strokeWidth="2"
                  filter={isActive ? `url(#glow-${index})` : "none"}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-2xl">
                {feature.icon}
              </div>

              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/50"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </div>
          </motion.div>
        )
      })}

      {((hoveredFeature !== null && !isMobile) || (clickedFeature !== null && isMobile)) && (
        <motion.div
          className={`${isMobile ? "fixed" : "fixed"} pointer-events-none z-30`}
          style={
            isMobile
              ? {
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }
              : {
                  left: mousePosition.x + 20,
                  top: mousePosition.y - 50,
                }
          }
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-black/95 backdrop-blur-md text-white p-3 md:p-4 rounded-xl shadow-2xl border border-purple-500/30 max-w-xs">
            <div className="flex items-center mb-2">
              <div
                className={`w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${features[isMobile ? clickedFeature : hoveredFeature].color} flex items-center justify-center text-white text-xs md:text-sm mr-2 md:mr-3`}
              >
                {features[isMobile ? clickedFeature : hoveredFeature].icon}
              </div>
              <h4 className="font-bold text-xs md:text-sm">
                {features[isMobile ? clickedFeature : hoveredFeature].title}
              </h4>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              {features[isMobile ? clickedFeature : hoveredFeature].description}
            </p>
          </div>
        </motion.div>
      )}

      {/* Centro de características */}
      <div className="relative z-10 text-center">
        <motion.div
          className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-purple-300/60 via-purple-300 to-purple-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 mb-4 mx-auto"
          animate={{
            rotate: [0, 360],
            scale: hoveredFeature !== null || clickedFeature !== null ? 1.1 : 1,
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 0.3 },
          }}
        >
          {/* <FaBrain className="text-white text-xl md:text-3xl" /> */}
          <img src={Logo} alt="Colmena-Ai" />
        </motion.div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">IA Avanzada</h3>
        <p className="text-gray-300 max-w-xs text-xs md:text-sm px-4">
          Tecnología de vanguardia para automatizar y optimizar tu negocio
        </p>
      </div>
    </div>
  )
}

/* =========================
   FloatingShapes
   ========================= */
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/30 rounded-full"
        animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-400/20 rounded-lg"
        animate={{ y: [0, 25, 0], x: [0, -20, 0], rotate: [0, -90, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-600/25 to-blue-400/20 rounded-full"
        animate={{ y: [0, -35, 0], scale: [1, 1.4, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}

/* =========================
   FloatingMessageCards
   ========================= */
const FloatingMessageCards = ({ scrollY }) => {
  const messages = [
    { text: "¡Pedido confirmado!", type: "success", delay: 0 },
    { text: "Consulta respondida", type: "info", delay: 0.5 },
    { text: "Cliente satisfecho", type: "success", delay: 1 },
    { text: "Venta automatizada", type: "success", delay: 1.5 },
    { text: "Soporte 24/7", type: "info", delay: 2 },
  ]

  const y1 = useTransform(scrollY, [0, 800], [0, -300])
  const y2 = useTransform(scrollY, [0, 800], [0, -200])
  const y3 = useTransform(scrollY, [0, 800], [0, -400])
  const x1 = useTransform(scrollY, [0, 800], [0, 150])
  const x2 = useTransform(scrollY, [0, 800], [0, -100])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          style={{
            y: index % 3 === 0 ? y1 : index % 3 === 1 ? y2 : y3,
            x: index % 2 === 0 ? x1 : x2,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 200 - 100,
            y: Math.random() * 300 + 100,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0.8],
            rotate: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            delay: message.delay,
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
          }}
          className={`absolute ${
            index === 0
              ? "top-10 right-20"
              : index === 1
                ? "top-32 left-16"
                : index === 2
                  ? "top-48 right-8"
                  : index === 3
                    ? "top-64 left-24"
                    : "top-80 right-16"
          }`}
        >
          <div
            className={`px-4 py-2 rounded-2xl shadow-2xl backdrop-blur-sm border ${
              message.type === "success"
                ? "bg-gradient-to-r from-green-500/90 to-emerald-500/90 text-white border-green-400/50"
                : "bg-gradient-to-r from-purple-500/90 to-violet-500/90 text-white border-purple-400/50"
            }`}
          >
            <p className="text-sm font-medium">{message.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* =========================
   PhoneWithMessages
   ========================= */
const PhoneWithMessages = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -50])
  const rotate = useTransform(scrollY, [0, 1000], [0, 2])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { damping: 20, stiffness: 120 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { damping: 20, stiffness: 120 })

  const messages = [
    { text: "¡Hola! ¿Cómo puedo ayudarte hoy?", type: "bot", delay: 0 },
    { text: "Quiero información sobre sus productos", type: "user", delay: 0.5 },
    { text: "¡Perfecto! Te envío nuestro catálogo completo", type: "bot", delay: 1 },
    { text: "¿Tienes alguna promoción disponible?", type: "user", delay: 1.5 },
    { text: "¡Sí! Tenemos 20% de descuento este mes", type: "bot", delay: 2 },
  ]

  return (
    <motion.div
      style={{ y, rotateZ: rotate }}
      className="relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
      }}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <FloatingMessageCards scrollY={scrollY} />

      {/* Phone mockup */}
      <motion.div
        className="relative w-60 h-[500px] sm:w-72  sm:h-[540px] mx-auto mt-22 z-40"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Phone frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black rounded-[3rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-gradient-to-b from-gray-100 to-white rounded-[2.5rem] overflow-hidden relative">
            {/* Phone screen header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 flex items-center">
              <motion.div
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <FaWhatsapp className="text-green-500 text-xl" />
              </motion.div>
              <div>
                <div className="font-semibold text-white">Mi Empresa</div>
                <div className="text-green-100 text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                  en línea
                </div>
              </div>
            </div>

            {/* Messages container */}
            <div className="p-4 space-y-3 h-full bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.type === "bot" ? -50 : 50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: message.delay, duration: 0.5, type: "spring", stiffness: 100 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <motion.div
                    className={`max-w-xs px-4 py-2 rounded-2xl shadow-lg ${message.type === "bot" ? "bg-white text-gray-800 rounded-bl-sm border border-gray-200" : "bg-gradient-to-r from-green-500 to-green-600 text-white rounded-br-sm"}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-sm">{message.text}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced floating stats around phone */}
        <motion.div
          className="absolute -top-4 -right-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-3 shadow-2xl border border-green-200"
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="flex items-center">
            <FaWhatsapp className="text-green-500 text-xl mr-2" />
            <div>
              <div className="font-bold text-green-600">98%</div>
              <div className="text-xs text-gray-600">Respuesta</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 bg-gradient-to-br from-white to-purple-50 rounded-2xl p-3 shadow-2xl border border-purple-200"
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <div className="flex items-center">
            <FaRobot className="text-purple-600 text-xl mr-2" />
            <div>
              <div className="font-bold text-purple-600">24/7</div>
              <div className="text-xs text-gray-600">Automatizado</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 -left-20 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-3 shadow-2xl border border-blue-200"
          animate={{ x: [0, -5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{ scale: 1.15 }}
        >
          <div className="flex items-center">
            <FaChartLine className="text-blue-600 text-xl mr-2" />
            <div>
              <div className="font-bold text-blue-600">300%</div>
              <div className="text-xs text-gray-600">Más ventas</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/* =========================
   ParallaxLayer (reusable)
   ========================= */
function ParallaxLayer({ scrollY, speed = 0.25, children, className = "" }) {
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const transform = useTransform(scrollY, [0, 2000], [0, -2000 * speed])
  const spring = useSpring(transform, { damping: 25, stiffness: 100 })

  return (
    <motion.div style={prefersReduced ? {} : { y: spring }} className={className}>
      {children}
    </motion.div>
  )
}

/* =========================
   StarParticles - Purple star particles for Hero
   ========================= */
const StarParticles = () => {
  const particles = Array.from({ length: 250 }, (_, i) => ({
    id: i,
    x: Math.random() * 400,
    y: Math.random() * 100,
    size: Math.random() * 17 + 4,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: Math.random() * 1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {particles.map((particle) => (
          <motion.g key={particle.id}>
           
            {/* Glowing effect */}
            <motion.circle
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r={particle.size * 0.1}
              fill="#8b5cf6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, particle.opacity * 0.6, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.2,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r={particle.size * 0.5}
              fill="#8b5cf6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, particle.opacity * 0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.animationDelay,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

/* =========================
   Home (principal) - OPTIMIZED
   ========================= */
export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()

  // Helper: Section wrapper (full viewport + snap)
  const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`min-h-screen relative flex items-center justify-center ${className}`}>
      {children}
    </section>
  )

  return (
    <>
      <CustomCursor />
      

      <div className="relative bg-black  ">
        {/* HERO - Updated with radial gradient and star particles */}
        <Section id="hero" className="overflow-hidden z-40 pt-36 -mt-24">
          <div className="absolute inset-0 " />
          <div className="absolute inset-0  bg-gradient-to-br from-transparent via-purple-800/20 to-purple-500/30" />

          <div className="absolute inset-0 pointer-events-none">
            <StarParticles />
            <GalaxyBackground/>
          </div>

          <div className="relative z-0 w-full ">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="backdrop-blur-md p-4 rounded-3xl border-2 border-white"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mr-4 shadow-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaWhatsapp className="text-white text-2xl" />
                    </motion.div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-white">Colmena AI</h1>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                    Automatiza tu negocio con{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">
                      IA y WhatsApp
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg mb-6 text-gray-300">
                    Procesos claros, rápidos y sin errores. Todo en un solo sistema que trabaja 24/7 para ti.
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <Button className="h-12 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg border-none interactive-element hover:!bg-yellow-600 hover:!text-white">
                      <FaRocket className="mr-2" /> Conoce nuestros servicios
                    </Button>

                    <Button className="h-12 px-6 rounded-lg border-2 border-purple-600 text-white bg-transparent interactive-element hover:!bg-purple-900 hover:!text-white hover:!border-white">
                      <FaWhatsapp className="mr-2" /> Solicita tu demo
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <PhoneWithMessages />
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        {/* NEW SECTION - Company Presentation */}
        {/* <Section id="presentation" className="bg-gradient-to-t from-black/10 via-purple-900/60 to-purple-600/30 pt-32 -mt-8 z-0">
          <div className="max-w-7xl mx-auto px-4 relative  w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Transformamos tu{" "}
                <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Negocio
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
                En Colmena IA transformamos la manera en que tu negocio recibe pedidos, gestiona solicitudes y
                selecciona talento. Conectamos la inteligencia artificial con WhatsApp para que cada interacción sea más
                rápida, precisa y eficiente, sin importar tu sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <FaClock className="text-2xl" />, title: "Respuesta instantánea", desc: "Atiende sin esperar" },
                {
                  icon: <FaPlug className="text-2xl" />,
                  title: "Integración fácil",
                  desc: "Conecta con tus sistemas actuales",
                },
                {
                  icon: <FaCalendarCheck className="text-2xl" />,
                  title: "Disponibilidad total",
                  desc: "365 días del año, 24/7",
                },
                {
                  icon: <FaCheckCircle className="text-2xl" />,
                  title: "Menos errores",
                  desc: "Todo claro desde el primer mensaje",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="interactive-element"
                >
                  <Card className="text-center rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border border-purple-500/20 p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section> */}

        <BussinesSection />

        {/* SERVICES - Updated with new service content */}
        <Section id="services" className="bg-gradient-to-br from-black to-purple-900/20">
          <div className="absolute inset-0 opacity-20">
            <FloatingShapes />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="mb-6 text-3xl sm:text-4xl font-bold text-white">
                Nuestros{" "}
                <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Servicios
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "PedidoSmart",
                  eslogan: "Simple. Rápido. Perfecto.",
                  description:
                    "Recibe pedidos por WhatsApp de forma automática y sin confusiones. Ideal para restaurantes, cafeterías y negocios de comida que quieren agilizar su servicio y evitar errores.",
                  icon: <FaUtensils className="text-3xl" />,
                  color: "from-orange-500 to-red-500",
                },
                {
                  title: "FlowSmart",
                  eslogan: "Resuelto en segundos.",
                  description:
                    "Gestiona solicitudes, cotizaciones y procesos de cualquier sector con rapidez y precisión. Diseñado para empresas que quieren optimizar su atención y ahorrar tiempo en cada interacción.",
                  icon: <FaRobot className="text-3xl" />,
                  color: "from-purple-500 to-purple-700",
                },
                {
                  title: "TalentSmart",
                  eslogan: "Reclutamiento automatizado.",
                  description:
                    "Filtra, evalúa y preselecciona candidatos automáticamente. Ahorra horas de trabajo en RRHH y encuentra el mejor talento en menos tiempo.",
                  icon: <FaUserTie className="text-3xl" />,
                  color: "from-green-500 to-green-600",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="interactive-element"
                >
                  <Card className="h-full rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border border-purple-500/30 p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${service.color} text-white shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-purple-300 font-medium mb-4 italic">{service.eslogan}</p>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* NEW SECTION - How it works */}
        {/* <Section id="how-it-works" className="bg-gradient-to-br from-purple-900/20 to-black">
          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                ¿Cómo{" "}
                <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Funciona?
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { step: "1", title: "Conectamos tu negocio a WhatsApp API", icon: <FaPlug className="text-2xl" /> },
                { step: "2", title: "Configuramos tus procesos con IA", icon: <FaRobot className="text-2xl" /> },
                {
                  step: "3",
                  title: "Empiezas a recibir pedidos, solicitudes o candidatos listos para atender",
                  icon: <FaCheckCircle className="text-2xl" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <p className="text-white font-medium text-lg">{step.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg border-none interactive-element">
                <FaRocket className="mr-2" /> Quiero automatizar mi negocio
              </Button>
            </div>
          </div>
        </Section> */}

              {/* 4. Cómo funciona (3 pasos) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-purple-900 relative overflow-hidden w-[90%] rounded-3xl m-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                ¿Cómo{" "}
                <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Funciona?
                </span>
              </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              En solo 3 pasos simples, tu negocio estará automatizado y listo para crecer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Conectamos tu negocio a WhatsApp API",
                description: "Integramos tu sistema con WhatsApp de forma segura y rápida.",
                icon: <FiSmartphone className="w-8 h-8" />,
              },
              {
                step: "2",
                title: "Configuramos tus procesos con IA",
                description: "Personalizamos la inteligencia artificial según las necesidades de tu negocio.",
                icon: <FaBrain className="w-8 h-8" />,
              },
              {
                step: "3",
                title: "Empiezas a recibir pedidos, solicitudes o candidatos listos para atender",
                description: "Tu automatización comienza a trabajar inmediatamente.",
                icon: <FiCheckCircle className="w-8 h-8" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center text-white relative"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>

                {index < 2 && (
                  <motion.div
                    className="hidden md:block absolute top-10 -right-4 text-yellow-400"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <FaArrowRight className="w-6 h-6" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="large"
                icon={<FaRocket />}
                className="!h-16 !px-10 text-sm md:!text-lg font-bold !rounded-2xl !bg-gradient-to-r !from-yellow-500 !to-yellow-600 !border-none shadow-2xl hover:shadow-3xl !text-purple-800 m-auto"
                onClick={() => setActiveSection("contact")}
              >
                Quiero automatizar mi negocio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

        {/* NEW SECTION - Benefits by sector */}
        {/* <Section id="sectors" className="bg-gradient-to-br from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 pt-12">
                Beneficios por{" "}
                <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Sector
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaUtensils className="text-2xl" />,
                  title: "Restaurantes, cafés y taquerías",
                  desc: "Toma pedidos sin llamadas y sin errores, directo a cocina.",
                  color: "orange",
                },
                {
                  icon: <FaStethoscope className="text-2xl" />,
                  title: "Clínicas y consultorios",
                  desc: "Agenda y confirma citas automáticamente.",
                  color: "blue",
                },
                {
                  icon: <FaShoppingCart className="text-2xl" />,
                  title: "Retail y e-commerce",
                  desc: "Responde disponibilidad y opciones de entrega al instante.",
                  color: "green",
                },
                {
                  icon: <FaWrench className="text-2xl" />,
                  title: "Talleres y servicios técnicos",
                  desc: "Cotiza y confirma fechas sin interrumpir tu trabajo.",
                  color: "purple",
                },
                {
                  icon: <FaBuilding className="text-2xl" />,
                  title: "Oficinas y despachos",
                  desc: "Centraliza solicitudes y documentos sin perder información.",
                  color: "indigo",
                },
                {
                  icon: <FaUserTie className="text-2xl" />,
                  title: "RRHH y agencias de reclutamiento",
                  desc: "Recibe y filtra postulaciones en minutos.",
                  color: "pink",
                },
              ].map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="interactive-element"
                >
                  <Card className="rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border border-purple-500/20 p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm h-full">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br ${
                        sector.color === "orange"
                          ? "from-orange-500 to-orange-600"
                          : sector.color === "blue"
                            ? "from-blue-500 to-blue-600"
                            : sector.color === "green"
                              ? "from-green-500 to-green-600"
                              : sector.color === "purple"
                                ? "from-purple-500 to-purple-600"
                                : sector.color === "indigo"
                                  ? "from-indigo-500 to-indigo-600"
                                  : "from-pink-500 to-pink-600"
                      } text-white`}
                    >
                      {sector.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{sector.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{sector.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section> */}

        <BeneficiosPorSector />

      

        {/* ECOSYSTEM / HONEYCOMB - Kept existing */}
        {/* <Section id="ecosystem" className="bg-gradient-to-br from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Ecosistema{" "}
                <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Integrado
                </span>
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Una colmena de herramientas interconectadas que trabajan en perfecta armonía para potenciar tu negocio.
              </p>
            </motion.div>

            <HoneycombEcosystem />
          </div>
        </Section> */}

        {/* FEATURES / HONEYCOMB - Kept existing */}
        <Section id="features" className="bg-gradient-to-br from-purple-900/20 to-black pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Características{" "}
                <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                  Avanzadas
                </span>
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Descubre las capacidades avanzadas que hacen de Colmena la plataforma más completa del mercado.
              </p>
            </motion.div>

            <HoneycombFeatures />
          </div>
        </Section>

        {/* CTA FINAL - Simplified animations */}
       
      </div>
    </>
  )
}
