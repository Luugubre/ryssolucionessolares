'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, FileText, Leaf, Coins, BarChart3, Trophy, SunMedium, Users, Home, Building2, Factory, ShieldCheck
} from 'lucide-react'

// Configuraciones de animación
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function AcercaPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://dceupbfonovchzinruai.supabase.co/storage/v1/object/public/imagenes-pagina/ChatGPT%20Image%207%20sept%202026,%2010_08_13%20p.m..png" 
            alt="Fondo amanecer paneles solares"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 text-white">
            <motion.div variants={fadeUp} className="inline-block border border-orange-500/50 bg-orange-500/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="text-orange-500 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Nuestra Identidad</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              Comprometidos con el futuro de la <span className="text-orange-500">energía solar en Chile</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-200 max-w-xl mb-10 leading-relaxed font-light">
              Otorgamos independencia energética y reducción de costos operativos a residencias, comercios e industrias a través de soluciones con los más altos estándares.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="#servicios" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg hover:shadow-orange-600/30">
                Conoce nuestros servicios <ArrowRight size={18} />
              </Link>
              <Link href="/contacto" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2 backdrop-blur-sm">
                <FileText size={18} /> Cotiza tu proyecto
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-5 flex flex-col gap-8 lg:pl-12 pt-12 lg:pt-0">
            {[
              { icon: <Leaf className="text-orange-400" size={24} />, title: "Energía limpia", desc: "Un Chile más sostenible" },
              { icon: <Coins className="text-orange-400" size={24} />, title: "Ahorro real", desc: "Menores costos de energía" },
              { icon: <BarChart3 className="text-orange-400" size={24} />, title: "Mayor independencia", desc: "Controla tu energía" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="mt-8 text-right lg:text-left lg:ml-20">
              <p className="text-3xl text-white font-['Caveat',_'Comic_Sans_MS',_cursive] transform -rotate-3 drop-shadow-lg">Un futuro<br/>más brillante</p>
              <div className="w-32 h-1 bg-orange-500 rounded-full mt-2 ml-auto lg:ml-12 transform -rotate-3" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ESTADÍSTICAS FLOTANTES */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="bg-white rounded-[2.5rem] shadow-2xl py-8 px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 border border-slate-100 relative overflow-hidden">
          {/* Brillo sutil de fondo en la tarjeta */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          {[
            { icon: <Trophy size={28} />, num: "9+", text: "Años de experiencia" },
            { icon: <SunMedium size={28} />, num: "+500", text: "Proyectos instalados" },
            { icon: <Users size={28} />, num: "100%", text: "Clientes satisfechos" },
            { icon: <Users size={28} />, num: "15+", text: "Miembros del equipo" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full md:w-1/4 relative z-10">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-3 shadow-sm border border-orange-100">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">{stat.num}</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.text}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SEGMENTOS */}
      <section className="pt-32 pb-20 px-8 relative bg-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4 tracking-tight">Energía solar para un mejor mañana</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-slate-500 text-lg leading-relaxed">
            En R&S Soluciones Solares trabajamos para que más personas y empresas en Chile accedan a una energía limpia, confiable y al alcance de todos.
          </motion.p>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { icon: <Home size={32} />, title: "Residencias", desc: "Ahorra en tu hogar y cuida el planeta" },
            { icon: <Building2 size={32} />, title: "Comercios", desc: "Soluciones a la medida de tu negocio" },
            { icon: <Factory size={32} />, title: "Industrias", desc: "Proyectos de alta eficiencia para grandes consumos" },
            { icon: <Leaf size={32} />, title: "Un Chile más limpio", desc: "Juntos por un futuro sustentable" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center group bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 rounded-full border border-orange-100 bg-orange-50/50 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* NUESTRA MISIÓN - REDISEÑADA Y ANIMADA */}
      <section className="relative max-w-7xl mx-auto px-8 py-32">
        {/* Glow de fondo decorativo */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
            {/* AQUÍ ESTÁ LA NUEVA IMAGEN DE MISIÓN */}
            <Image src="https://dceupbfonovchzinruai.supabase.co/storage/v1/object/public/imagenes-pagina/ChatGPT%20Image%208%20sept%202026,%2012_28_12%20a.webp" alt="Instalación de paneles solares" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Sello Flotante Mejorado */}
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center shadow-inner border border-orange-100"><ShieldCheck size={28} strokeWidth={2.5} /></div>
                <div>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mb-1">Garantía total</p>
                  <p className="text-sm sm:text-base font-black text-[#0F172A] leading-tight">Calidad y satisfacción asegurada</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:pl-8">
            <motion.div variants={fadeUp} className="inline-block border border-orange-200 bg-orange-50 rounded-full px-4 py-1.5 mb-6">
              <span className="text-orange-600 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Nuestra Misión</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-[#0F172A] mb-8 leading-[1.1] tracking-tight">
              Diseñamos soluciones solares a <span className="text-orange-500">tu medida</span>
            </motion.h2>
            
            <div className="space-y-6 text-slate-500 leading-relaxed text-lg">
              <motion.p variants={fadeUp}>
                En <strong className="text-[#0F172A]">R&S Soluciones Solares</strong>, hemos logrado transformar la manera en que nuestros clientes acceden a la energía sostenible, impulsando ahorros significativos en sus costos energéticos.
              </motion.p>
              <motion.p variants={fadeUp}>
                Nuestra compañía ha ayudado a numerosos clientes a reducir su dependencia de fuentes de energía no renovables, proporcionando sistemas fotovoltaicos con ingeniería de precisión que garantizan máxima eficiencia.
              </motion.p>
              <motion.p variants={fadeUp}>
                Hoy, quienes confían en nosotros disfrutan de una energía más limpia y sostenible, contribuyendo al cuidado del medio ambiente con tecnología de vanguardia y atención meticulosa al detalle.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NUESTRA HISTORIA - REDISEÑADA Y ANIMADA (Estilo Dark Mode Premium) */}
      <section className="relative bg-[#0F172A] py-32 overflow-hidden text-white">
        {/* Glow decorativo oscuro */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] opacity-60 translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] opacity-40 -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="order-2 lg:order-1">
            <motion.div variants={fadeUp} className="inline-block border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 mb-6">
              <span className="text-orange-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Nuestra Historia</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight">
              Crecimiento y compromiso en <span className="text-orange-400">energías renovables</span>
            </motion.h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed mb-10 text-lg font-light">
              <motion.p variants={fadeUp}>
                Fundada en el <strong className="text-white font-bold">año 2017</strong>, R&S Soluciones Solares inició su camino con la firme visión de transformar la matriz energética en Chile, acercando la tecnología solar a cada rincón del país.
              </motion.p>
              <motion.p variants={fadeUp}>
                Desde entonces, hemos crecido de manera constante, brindando soluciones efectivas que van más allá de la simple venta de equipos. Nos enfocamos profundamente en el soporte técnico continuo y la satisfacción integral del cliente en cada etapa del proyecto.
              </motion.p>
            </div>
            
            <motion.div variants={fadeUp}>
              <Link href="/tienda" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-orange-600/30 hover:-translate-y-1 group">
                Explorar catálogo de equipos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
            {/* AQUÍ ESTÁ LA NUEVA IMAGEN DE HISTORIA */}
            <Image src="https://dceupbfonovchzinruai.supabase.co/storage/v1/object/public/imagenes-pagina/ChatGPT%20Image%207%20sept%202026,%2011_11_51%20p.webp" alt="Ingeniero revisando paneles solares" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/80 via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>

    </div>
  )
}