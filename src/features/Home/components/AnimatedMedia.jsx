// AnimatedMedia.jsx
"use client"
import React, { useEffect, useState } from "react"
import Lottie from "react-lottie-player"

/**
 * Props:
 * - lottieData: object (JSON) optional
 * - srcWebm: string optional
 * - srcMp4: string optional
 * - srcWebp: string optional (fallback)
 * - srcGif: string optional (fallback)
 * - poster: string optional (poster frame)
 * - alt: string
 */
export default function AnimatedMedia({
  lottieData,
  srcWebm,
  srcMp4,
  srcWebp,
  srcGif,
  poster,
  alt = "Animación",
  width = "100%",
  height = "auto",
  className = "",
}) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)")
    const handle = () => setReducedMotion(mq.matches)
    if (mq) {
      handle()
      mq.addEventListener ? mq.addEventListener("change", handle) : mq.addListener(handle)
      return () => (mq.removeEventListener ? mq.removeEventListener("change", handle) : mq.removeListener(handle))
    }
  }, [])

  // Prefer Lottie when provided (controlled by prefers-reduced-motion)
  if (lottieData) {
    return (
      <div className={`animated-media ${className}`} style={{ width, height }}>
        <Lottie
          animationData={lottieData}
          play={!reducedMotion}   // no autoplay if user prefers reduced motion
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    )
  }

  // Else prefer video WebM/MP4
  if (srcWebm || srcMp4) {
    return (
      <div className={`animated-media ${className}`} style={{ width, height }}>
        <video
          className="object-cover w-full h-full rounded-2xl"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          poster={poster}
          preload="metadata"
          // add aria-hidden if decorative
          aria-label={alt}
        >
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          {srcMp4 && <source src={srcMp4} type="video/mp4" />}
          {/* fallback: browser will show poster or inner content */}
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  // Fallback to WebP/GIF (picture)
  if (srcWebp || srcGif) {
    return (
      <div className={`animated-media m-auto ${className}`} style={{ width, height }}>
        <picture>
          {srcWebp && <source srcSet={srcWebp} type="image/webp" />}
          <img
            src={srcGif || poster}
            alt={alt}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
          />
        </picture>
      </div>
    )
  }

  // ultimate fallback: poster or empty box
  return (
    <div className={`animated-media ${className}`} style={{ width, height, background: "#0b1117", borderRadius: 12 }} aria-hidden>
      {poster ? <img src={poster} alt={alt} className="w-full h-full object-cover rounded-2xl" /> : null}
    </div>
  )
}
