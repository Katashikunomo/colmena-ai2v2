import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"
import { motion, AnimatePresence } from "framer-motion"
import logoColmena from "../components/loaders/logo_morado_dorado.png"

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const headerRef = useRef(null)

  const menu = [
    { key: "/", label: "Inicio" },
    // { key: "/about", label: "Nosotros" },
    { key: "/about", label: "Nosotros" },
    { key: "/contact", label: "Contacto" },
    // { key: "/contact", label: "Contacto" },
  ]

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (mobileOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleCloseMenu)
    return () => {
      document.removeEventListener("mousedown", handleCloseMenu)
    }
  }, [mobileOpen])

  useEffect(() => {
    if (mobileOpen) {
      setMobileOpen(false)
    }
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      if (y > lastY.current && y > 100) {
        setVisible(false)
        setMobileOpen(false)
      } else {
        setVisible(true)
      }
      lastY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const wrapperBgClass = scrolled
    ? "bg-gradient-to-r from-purple-900/50 via-white/20 to-black/20 backdrop-blur-md border-2 border-purple-700 shadow-sm shadow-purple-400"
    : "bg-gradient-to-r from-purple-900 via-purple-600 to-white/20 backdrop-blur-md"

  const baseHeaderHeight = scrolled ? 60 : 80
  const headerStyle = { maxWidth: "800px" }

  const isActive = (path) => location.pathname === path

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -Math.min(baseHeaderHeight + 12, 96) }}
        transition={{ duration: 0.33, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 md:px-0 "
      >
        <div
          className={`w-full md:w-[98%] mx-auto ${wrapperBgClass} shadow-xl transform-gpu transition-all duration-300
          ${visible ? "rounded-3xl" : "rounded-lg"}`}
          style={{ height: baseHeaderHeight, ...headerStyle }}
        >
          <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">
            {/* LOGO */}
            <button
              onClick={() => navigate("/")}
              aria-label="Ir a inicio"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-3xl flex items-center justify-center  from-white/90 via-white/90 to-white/60 shadow-sm shadow-white bg-gradient-to-br hover:shadow-lg hover:shadow-yellow-200 transition-all duration-200 select-none"
              
              >
                <img src={logoColmena} alt="Logo" className="w-full h-full" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden sm:block text-white font-bold text-lg select-none"
              >
                Colmena AI
              </motion.span>
            </button>

            {/* NAV Desktop */}
            <nav className="hidden md:flex gap-3 items-center">
              {menu.map((m) => {
                const active = isActive(m.key)
                return (
                  <Link
                    key={m.key}
                    to={m.key}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 select-none
                      ${
                        active
                          ? "text-white bg-gradient-to-r from-purple-600 to-purple-800 shadow-lg border-2"
                          : "text-white/95 hover:text-white hover:bg-white/10"
                      }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {m.label}
                  </Link>
                )
              })}
            </nav>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="p-2 rounded-lg text-white/95 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors"
              >
                <motion.div
                  key={mobileOpen ? "close" : "menu"}
                  initial={{ rotate: mobileOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: mobileOpen ? 90 : -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? (
                    <CloseOutlined style={{ fontSize: 20, color: "white" }} />
                  ) : (
                    <MenuOutlined style={{ fontSize: 20, color: "white" }} />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-screen h-screen z-50 md:hidden"
            style={{
              backdropFilter: "blur(5px)",
              background: "rgba(0,0,0,0.5)",
            }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-[80px] p-2"
            >
              <div className="bg-gradient-to-br from-purple-900/35 via-purple-700/95 to-purple-600/95 backdrop-blur-md shadow-xl p-4 rounded-lg">
                <div className="flex flex-col gap-2">
                  {menu.map((m) => {
                    const active = isActive(m.key)
                    return (
                      <motion.div key={m.key} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          to={m.key}
                          onClick={() => setMobileOpen(false)}
                          className={`w-full block px-4 py-3 rounded-md text-left transition-colors duration-200 select-none
                              ${
                                active
                                  ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold shadow-lg"
                                  : "text-white/95 hover:bg-white/10"
                              }`}
                          aria-current={active ? "page" : undefined}
                        >
                          {m.label}
                        </Link>
                      </motion.div>
                    )
                  })}

                  {/* info extra */}
                  <div className="mt-4 border-t border-white/10 pt-4 text-white/80 text-sm">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div>Tel: +52 55 0000 0000</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-1"
                    >
                      Correo: hola@colmena.mx
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
