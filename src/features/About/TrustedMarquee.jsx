// // TrustedMarqueeStatic.jsx
// import React from "react";

// /**
//  * TrustedMarqueeStatic
//  *
//  * Props:
//  * - trustedCompanies: [{ name, logo, url? }]  // logos mostrados (default placeholder)
//  * - columns: number | null -> número fijo de columnas (opcional). Si null usa auto-fit responsivo.
//  * - gap: string -> Tailwind gap clases (ej: "gap-6")
//  * - logoHeight: string -> clase de tailwind para altura de logo (ej: "h-12")
//  * - maxWidth: string -> clase tailwind para ancho máximo del contenedor (ej: "max-w-6xl")
//  *
//  * Ejemplo:
//  * <TrustedMarqueeStatic trustedCompanies={companies} columns={5} gap="gap-6" logoHeight="h-12" />
//  */
// export default function TrustedMarquee({
//   trustedCompanies = [],
//   columns = null,
//   gap = "gap-6",
//   logoHeight = "h-12",
//   maxWidth = "max-w-[60rem]",
// }) {
//   const companies = trustedCompanies.length ? trustedCompanies : [{ name: "Placeholder", logo: "/placeholder.svg" }];


//   return (
//     <section
//       aria-label="Empresas confiables"
//       role="region"
//       className={`m-auto bg-black/40 backdrop-blur-sm rounded-xl ${maxWidth} px-4 py-6`}
//     >
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Confiado por</h3>
//         {/* pequeño subtítulo, opcional */}
//         <p className="text-sm text-gray-500 dark:text-gray-300">Empresas que han usado nuestro servicio</p>
//       </div>

//       <div
//         // className={`flex flex-row  ${gap}  items-center justify-center overflow-x-auto no-scrollbar rounded-2xl`}
//         className={`flex flex-row  ${gap}  items-center justify-center  rounded-2xl`}
//       >
//         {companies.map((c, i) => {
//           const wrapperClasses =
//             "group bg-gradient-to-br from-white/6 to-white/3 dark:from-white/3 dark:to-black/5 backdrop-blur-sm rounded-2xl border border-white/10 dark:border-white/6 p-4 flex items-center justify-center transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1 shadow-sm hover:shadow-lg focus-within:scale-[1.03] focus-within:-translate-y-1";

//           const inner = (
//             <div className={wrapperClasses} tabIndex={0} aria-label={c.name || `logo-${i}`}>
//               {c.logo ? (
//                 <img
//                   src={c.logo}
//                   alt={c.name ? `${c.name} logo` : `logo ${i + 1}`}
//                   className={`${logoHeight} w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 rounded-lg`}
//                   loading="lazy"
//                   decoding="async"
//                 />
//               ) : (
//                 // placeholder SVG simple (vector, ligero)
//                 <svg
//                   width="96"
//                   height="32"
//                   viewBox="0 0 96 32"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`${logoHeight} w-auto`}
//                   aria-hidden
//                 >
//                   <rect x="0" y="0" width="96" height="32" rx="8" fill="url(#g)" />
//                   <defs>
//                     <linearGradient id="g" x1="0" x2="1">
//                       <stop offset="0" stopColor="#e6e6e6" stopOpacity="0.5" />
//                       <stop offset="1" stopColor="#cccccc" stopOpacity="0.3" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               )}
//             </div>
//           );

//           // si hay url, renderizamos anchor para accesibilidad/SEO
//           return c.url ? (
//             <a
//               key={c.name + i}
//               href={c.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="outline-none"
//               aria-label={`Abrir sitio de ${c.name}`}
//             >
//               {inner}
//             </a>
//           ) : (
//             <div key={c.name + i}>{inner}</div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client"

import { useEffect, useState } from "react"
import { Sparkles, Star, Zap, Shield, Award, TrendingUp } from "lucide-react"

/**
 * TrustedMarquee - Enhanced with cool animations
 */
export default function TrustedMarquee({
  trustedCompanies = [],
  columns = null,
  gap = "gap-6",
  logoHeight = "h-12",
  maxWidth = "max-w-[60rem]",
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const defaultCompanies = [
    {
      name: "Microsoft",
      logo: "/placeholder.svg?height=48&width=120&text=Microsoft",
      icon: <Shield className="w-6 h-6" />,
    },
    { name: "Google", logo: "/placeholder.svg?height=48&width=120&text=Google", icon: <Star className="w-6 h-6" /> },
    {
      name: "Amazon",
      logo: "/placeholder.svg?height=48&width=120&text=Amazon",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    { name: "Apple", logo: "/placeholder.svg?height=48&width=120&text=Apple", icon: <Award className="w-6 h-6" /> },
    { name: "Meta", logo: "/placeholder.svg?height=48&width=120&text=Meta", icon: <Zap className="w-6 h-6" /> },
    {
      name: "Netflix",
      logo: "/placeholder.svg?height=48&width=120&text=Netflix",
      icon: <Sparkles className="w-6 h-6" />,
    },
  ]

  const companies = trustedCompanies.length ? trustedCompanies : defaultCompanies

  const duplicatedCompanies = [...companies, ...companies, ...companies]

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    x: Math.random() * 100,
    size: 2 + Math.random() * 4,
  }))

  return (
    <section
      aria-label="Empresas confiables"
      role="region"
      className={`relative m-auto bg-gradient-to-br from-slate-900/90 via-purple-900/20 to-slate-900/90 backdrop-blur-xl rounded-2xl ${maxWidth} px-6 py-8 overflow-hidden border border-white/10 shadow-2xl`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              bottom: "-10px",
              animation: `floatUp ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            <div className="absolute inset-0 w-6 h-6 bg-purple-400/20 rounded-full animate-ping" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Confiado por
          </h3>
        </div>
        <p className="text-sm text-purple-200/80 flex items-center gap-2">
          <Award className="w-4 h-4 text-yellow-400 animate-bounce" />
          Empresas líderes
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <div className="flex animate-marquee hover:pause-marquee">
          {duplicatedCompanies.map((company, index) => {
            const wrapperClasses = `
              group relative bg-gradient-to-br from-white/10 via-purple-500/5 to-white/5 
              backdrop-blur-sm rounded-xl border border-white/20 p-6 flex flex-col items-center justify-center 
              transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1
              shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl
              hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-blue-500/20
              min-w-[180px] mx-3 cursor-pointer
              hover:border-purple-400/50
            `

            return (
              <div key={`${company.name}-${index}`} className={wrapperClasses}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                <div className="absolute -top-2 -right-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-bounce">
                  {company.icon || <Star className="w-4 h-4" />}
                </div>

                <div className="relative mb-2">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className={`${logoHeight} w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 rounded-lg group-hover:brightness-110`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg" />
                </div>

                <span className="text-xs font-medium bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-white transition-all duration-300">
                  {company.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        @keyframes floatUp {
          0% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-100vh) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .pause-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
