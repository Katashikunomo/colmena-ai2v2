import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const GalaxyBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate minimal floating particles for subtle effect
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main galaxy gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/40 via-purple-800/20 via-blue-900/15 to-blue-800/10" />

      {/* Secondary gradient for depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-transparent to-blue-600/10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Subtle rotating glow effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-conic from-purple-500/10 via-blue-500/5 via-purple-400/10 to-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Minimal floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle pulsing center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-2xl" />
      </motion.div>
    </div>
  )
}

// export { GalaxyBackground }
export default GalaxyBackground
