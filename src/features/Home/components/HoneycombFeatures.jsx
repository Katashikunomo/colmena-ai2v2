"use client"

/* =========================
HoneycombFeatures - Circular rotating layout with hover controls and particle effects
========================= */
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaChartLine,
  FaBrain,
  FaUsers,
  FaRobot,
  FaDatabase,
  FaLightbulb,
  FaSync,
  FaBolt,
  FaShieldAlt,
  FaHeadset,
  FaChartBar,
  FaUserFriends,
} from "react-icons/fa"
import useIsMobile from "../hooks/useIsMobile"
import Logo from "../../../assets/logo_morado_dorado.png"

// Hook para detectar si el viewport es >= md (768px en Tailwind)
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false)
  useEffect(() => {
    const check = () => setIsMdUp(window.innerWidth >= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  return isMdUp
}

const HoneycombFeatures = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(0)
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [clickedFeature, setClickedFeature] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringSection, setIsHoveringSection] = useState(false)
  const isMobile = useIsMobile()
  const isMdUp = useIsMdUp()

  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 30; i++) {
        const colors = ["#ffffff", "#c084fc", "#8b5cf6"] // white, light purple, purple
        const sizes = [2, 4, 6] // small, medium, large
        newParticles.push({
          id: i,
          x: Math.random() < 0.5 ? Math.random() * 20 : 80 + Math.random() * 20, // left 20% or right 20%
          y: 100 + Math.random() * 20,
          size: sizes[Math.floor(Math.random() * sizes.length)],
          speed: Math.random() * 1.5 + 0.8,
          opacity: Math.random() * 0.6 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
    const interval = setInterval(generateParticles, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <FaChartLine />,
      title: "Analytics Avanzado",
      description: "Métricas en tiempo real y reportes detallados",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <FaBrain />,
      title: "AI Conversacional",
      description: "Chatbots inteligentes que aprenden de cada interacción",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FaUsers />,
      title: "Gestión de Equipos",
      description: "Colaboración fluida entre agentes y supervisores",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <FaRobot />,
      title: "Automatización Total",
      description: "Flujos de trabajo automatizados para máxima eficiencia",
      color: "from-pink-500 to-pink-700",
    },
    {
      icon: <FaDatabase />,
      title: "Sincronización de Datos",
      description: "Integración perfecta con tus sistemas existentes",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: <FaLightbulb />,
      title: "Insights Inteligentes",
      description: "Descubre patrones ocultos en tus conversaciones",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      icon: <FaSync />,
      title: "Tiempo Real",
      description: "Actualizaciones instantáneas en todos los canales",
      color: "from-cyan-500 to-cyan-700",
    },
    {
      icon: <FaBolt />,
      title: "Respuesta Rápida",
      description: "Tiempos de respuesta de milisegundos",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: <FaShieldAlt />,
      title: "Seguridad Avanzada",
      description: "Encriptación end-to-end y cumplimiento GDPR",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <FaHeadset />,
      title: "Soporte 24/7",
      description: "Asistencia continua para tu equipo",
      color: "from-teal-500 to-teal-700",
    },
    {
      icon: <FaChartBar />,
      title: "Reportes Dinámicos",
      description: "Visualizaciones interactivas de rendimiento",
      color: "from-violet-500 to-violet-700",
    },
    {
      icon: <FaUserFriends />,
      title: "CRM Integrado",
      description: "Gestión completa de relaciones con clientes",
      color: "from-emerald-500 to-emerald-700",
    },
  ]

  const getCircularPosition = (index, total, radius) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2 // Start from top (-90 degrees)
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  }

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

  const handleFeatureInteraction = (index) => {
    if (isMobile) {
      setClickedFeature(clickedFeature === index ? null : index)
    } else {
      setHoveredFeature(index)
    }
  }

  return (
    <div
      id="features"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full shadow-lg"
            style={{
              backgroundColor: particle.color,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            initial={{ y: "100vh" }}
            animate={{
              y: "-20vh",
              x: [0, Math.sin(particle.id) * 30, 0],
              opacity: [particle.opacity, particle.opacity * 0.7, 0],
            }}
            transition={{
              duration: particle.speed * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              x: {
                duration: particle.speed * 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      {/* Patrón de colmena */}
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

      {/* Features en círculo */}
      <div className="relative w-full h-full flex items-center justify-center">
        {features.map((feature, index) => {
          const radius = isMobile ? 160 : 320
          const position = getCircularPosition(index, features.length, radius)
          const isActive = isMobile ? clickedFeature === index : hoveredFeature === index

          return (
            <motion.div
              key={index}
              className="absolute honeycomb-item interactive-element cursor-pointer"
              style={{
                left: `calc(${isMdUp ? "47%" : "44%"} + ${position.x}px)`,
                top: `calc(47% + ${position.y}px)`,
                transform: "translate(-60%, -60%)", // Center the element itself
                margin: " auto",
              }}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: 180,
              }}
              animate={
                index < visibleFeatures
                  ? {
                      opacity: 1,
                      scale: isActive ? 1.4 : 1,
                      rotate: isHoveringSection ? 0 : [0, 360],
                      zIndex: isActive ? 20 : 1,
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                      rotate: 180,
                    }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 12,
                rotate: {
                  duration: isHoveringSection ? 0.5 : 15,
                  repeat: isHoveringSection ? 0 : Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
              whileHover={
                !isMobile
                  ? {
                      scale: 1.4,
                      zIndex: 20,
                      transition: { duration: 0.4 },
                    }
                  : {}
              }
              onHoverStart={() => !isMobile && setHoveredFeature(index)}
              onHoverEnd={() => !isMobile && setHoveredFeature(null)}
              onClick={() => handleFeatureInteraction(index)}
            >
              <div className="relative">
                <svg width="60" height="60" viewBox="0 0 70 70" className="md:w-20 md:h-20 drop-shadow-2xl">
                  <defs>
                    <linearGradient id={`featureGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={feature.color.split(" ")[1]?.replace("to-", "")} />
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

        {/* Centro */}
        <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-center">
            <motion.div
              className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-white/30 via-white to-white/50 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 mb-4 mx-auto backdrop-blur-sm"
              animate={{
                rotate: [0, 360],
                scale: hoveredFeature !== null || clickedFeature !== null ? 1.1 : 1,
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 0.3 },
              }}
            >
              <img
                src={Logo || "/placeholder.svg"}
                alt="Colmena-Ai"
                className="w-12 h-12 md:w-20 md:h-20 object-contain"
              />
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">AI Avanzada</h3>
            <p className="text-gray-300 max-w-xs text-sm md:text-base px-4">
              Tecnología de vanguardia para automatizar y optimizar tu negocio
            </p>
          </div>
        </div>
      </div>

      {/* Tooltip flotante: hover (desktop) y click (mobile) */}
      {((hoveredFeature !== null && !isMobile) || (clickedFeature !== null && isMobile)) && (
        <motion.div
          className="fixed pointer-events-none z-30"
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
                className={`w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${
                  features[isMobile ? clickedFeature : hoveredFeature].color
                } flex items-center justify-center text-white text-xs md:text-sm mr-2 md:mr-3`}
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
    </div>
  )
}

export default HoneycombFeatures
