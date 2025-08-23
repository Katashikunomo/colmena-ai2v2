"use client"

import React, { useState } from "react"
import { Card, Button, Typography, Row, Col } from "antd"
import { MessageCircle, Bot, Zap, Smartphone, MessageSquare, Wifi, Battery, Signal } from "lucide-react"
import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import videoMP4 from "../../../assets/COLMENA-AI-DEMO.mp4"

const { Title, Text, Paragraph } = Typography

export default function DemoSection() {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "IA Avanzada",
      description: "Respuestas inteligentes y contextuales",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Chat Natural",
      description: "Conversaciones fluidas y humanas",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Respuesta Rápida",
      description: "Procesamiento instantáneo de mensajes",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Multi-Plataforma",
      description: "Telegram, WhatsApp y más",
    },
  ]

  return (
    <div className="relative min-h-screen max-w-[1700px] rounded-3xl mb-32 mt-24 m-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <MessageSquare
          className="absolute top-20 left-10 w-8 h-8 text-purple-300 opacity-30 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <Bot
          className="absolute top-40 right-20 w-10 h-10 text-blue-300 opacity-30 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Zap
          className="absolute bottom-40 left-20 w-6 h-6 text-yellow-300 opacity-30 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Bot className="w-6 h-6 text-purple-400 animate-pulse" />
            <Text className="text-purple-300 font-medium">Colmena AI en Acción</Text>
          </div>

          <Title
            level={1}
            className="!text-white mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text "
          >
            Mira a Colmena Bot en Acción
          </Title>

          <Paragraph className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Descubre cómo nuestro chatbot inteligente revoluciona la comunicación empresarial con respuestas
            instantáneas y conversaciones naturales en Telegram y WhatsApp.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} align="middle" justify="center">
          <Col xs={24} lg={12}>
            <div className="flex justify-center">
              {/* Phone Frame */}
              <div className="relative w-80 h-[640px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Phone Screen */}
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Video Container - Full Screen */}
                  <div className="absolute inset-0">
                    <video
                      src={videoMP4}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      poster="/colmena-ai-chatbot-demo.png"
                    />
                  </div>

                  {/* Status Bar Overlay */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-2 bg-black/50 backdrop-blur-sm text-white text-sm z-10">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">9:41</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Signal className="w-4 h-4" />
                      <Wifi className="w-4 h-4" />
                      <Battery className="w-4 h-4" />
                    </div>
                  </div>

                  {/* App Header Overlay */}
                  <div className="absolute top-8 left-0 right-0 flex items-center gap-3 px-4 py-3 bg-purple-600/60 backdrop-blur-sm rounded-b-xl text-white z-10">
                    <FaTelegram className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Colmena Bot</div>
                      <div className="text-xs opacity-80">en línea</div>
                    </div>
                  </div>

                  {/* Platform Switch Indicator */}
                  <div className="absolute bottom-8 left-4 right-4 flex justify-center gap-2 z-10">
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/90 rounded-full backdrop-blur-sm">
                      <FaTelegram className="w-3 h-3 text-white" />
                      <Text className="text-white text-xs font-medium">Demo</Text>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/90 rounded-full backdrop-blur-sm opacity-60">
                      <FaWhatsapp className="w-3 h-3 text-white" />
                      <Text className="text-white text-xs font-medium">Próximamente</Text>
                    </div>
                  </div>

                  {/* Phone Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-10"></div>
                </div>

                {/* Phone Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[3rem] pointer-events-none"></div>
              </div>
            </div>
          </Col>

          {/* Features Section */}
          <Col xs={24} lg={12}>
            <div className="space-y-6">
              <Title level={2} className="!text-white mb-8 text-2xl md:text-3xl">
                ¿Por qué elegir Colmena AI?
              </Title>

              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div>
                        <Title level={4} className="!text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {feature.title}
                        </Title>
                        <Text className="text-gray-300 group-hover:text-gray-200 transition-colors">
                          {feature.description}
                        </Text>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  type="primary"
                  size="large"
                  className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border-none text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                  icon={<MessageCircle className="w-5 h-5" />}
                  onClick={() => window.location.href = "https://t.me/Colmena01_bot"}
                >
                  Prueba Colmena AI Gratis
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "99.9%", label: "Tiempo Activo" },
            { number: "<1s", label: "Tiempo Respuesta" },
            { number: "24/7", label: "Disponibilidad" },
            { number: "∞", label: "Conversaciones" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
