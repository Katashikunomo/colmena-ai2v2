import React from "react"

// Loader básico mejorado
export const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      <p className="text-gray-600 animate-pulse">Cargando...</p>
    </div>
  </div>
)

// Loader para páginas públicas
export const PublicPageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="flex flex-col items-center space-y-6 p-8">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Cargando página</h3>
        <p className="text-sm text-gray-500">Por favor espera un momento...</p>
      </div>
    </div>
  </div>
)

// Loader para dashboard/admin
export const DashboardLoader = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      </div>
      <p className="text-gray-600 font-medium">Cargando dashboard...</p>
    </div>
  </div>
)

// Loader para autenticación
export const AuthLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-xl shadow-xl">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
        <div className="absolute inset-0 rounded-full border-t-4 border-blue-600 animate-spin"></div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">Verificando acceso</h3>
        <p className="text-sm text-gray-500 mt-1">Autenticando usuario...</p>
      </div>
    </div>
  </div>
)

// Loader para recursos/contenido
export const ContentLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-green-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-700">Cargando contenido</h3>
        <p className="text-gray-500 mt-2">Preparando recursos...</p>
      </div>
    </div>
  </div>
)

// Loader con skeleton para listas/tablas
export const SkeletonLoader = () => (
  <div className="p-6 space-y-4">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex space-x-4">
            <div className="rounded-full bg-gray-200 h-10 w-10"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Loader con progreso simulado
export const ProgressLoader = ({ message = "Cargando..." }) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-lg shadow-lg max-w-sm w-full mx-4">
        <div className="w-16 h-16 relative">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
              className="text-blue-500 transition-all duration-300 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-700">{Math.round(progress)}%</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-600 font-medium">{message}</p>
        </div>
      </div>
    </div>
  )
}
