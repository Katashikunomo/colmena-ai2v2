import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, useLocation, Navigate, matchPath } from "react-router-dom"
// import {Header , Footer}  from "../layout"
import { ScrollToTop } from "../components/ScrollToTop"
import {
  LoadingFallback,
  PublicPageLoader,
  DashboardLoader,
  AuthLoader,
  ContentLoader,
  SkeletonLoader,
  ProgressLoader,
} from "../components/loaders/LoadingComponents"
import {Toaster} from  "sonner" 

// Lazy load page components ------- Rutas generales de pagina 

const Home = lazy(() => import("../pages/PageHome"))
const About = lazy(() => import("../pages/PageAbout"))
const Contact = lazy(() => import("../pages/PageContact"))
const Header = lazy(() => import("../layout/Header"))
const Footer = lazy(() => import("../layout/Footer"))


// NotFound component
const NotFound = () => {
//   const { user } = useAuth()

//   if (user && user.token) {
//     return <Navigate to="/portaldashboard" />
//   }


  return <div className="flex items-center justify-center h-screen text-xl font-bold">La página no existe</div>
}

const PublicLayout = ({ children }) => {
    // Altura del header según tu diseño (80px cuando no está scrolled)
    const headerHeight = 80;
  
    return (
      <>
        <div className="relative w-full max-w-screen overflow-hidden">
          <Header />
        </div>
  
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            className: "bg-purple-800 text-white",
            style: {
              background: "#6b46c1",
              color: "#fff",
            },
          }}
        />
  
  <div className="min-h-screen bg-gray-100 pt-20 md:pt-24 overflow-x-hidden">
  <Suspense fallback={<PublicPageLoader />}>{children}</Suspense>
</div>

  
        <Footer />
      </>
    );
  };
  


const RouteWithLoader = ({ children, loaderType = "default", message }) => {
  const getLoader = () => {
    switch (loaderType) {
      case "content":
        return <ContentLoader />
      case "skeleton":
        return <SkeletonLoader />
      case "progress":
        return <ProgressLoader message={message} />
      case "dashboard":
        return <DashboardLoader />
      case "auth":
        return <AuthLoader />
      case "public":
        return <PublicPageLoader />
      default:
        return <LoadingFallback />
    }
  }

  return <Suspense fallback={getLoader()}>{children}</Suspense>
}

const AppContent = () => {
//   const location = useLocation()

//   // Function to check if current path matches any pattern
//   const pathMatches = (patterns) => {
//     return patterns.some((pattern) => matchPath({ path: pattern, end: true }, location.pathname))
//   }


  // Determine which layout to use based on current path
  const getLayout = () => PublicLayout
    
  

  const Layout = getLayout()

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Public routes with specific loaders */}
          <Route
            path="/"
            element={
              <RouteWithLoader loaderType="public">
                <Home />
              </RouteWithLoader>
            }
          />
          <Route
            path="/about"
            element={
              <RouteWithLoader loaderType="public">
                <About />
              </RouteWithLoader>
            }
          />
          <Route
            path="/contact"
            element={
              <RouteWithLoader loaderType="public">
                <Contact />
              </RouteWithLoader>
            }
          />
          

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
