// import { useState, useEffect } from "react"

// export default function ColmenaLoader() {
//   const [loadingProgress, setLoadingProgress] = useState(0)
//   const [showSplit, setShowSplit] = useState(false)

//   useEffect(() => {
//     // Animación de progreso de carga
//     const progressInterval = setInterval(() => {
//       setLoadingProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressInterval)
//           setTimeout(() => setShowSplit(true), 500)
//           return 100
//         }
//         return prev + 2
//       })
//     }, 60)

//     return () => clearInterval(progressInterval)
//   }, [])

//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-800">
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(25)].map((_, i) => (
//           <div
//             key={`hex-cascade-${i}`}
//             className="absolute hexagon bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm animate-wave-cascade"
//             style={{
//               width: `${20 + Math.random() * 50}px`,
//               height: `${20 + Math.random() * 50}px`,
//               left: `${Math.random() * 100}%`,
//               top: `-10%`,
//               animationDelay: `${i * 1.2}s`,
//               animationDuration: `${18 + Math.random() * 5}s`,
//             }}
//           >
//             <div className="w-full h-full bg-gradient-to-br from-purple-400/15 to-transparent hexagon" />
//           </div>
//         ))}

//         <svg className="absolute inset-0 w-full h-full opacity-15">
//           {[...Array(12)].map((_, i) => (
//             <g key={`neural-${i}`}>
//               <circle
//                 cx={`${20 + ((i * 8) % 80)}%`}
//                 cy={`${15 + ((i * 12) % 70)}%`}
//                 r="2"
//                 fill="url(#nodeGradient)"
//                 className="animate-pulse"
//                 style={{ animationDelay: `${i * 0.4}s` }}
//               />
//               <line
//                 x1={`${20 + ((i * 8) % 80)}%`}
//                 y1={`${15 + ((i * 12) % 70)}%`}
//                 x2={`${20 + (((i + 1) * 8) % 80)}%`}
//                 y2={`${15 + (((i + 1) * 12) % 70)}%`}
//                 stroke="url(#lineGradient)"
//                 strokeWidth="0.5"
//                 className="animate-pulse"
//                 style={{ animationDelay: `${i * 0.3}s` }}
//               />
//             </g>
//           ))}
//           <defs>
//             <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
//               <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
//             </linearGradient>
//             <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
//               <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Contenedor principal del loader */}
//       <div className={`relative transition-all duration-1000 rounded-xl ${showSplit ? "scale-110" : "scale-100"}`}>
//         {/* Panel izquierdo */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-r from-black via-purple-900 to-purple-700 transition-transform duration-1000 ease-in-out ${showSplit ? "-translate-x-full" : "translate-x-0"}`}
//         />

//         {/* Panel derecho */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-l from-black via-purple-900 to-purple-700 transition-transform duration-1000 ease-in-out ${showSplit ? "translate-x-full" : "translate-x-0"}`}
//         />

//         {/* Contenido central */}
//         <div
//           className={`relative z-10 text-center p-12 transition-opacity duration-500 ${showSplit ? "opacity-0" : "opacity-100"}`}
//         >
//           {/* Logo hexagonal animado */}
//           <div className="relative mb-8">
//             <div className="flex justify-center items-center">
//               {/* Hexágonos de la colmena */}
//               <div className="relative">
//                 {/* Hexágono central */}
//                 <div className="w-16 h-16 bg-purple-500/30 backdrop-blur-sm border-2 border-purple-300/60 hexagon animate-pulse shadow-2xl shadow-purple-500/50">
//                   <div className="flex items-center justify-center h-full">
//                     <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-spin shadow-lg">
//                       <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1 animate-pulse"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hexágonos circundantes */}
//                 {[...Array(6)].map((_, i) => (
//                   <div
//                     key={i}
//                     className={`absolute w-12 h-12 bg-purple-600/20 backdrop-blur-sm border border-purple-400/40 hexagon animate-pulse shadow-lg shadow-purple-400/30`}
//                     style={{
//                       transform: `rotate(${i * 60}deg) translateY(-40px) rotate(-${i * 60}deg)`,
//                       animationDelay: `${i * 0.2}s`,
//                       animationDuration: "2s",
//                     }}
//                   >
//                     <div className="flex items-center justify-center h-full">
//                       <div className="w-2 h-2 bg-gradient-to-r from-purple-300 to-white rounded-full animate-pulse"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

         
//           {/* Título */}
//           <h1 className="text-5xl font-bold text-white mb-4 tracking-wider">
//             <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
//               C
//             </span>
//             <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
//               o
//             </span>
//             <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
//               l
//             </span>
//             <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>
//               m
//             </span>
//             <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>
//               e
//             </span>
//             <span className="inline-block animate-bounce" style={{ animationDelay: "0.5s" }}>
//               n
//             </span>
//             <span className="inline-block animate-bounce" style={{ animationDelay: "0.6s" }}>
//               a
//             </span>
//             <span className="mx-4 text-blue-200">
//               <span className="inline-block animate-bounce" style={{ animationDelay: "0.7s" }}>
//                 A
//               </span>
//               <span className="inline-block animate-bounce" style={{ animationDelay: "0.8s" }}>
//                 I
//               </span>
//             </span>
//           </h1>

//           {/* Subtítulo */}
//           <p className="text-purple-200/90 text-lg mb-8 animate-fade-in drop-shadow-md">
//             Inteligencia Artificial Colaborativa
//           </p>

//           {/* Barra de progreso */}
//           <div className="w-64 mx-auto mb-4">
//             <div className="w-full bg-purple-900/40 rounded-full h-2 backdrop-blur-sm border border-purple-700/30 shadow-inner">
//               <div
//                 className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out shadow-lg shadow-purple-500/50"
//                 style={{ width: `${loadingProgress}%` }}
//               />
//             </div>
//           </div>

//           {/* Porcentaje de carga */}
//           <div className="text-white/90 text-sm font-medium drop-shadow-md">{loadingProgress}%</div>

//           {/* Indicador de actividad */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {[...Array(3)].map((_, i) => (
//               <div
//                 key={i}
//                 className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"
//                 style={{
//                   animationDelay: `${i * 0.3}s`,
//                   animationDuration: "1.5s",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import logoLoader from "./logo_morado_dorado.png"

export default function SimpleLoader() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showSplit, setShowSplit] = useState(false)

  useEffect(() => {
    // Animación de progreso de carga
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setShowSplit(true), 500)
          return 100
        }
        return prev + 2
      })
    }, 70)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-800 rounded-3xl">
      {/* Contenedor principal del loader */}
      <div className={`relative transition-all duration-1000 rounded-3xl ${showSplit ? "scale-110" : "scale-100"}`}>
        {/* Panel izquierdo - para efecto de división */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black via-purple-900 to-purple-700 transition-transform duration-1000 rounded-3xl ease-in-out ${showSplit ? "-translate-x-full" : "translate-x-0"}`}
        />

        {/* Panel derecho - para efecto de división */}
        <div
          className={`absolute inset-0 bg-gradient-to-l from-black via-purple-900 to-purple-700 transition-transform duration-1000 rounded-3xl ease-in-out ${showSplit ? "translate-x-full" : "translate-x-0"}`}
        />

        {/* Contenido central */}
        <div
          className={`relative z-10 text-center p-12 transition-opacity duration-500 ${showSplit ? "opacity-0" : "opacity-100"}`}
        >
          {/* Logo principal */}
          <div className="relative mb-8">
            <div className="flex justify-center items-center">
              {/* 
                NOTA: Sí se puede partir la imagen durante la animación de apertura.
                Para esto, puedes usar dos divs con la misma imagen de fondo y aplicar
                transform: translateX() en direcciones opuestas, similar a los paneles.
                También puedes usar clip-path para dividir la imagen por la mitad.
              */}
              <img src={logoLoader} alt="Logo" className="w-24 h-24 animate-pulse drop-shadow-2xl" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-5xl font-bold text-white mb-4 tracking-wider">
            <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
              C
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
              o
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
              l
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>
              m
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>
              e
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.5s" }}>
              n
            </span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.6s" }}>
              a
            </span>
            <span className="mx-4 text-blue-200">
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.7s" }}>
                A
              </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: "0.8s" }}>
                I
              </span>
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-purple-200/90 text-lg mb-8 animate-fade-in drop-shadow-md">
            Inteligencia Artificial Colaborativa
          </p>

          {/* Barra de progreso */}
          <div className="w-64 mx-auto mb-4">
            <div className="w-full bg-purple-900/40 rounded-full h-2 backdrop-blur-sm border border-purple-700/30 shadow-inner">
              <div
                className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out shadow-lg shadow-purple-500/50"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>

          {/* Porcentaje de carga */}
          <div className="text-white/90 text-sm font-medium drop-shadow-md">{loadingProgress}%</div>

          {/* Indicador de actividad */}
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
